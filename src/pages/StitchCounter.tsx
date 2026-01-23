import ImageCarousel from '../components/ImageCarousel'

export default function StitchCounter() {
  const slides = [
    {
      image: '/images/stitch_counter_single_counter.png',
      text: 'Single Counter',
      id: 0,
    },
    {
      image: '/images/stitch_counter_double_counter.png',
      text: 'Double Counter',
      id: 1,
    },
    {
      image: '/images/stitch_counter_double_counter_tablet_7_inch.png',
      text: 'Themed Tablet',
      id: 2,
    },
    {
      image: '/images/stitch_counter_single_counter_landscape.png',
      text: 'Themed Single Counter Landscape',
      id: 3,
    },
    {
      image: '/images/stitch_counter_double_counter_landscape.png',
      text: 'Themed Double Counter Landscape',
      id: 4,
    },
  ]

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <img
              src="/images/application_icon_stitch_counter.png"
              alt="Stitch Counter Icon"
              className="w-28 h-28 rounded-2xl shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900 tracking-tight">
            Stitch Counter
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            An Android app for tracking knitting and crochet projects with customizable themes
          </p>
        </div>

        {/* Project Details */}
        <div className="card p-8 md:p-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">About the Project</h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                Stitch Counter is an Android app that allows users to keep track of their knitting or crochet projects
                in two ways: through a single counter for tracking stitches or rows, or through a double counter with
                separate counters for stitches and rows.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>Single counter mode for tracking stitches or rows</li>
                <li>Double counter mode with separate stitch and row counters</li>
                <li>Library system to save counters and return to them later</li>
                <li>6 different customizable color themes</li>
                <li>Optimized for portrait and landscape modes</li>
                <li>Responsive design for all device sizes</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=io.github.annaharri89.stitchcounter"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-900 border border-neutral-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.53L15.24,13.58L17.69,12L15.24,10.42L17.19,8.47L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play Store
              </a>
              <a
                href="https://github.com/annaharri89/stitchCounter"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-900 border border-neutral-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-8">
          <ImageCarousel slides={slides} />
        </div>
      </div>
    </div>
  )
}
