import Hero from '../components/Hero'

export default function StitchTrackerEula() {
  return (
    <>
      <Hero
        title="End-User License Agreement (EULA)"
        subtitle="Version 2 of Stitch Counter"
        variant="compact"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <div className="project-detail-section">
              <p className="text-neutral-500 text-sm mb-6">Last updated: February 13, 2026</p>

              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                This End-User License Agreement ("Agreement") is a legal agreement between you ("User") and{' '}
                <strong>Anna Harrison</strong> ("Developer") governing your use of version 2 of the <strong>Stitch Counter</strong> application ("App").
                By downloading or using the App, you agree to this Agreement.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">1. License Grant</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                The Developer grants you a personal, non-exclusive, non-transferable, revocable license
                to use the App for personal, non-commercial purposes.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">2. Restrictions</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Copy, modify, or redistribute the compiled App</li>
                <li>Reverse engineer the App except where permitted by law</li>
                <li>Use the App for unlawful purposes</li>
              </ul>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">3. User Data</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                All data created within the App (projects, counters, photos, preferences) is stored locally on your device.
                The Developer does not collect, access, or store your data.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">4. Ownership</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                The App, including its design, graphics, and branding, is the property of the Developer.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">5. Open-Source Components</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                The App may include components licensed under the Apache License 2.0 or other open-source licenses.
                Nothing in this Agreement limits your rights under those licenses.
                Open-source licensing applies to the source code; this Agreement applies to the compiled App.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">6. Disclaimer of Warranties</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                The App is provided "as is" without warranties of any kind.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">7. Limitation of Liability</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                To the fullest extent permitted by law, the Developer shall not be liable for data loss,
                device issues, or indirect damages arising from use of the App.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">8. Termination</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                This license terminates automatically if you violate this Agreement.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">9. Changes</h2>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                The Developer may update this Agreement from time to time.
                Continued use of the App constitutes acceptance of the updated Agreement.
              </p>

              <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-3">10. Contact</h2>
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
