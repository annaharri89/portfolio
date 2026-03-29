import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type LightboxState = {
  src: string
  enlargedDescription: string
}

const CaseStudyLightboxContext = createContext<
  ((payload: LightboxState) => void) | null
>(null)

export function useCaseStudyLightboxOpen() {
  const open = useContext(CaseStudyLightboxContext)
  if (!open) {
    throw new Error('useCaseStudyLightboxOpen must be used within CaseStudyLightboxProvider')
  }
  return open
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  )
}

export function CaseStudyLightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null)

  const close = useCallback(() => setState(null), [])

  const open = useCallback((payload: LightboxState) => {
    setState(payload)
  }, [])

  useEffect(() => {
    if (!state) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [state])

  useEffect(() => {
    if (!state) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [state, close])

  return (
    <CaseStudyLightboxContext.Provider value={open}>
      {children}
      {state && (
        <div
          className="case-study__lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={state.enlargedDescription}
          onClick={close}
          onKeyDown={(event) => {
            if (event.key === 'Escape') close()
          }}
        >
          <button
            type="button"
            className="case-study__lightbox-close"
            aria-label="Close enlarged image"
            onClick={(event) => {
              event.stopPropagation()
              close()
            }}
          >
            <CloseIcon />
          </button>
          <div
            className="case-study__lightbox-img-wrap"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={state.src} alt={state.enlargedDescription} />
          </div>
        </div>
      )}
    </CaseStudyLightboxContext.Provider>
  )
}
