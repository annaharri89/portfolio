import { createSignal, onMount, onCleanup, Show } from 'solid-js'
import Hero from '@components/Hero'
import GithubIcon from '@components/icons/GithubIcon'
import { API_CONFIG } from '@consts/api'

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": globalThis.JSX.IntrinsicElements['altcha-widget']
    }
  }
}

function LinkedInIcon(props: { class?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#0077B5" class={props.class ?? 'w-6 h-6'}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const [name, setName] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [message, setMessage] = createSignal('')
  const [isSubmitting, setIsSubmitting] = createSignal(false)
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = createSignal('')
  const [altchaPayload, setAltchaPayload] = createSignal<string | null>(null)
  let altchaWidgetRef: HTMLElement | undefined

  onMount(() => {
    const setupWidgetFromDOM = () => {
      const widget = document.querySelector('altcha-widget') as (HTMLElement & {
        addEventListener: (event: string, handler: (e: CustomEvent) => void) => void
        getState: () => string
        reset: () => void
      }) | null

      if (!widget) return false

      altchaWidgetRef = widget

      const handleVerified = (e: CustomEvent<{ payload: string }>) => {
        setAltchaPayload(e.detail.payload)
      }

      const handleStateChange = (e: CustomEvent<{ state: string }>) => {
        if (e.detail.state === 'error') {
          setSubmitStatus('error')
          setErrorMessage('ALTCHA verification failed. Please try again.')
          setAltchaPayload(null)
        } else if (e.detail.state === 'verified') {
          setSubmitStatus('idle')
          setErrorMessage('')
        }
      }

      widget.addEventListener('verified', handleVerified as EventListener)
      widget.addEventListener('statechange', handleStateChange as EventListener)

      onCleanup(() => {
        widget.removeEventListener('verified', handleVerified as EventListener)
        widget.removeEventListener('statechange', handleStateChange as EventListener)
      })

      return true
    }

    if (!setupWidgetFromDOM()) {
      const onLoad = () => setupWidgetFromDOM()
      window.addEventListener('load', onLoad)
      onCleanup(() => window.removeEventListener('load', onLoad))
    }
  })

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()

    if (isSubmitting()) return

    if (!altchaPayload()) {
      setSubmitStatus('error')
      setErrorMessage('Please complete the verification before submitting.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email(),
          subject: name() ? `Contact from ${name()}` : 'Contact Form Submission',
          body: message(),
          altcha: altchaPayload(),
        }),
      })

      let data
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        throw new Error(`Server returned non-JSON response: ${response.status} ${response.statusText}`)
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setAltchaPayload(null)

      if (altchaWidgetRef) {
        (altchaWidgetRef as HTMLElement & { reset: () => void }).reset()
      }
    } catch (error) {
      console.error('[Contact] Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Hero
        title="Let's Connect"
        subtitle="I'd love to hear from you! Whether you have a project in mind, a job opportunity, or just want to chat about development."
        variant="compact"
      />
      <section class="contact">
        <div class="container">
          <div class="contact-content">
            <div class="contact-grid">
              <div class="contact-form-column">
                <div class="contact-form">
                  <h3 style={{ "margin-bottom": 'var(--spacing-md)' }}>Send a Message</h3>
                  <Show when={submitStatus() === 'success'}>
                    <div style={{
                      padding: 'var(--spacing-md)',
                      "margin-bottom": 'var(--spacing-md)',
                      "background-color": '#d4edda',
                      color: '#155724',
                      "border-radius": '4px'
                    }}>
                      Thank you for your message! We will get back to you soon.
                    </div>
                  </Show>
                  <Show when={submitStatus() === 'error'}>
                    <div style={{
                      padding: 'var(--spacing-md)',
                      "margin-bottom": 'var(--spacing-md)',
                      "background-color": '#f8d7da',
                      color: '#721c24',
                      "border-radius": '4px'
                    }}>
                      {errorMessage()}
                    </div>
                  </Show>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="name" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-input"
                        value={name()}
                        onInput={(e) => setName(e.currentTarget.value)}
                        required
                        disabled={isSubmitting()}
                      />
                    </div>
                    <div class="form-group">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-input"
                        value={email()}
                        onInput={(e) => setEmail(e.currentTarget.value)}
                        required
                        disabled={isSubmitting()}
                      />
                    </div>
                    <div class="form-group">
                      <label for="message" class="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        class="form-textarea"
                        value={message()}
                        onInput={(e) => setMessage(e.currentTarget.value)}
                        required
                        disabled={isSubmitting()}
                      ></textarea>
                    </div>
                    <altcha-widget
                      challengeurl={`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ALTCHA_CHALLENGE}`}
                      auto="onload"
                      name="altcha"
                    />
                    <button
                      type="submit"
                      class="contact-link"
                      style={{ width: '100%', "justify-content": 'center', "margin-top": 'var(--spacing-md)' }}
                      disabled={isSubmitting() || !altchaPayload()}
                    >
                      {isSubmitting() ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              <div class="contact-links-column">
                <div class="contact-links-card">
                  <h3 style={{ "margin-bottom": 'var(--spacing-md)' }}>Find Me Online</h3>
                  <div class="contact-links">
                    <a
                      href="https://www.linkedin.com/in/anna-harrison-83a38628"
                      class="contact-link"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/annaharri89"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-link"
                    >
                      <GithubIcon class="w-6 h-6" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
