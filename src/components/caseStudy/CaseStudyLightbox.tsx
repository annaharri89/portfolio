import {
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  Show,
  useContext,
  type ParentProps,
} from 'solid-js'

export type CaseStudyLightboxImagePayload = {
  kind: 'image'
  src: string
  enlargedDescription: string
}

export type CaseStudyLightboxVideoPayload = {
  kind: 'video'
  enlargedDescription: string
  webm?: string
  mp4?: string
}

export type CaseStudyLightboxPayload = CaseStudyLightboxImagePayload | CaseStudyLightboxVideoPayload

type LightboxOpen = (payload: CaseStudyLightboxPayload) => void

const CaseStudyLightboxContext = createContext<LightboxOpen>()

export function useCaseStudyLightboxOpen(): LightboxOpen {
  const open = useContext(CaseStudyLightboxContext)
  if (!open) {
    throw new Error('useCaseStudyLightboxOpen must be used within CaseStudyLightboxProvider')
  }
  return open
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" />
    </svg>
  )
}

export function CaseStudyLightboxProvider(props: ParentProps) {
  const [state, setState] = createSignal<CaseStudyLightboxPayload | null>(null)

  const close = () => setState(null)

  const open: LightboxOpen = (payload) => {
    setState(payload)
  }

  createEffect(() => {
    if (!state()) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    onCleanup(() => {
      document.body.style.overflow = previousOverflow
    })
  })

  createEffect(() => {
    if (!state()) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    onCleanup(() => window.removeEventListener('keydown', onKeyDown))
  })

  return (
    <CaseStudyLightboxContext.Provider value={open}>
      {props.children}
      <Show when={state()} keyed>
        {(lightbox) => (
          <div
            class="case-study__lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.enlargedDescription}
            onClick={close}
            onKeyDown={(event) => {
              if (event.key === 'Escape') close()
            }}
          >
            <button
              type="button"
              class="case-study__lightbox-close"
              aria-label="Close"
              onClick={(event) => {
                event.stopPropagation()
                close()
              }}
            >
              <CloseIcon />
            </button>
            <div
              class="case-study__lightbox-img-wrap"
              onClick={(event) => event.stopPropagation()}
            >
              {lightbox.kind === 'image' ? (
                <img src={lightbox.src} alt={lightbox.enlargedDescription} />
              ) : (
                <video
                  class="case-study__lightbox-video"
                  controls
                  playsinline
                  preload="metadata"
                  aria-label={lightbox.enlargedDescription}
                  ref={(element) => {
                    if (!element) return
                    void element.play().catch(() => {})
                  }}
                >
                  {lightbox.webm ? <source src={lightbox.webm} type="video/webm" /> : null}
                  {lightbox.mp4 ? <source src={lightbox.mp4} type="video/mp4" /> : null}
                </video>
              )}
            </div>
          </div>
        )}
      </Show>
    </CaseStudyLightboxContext.Provider>
  )
}
