import { createSignal, For, type Component } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import { ROUTES } from '@consts/routes'
import UpworkNavCta from './navigation/UpworkNavCta'
import MainSiteNavCta from './navigation/MainSiteNavCta'

const NAV_ITEMS = [
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.SKILLS, label: 'Skills' },
]

const NavCta: Component<{ onNavigate: () => void }> =
  import.meta.env.VITE_UPWORK_MODE === 'true' ? UpworkNavCta : MainSiteNavCta

export default function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  const isActive = (path: string) => location.pathname === path
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav class="nav" id="nav">
      <div class="nav-container">
        <a href={ROUTES.HOME} class="nav-logo">
          Anna Harrison
        </a>
        <button
          class="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen()}
          onClick={() => setIsMenuOpen(!isMenuOpen())}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" id="navMenu" aria-expanded={isMenuOpen()}>
          <For each={NAV_ITEMS}>
            {(item) => (
              <li>
                <A
                  href={item.path}
                  class={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </A>
              </li>
            )}
          </For>
          <li class="nav-cta-item">
            <NavCta onNavigate={closeMenu} />
          </li>
        </ul>
      </div>
    </nav>
  )
}
