import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-neutral-900 tracking-tight">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Software Developer creating meaningful applications with modern technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-neutral-900 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stitch Tracker */}
            <Link
              to="/stitch-counter-v2"
              className="card card-hover p-8 md:p-10 block transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl shadow-lg bg-neutral-100 flex items-center justify-center mb-6">
                  <span className="text-neutral-400 text-5xl">🧶</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-900">Stitch Counter v2</h3>
                <p className="text-neutral-600 leading-relaxed">
                  The next generation of stitch counting - an evolution of Stitch Counter with enhanced features
                  and a modern user experience.
                </p>
              </div>
            </Link>

            {/* Collab Check Lists */}
            <Link
              to="/collab-check-lists"
              className="card card-hover p-8 md:p-10 block transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl shadow-lg bg-neutral-100 flex items-center justify-center mb-6">
                  <span className="text-neutral-400 text-5xl">✓</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-900">Collab Check Lists</h3>
                <p className="text-neutral-600 leading-relaxed">
                  A collaborative checklist application that enables teams to work together efficiently and stay
                  organized.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Archive Section */}
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-neutral-900">Project Archive</h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Explore my earlier projects that showcase my growth and evolution as a developer. These projects
            represent important milestones in my journey and demonstrate how my skills have progressed over time.
          </p>
          <Link
            to="/archive"
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            View Archive
          </Link>
        </div>
      </div>
    </div>
  )
}
