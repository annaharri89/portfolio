import { createSignal, For } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import { ROUTES } from '@consts/routes'

const NAV_ITEMS = [
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.PROJECTS, label: 'Projects' },
  { path: ROUTES.SKILLS, label: 'Skills' },
  { path: ROUTES.CONTACT, label: 'Contact' },
]

export default function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <nav class="nav" id="nav">
      <div class="nav-container">
        <A href={ROUTES.HOME} class="nav-logo">
          Anna Harrison
        </A>
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
          <For each={NAV_ITEMS}>{(item) => (
            <li>
              <A
                href={item.path}
                class={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </A>
            </li>
          )}</For>
        </ul>
      </div>
    </nav>
  )
}
