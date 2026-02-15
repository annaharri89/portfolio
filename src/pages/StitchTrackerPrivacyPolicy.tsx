import Hero from '../components/Hero'

export default function StitchTrackerPrivacyPolicy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Version 2 of Stitch Counter"
        variant="compact"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <div className="project-detail-section">
              <p className="text-neutral-500 text-sm mb-6">Last updated: February 13, 2026</p>

              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                This Privacy Policy describes how version 2 of <strong>Stitch Counter</strong> ("App") handles information.
                The App is developed by <strong>Anna Harrison</strong>.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">1. Data Collection</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-2">
                <strong>The App does not collect, store, or transmit personal data.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>No accounts</li>
                <li>No analytics</li>
                <li>No tracking</li>
                <li>No advertising SDKs</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">2. Local Storage</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                All projects, counters, preferences, and photos are stored locally on your device.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">3. Photos</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Photos added to projects remain on your device and are never transmitted.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">4. Import / Export</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Backup and restore features are user-initiated. The Developer does not receive exported data.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">5. Third-Party Links</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Optional support/donation links may open external websites governed by their own policies.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">6. Security</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Because data is stored locally, protection is handled by your device's operating system.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">7. Children's Privacy</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                No personal data is collected.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">8. Changes</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                This policy may be updated periodically.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">9. Contact</h2>
              <p className="text-neutral-700 leading-relaxed text-base">
                <strong>Email:</strong> <a href="mailto:support@harrisonsoftware.dev">support@harrisonsoftware.dev</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
