import { useState, useEffect, FormEvent, useRef } from 'react'
import Hero from '../components/Hero'
import GithubIcon from '../components/icons/GithubIcon'
import { API_CONFIG } from '../constants/api'

function LinkedInIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#0077B5" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [altchaPayload, setAltchaPayload] = useState<string | null>(null)
  const altchaWidgetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const setupWidget = () => {
      const widget = document.querySelector('altcha-widget') as HTMLElement & {
        addEventListener: (event: string, handler: (e: CustomEvent) => void) => void
        getState: () => string
        reset: () => void
      }
      
      if (widget) {
        altchaWidgetRef.current = widget
        
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
        
        return () => {
          widget.removeEventListener('verified', handleVerified as EventListener)
          widget.removeEventListener('statechange', handleStateChange as EventListener)
        }
      }
    }
    
    const cleanup = setupWidget()
    if (!cleanup) {
      window.addEventListener('load', setupWidget)
      return () => {
        window.removeEventListener('load', setupWidget)
      }
    }
    
    return cleanup
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (isSubmitting) {
      return
    }
    
    if (!altchaPayload) {
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
          email,
          subject: name ? `Contact from ${name}` : 'Contact Form Submission',
          body: message,
          altcha: altchaPayload,
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
      
      if (altchaWidgetRef.current) {
        const widget = altchaWidgetRef.current as HTMLElement & {
          reset: () => void
        }
        widget.reset()
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
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-grid">
              <div className="contact-form-column">
                <div className="contact-form">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Send a Message</h3>
                  {submitStatus === 'success' && (
                    <div style={{ 
                      padding: 'var(--spacing-md)', 
                      marginBottom: 'var(--spacing-md)', 
                      backgroundColor: '#d4edda', 
                      color: '#155724', 
                      borderRadius: '4px' 
                    }}>
                      Thank you for your message! We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div style={{ 
                      padding: 'var(--spacing-md)', 
                      marginBottom: 'var(--spacing-md)', 
                      backgroundColor: '#f8d7da', 
                      color: '#721c24', 
                      borderRadius: '4px' 
                    }}>
                      {errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                    <altcha-widget
                      challengeurl={`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ALTCHA_CHALLENGE}`}
                      auto="onload"
                      name="altcha"
                    />
                    <button
                      type="submit"
                      className="contact-link"
                      style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--spacing-md)' }}
                      disabled={isSubmitting || !altchaPayload}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="contact-links-column">
                <div className="contact-links-card">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Find Me Online</h3>
                  <div className="contact-links">
                    <a
                      href="https://www.linkedin.com/in/anna-harrison-83a38628"
                      className="contact-link"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/annaharri89"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <GithubIcon className="w-6 h-6" />
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
