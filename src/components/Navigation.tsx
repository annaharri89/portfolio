import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/stitch-counter-v2', label: 'Stitch Counter v2' },
    { path: '/collab-check-lists', label: 'Collab Check Lists' },
    { path: '/archive', label: 'Archive' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200 mb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-5">
          <Link to="/" className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              Anna Harrison
            </h1>
          </Link>
          <div className="flex flex-wrap justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive(item.path)
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
