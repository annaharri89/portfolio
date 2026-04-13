import Hero from '@components/Hero'
import { A } from '@solidjs/router'
import { ROUTES } from '@consts/routes'

export default function Beta() {
  const playBetaTestingUrl =
    'https://play.google.com/apps/testing/dev.harrisonsoftware.stitchCounter'

  return (
    <>
      <Hero
        title="Try Stitch Counter Beta (Android)"
        subtitle=""
        variant="compact"
      />
      <section class="project-detail">
        <div class="container">
          <div class="project-detail-content">
            <div class="project-detail-section">
              <h3>Help shape Stitch Counter before launch</h3>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                I&apos;m opening a beta for knitters and crocheters who want a simple offline row and stitch counter.
              </p>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Availability: Android only via Google Play beta.
              </p>

              <h4>What to expect</h4>
              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Track projects with single or double counters (stitches/rows)</li>
                <li>Save projects in your library and pick up where you left off</li>
                <li>Add up to 6 reference photos per project</li>
                <li>Choose from multiple themes with light/dark mode support</li>
                <li>Import/export local backups (including project photos) for device transfer</li>
                <li>Privacy-first: no account, no analytics, all data stays on your device</li>
                <li>Works offline</li>
                <li>Free and ad-free</li>
              </ul>

              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                If you&apos;d like early access and want to share feedback, use the link below and follow Google
                Play&apos;s prompts to install Stitch Counter.
              </p>

              <h4 class="mb-6">How to join</h4>
              <div class="project-links project-links-vertical mb-6">
                <a href={playBetaTestingUrl} target="_blank" rel="noopener noreferrer" class="project-link">
                  Join the Stitch Counter beta on Google Play
                </a>
              </div>

              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>
                  Sign in with the Google account you will use to install the app—the testing page often asks for
                  sign-in.
                </li>
                <li>
                  Complete the flow on an Android phone or tablet with the Play Store. Do not expect a desktop-only web
                  install to work.
                </li>
                <li>After your first install, updates come through Play like any other app—you do not need this link again.</li>
                <li>
                  If Play says the app isn&apos;t available yet, wait 5-15 minutes after enrolling and try opening the
                  link again from your device.
                </li>
              </ul>

              <h4>Beta stability note</h4>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                You may run into bugs, and data loss is possible while features are being tested.
              </p>

              <h4>Important: Backup note</h4>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Please back up your projects regularly in Settings &gt; Backup &amp; Restore while the beta is in progress.
              </p>

              <h4>Found an issue or have an idea?</h4>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                In the app, go to Settings &gt; Support and use:
              </p>
              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Report Bug</li>
                <li>Send Feedback</li>
                <li>Request Feature</li>
              </ul>

              <h3>
                Thank you for helping make Stitch Counter better for the fiber community!
              </h3>
                <div class="project-links">
                <A href={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} class="project-link">
                  Privacy Policy
                </A>
                <A href={ROUTES.STITCH_COUNTER_V2_EULA} class="project-link">
                  EULA
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
