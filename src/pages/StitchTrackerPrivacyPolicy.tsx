import Hero from '@components/Hero'

export default function StitchTrackerPrivacyPolicy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Version 2 of Stitch Counter"
        variant="compact"
      />
      <section class="project-detail">
        <div class="container">
          <div class="project-detail-content">
            <div class="project-detail-section">
              <p class="text-neutral-500 text-sm mb-6">Last updated: March 16, 2026</p>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                This Privacy Policy describes how version 2 of <strong>Stitch Counter</strong> ("App") handles information.
                The App is developed by <strong>Anna Harrison</strong>.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">1. Core Privacy Approach</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-2">
                The App is local-first. Projects, counters, preferences, and photos are stored on your device during normal use.
              </p>
              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>No user accounts</li>
                <li>No analytics SDKs</li>
                <li>No ad SDKs</li>
                <li>No background telemetry uploads</li>
              </ul>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">2. Optional Diagnostics in Bug Reports</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                When you choose to send a bug report, you can include diagnostics. Diagnostics are optional and user-controlled:
                you can uncheck the diagnostics option and send a report without the diagnostics attachment.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">3. What Diagnostics May Include</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Diagnostics may include technical information generated during app operation and error handling, such as device and app metadata,
                event context, identifiers, file or location references, and error details. This may include user-provided or device-generated text
                contained in those records (for example, project titles, file paths or URIs, and exception messages).
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">4. How Diagnostics Are Used</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Diagnostics sent in bug reports are used only for support and troubleshooting, including reproducing and fixing issues.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">5. Import / Export</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Backup and restore features are user-initiated. The Developer does not automatically receive exported data.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">6. Third-Party Links</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Optional support or donation links may open external websites governed by their own policies.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">7. Security</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Because app data is stored locally during normal use, protection is handled by your device operating system and security settings.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">8. Retention</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                If you send diagnostics by email, the report may be retained for support history and bug-fix tracking.
                You can request deletion of previously sent support emails by contacting the address below.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">9. Children's Privacy</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                The App does not include background monitoring features intended to collect children's personal data.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">10. Changes</h2>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Diagnostic fields may be adjusted over time to improve troubleshooting. This policy will be updated if data practices materially change.
              </p>

              <h2 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">11. Contact</h2>
              <p class="text-neutral-700 leading-relaxed text-base">
                <strong>Email:</strong> <a href="mailto:support@harrisonsoftware.dev">support@harrisonsoftware.dev</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
