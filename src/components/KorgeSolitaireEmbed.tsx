/** Use a direct file path so Vite serves the iframe entry reliably. */
function korgeSolitaireIndexUrl(): string {
  const base = import.meta.env.BASE_URL || '/'
  if (base === '/') {
    return '/korge-solitaire/index.html'
  }
  return `${base.replace(/\/$/, '')}/korge-solitaire/index.html`
}

export default function KorgeSolitaireEmbed() {
  const iframeSrc = korgeSolitaireIndexUrl()

  return (
    <div class="mt-6 mb-8">
      <h4 class="mb-3 text-lg font-semibold text-neutral-900">Play in browser</h4>
      <div class="korge-solitaire-embed-shell relative mx-auto w-full max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 shadow-md">
        <div class="korge-solitaire-embed-ratio">
          <iframe
            title="KorGE Solitaire and FreeCell demo"
            src={iframeSrc}
            class="absolute left-0 top-0 h-full w-full border-0"
            allow="fullscreen"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  )
}
