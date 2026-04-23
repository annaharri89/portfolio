import { onCleanup } from 'solid-js'

/** Use a direct file path so Vite serves the iframe entry reliably. */
function korgeSolitaireIndexUrl(): string {
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/') {
    return '/korge-solitaire/index.html'
  }
  return `${base.replace(/\/$/, '')}/korge-solitaire/index.html`
}

function attachTouchScrollLockToParentDocument(iframe: HTMLIFrameElement) {
  const childWindow = iframe.contentWindow
  if (!childWindow) {
    return () => {}
  }

  let childDocument: Document
  try {
    childDocument = childWindow.document
  } catch {
    return () => {}
  }

  const previousHtmlOverflow = document.documentElement.style.overflow
  const previousBodyOverflow = document.body.style.overflow
  let activeTouches = 0

  const lockParentScroll = () => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  }

  const unlockParentScroll = () => {
    document.documentElement.style.overflow = previousHtmlOverflow
    document.body.style.overflow = previousBodyOverflow
  }

  const onTouchStart = () => {
    activeTouches += 1
    lockParentScroll()
  }

  const onTouchEndOrCancel = () => {
    activeTouches = Math.max(0, activeTouches - 1)
    if (activeTouches === 0) {
      unlockParentScroll()
    }
  }

  const capture = true
  childDocument.addEventListener('touchstart', onTouchStart, { capture, passive: true })
  childDocument.addEventListener('touchend', onTouchEndOrCancel, { capture, passive: true })
  childDocument.addEventListener('touchcancel', onTouchEndOrCancel, { capture, passive: true })

  return () => {
    childDocument.removeEventListener('touchstart', onTouchStart, capture)
    childDocument.removeEventListener('touchend', onTouchEndOrCancel, capture)
    childDocument.removeEventListener('touchcancel', onTouchEndOrCancel, capture)
    activeTouches = 0
    unlockParentScroll()
  }
}

export default function KorgeSolitaireEmbed() {
  const iframeSrc = korgeSolitaireIndexUrl()
  let detachTouchScrollLock: (() => void) | undefined

  onCleanup(() => {
    detachTouchScrollLock?.()
    detachTouchScrollLock = undefined
  })

  return (
    <div class="mt-6 mb-8">
      <h3 class="mb-3 text-lg font-semibold text-neutral-900">Solitaire Interactive Demo - FreeCell Coming Soon</h3>
      <div class="korge-solitaire-embed-shell relative mx-auto w-full max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 shadow-md">
        <div class="korge-solitaire-embed-ratio">
          <iframe
            title="KorGE Solitaire and FreeCell demo"
            src={iframeSrc}
            class="absolute left-0 top-0 h-full w-full border-0"
            allow="fullscreen"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={(event) => {
              const iframe = event.currentTarget
              detachTouchScrollLock?.()
              detachTouchScrollLock = attachTouchScrollLockToParentDocument(iframe)
            }}
          />
        </div>
      </div>
    </div>
  )
}
