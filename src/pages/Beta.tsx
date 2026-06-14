import Hero from '@components/Hero'
import { A } from '@solidjs/router'
import { ROUTES, STITCH_COUNTER_V2_PLAY_STORE_URL } from '@consts/routes'

export default function Beta() {
  return (
    <>
      <Hero
        title="Stitch Counter on Google Play (Android)"
        subtitle=""
        variant="compact"
      />
      <section class="project-detail">
        <div class="site-container">
          <div class="project-detail-section">
              <h3>Stitch Counter is in production</h3>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                A local-first row and stitch counter for knitters and crocheters: data stays on your device, with no
                cloud sync or accounts.
              </p>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Availability: Android on Google Play production.
              </p>

              <h4>What to expect</h4>
              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Track projects with single or double counters (stitches/rows)</li>
                <li>Save projects in your library and pick up where you left off</li>
                <li>Add up to 6 reference photos per project</li>
                <li>Choose from multiple themes with light/dark mode support</li>
                <li>Import/export local backups (including project photos) for device transfer</li>
                <li>Privacy-first: no account, no analytics, all data stays on your device</li>
                <li>No cloud: counting and your library work without internet; nothing syncs to the cloud</li>
                <li>Free and ad-free</li>
              </ul>

              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Install from Google Play on an Android phone or tablet with the Play Store.
              </p>

              <h4 class="mb-6">Get the app</h4>
              <div class="project-links project-links-vertical mb-6">
                <a
                  href={STITCH_COUNTER_V2_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  Get Stitch Counter on Google Play
                </a>
              </div>

              <ul class="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>
                  Sign in with the Google account you will use on the device if Play asks for sign-in.
                </li>
                <li>
                  Install on an Android phone or tablet with the Play Store. Do not expect a desktop-only web install to
                  work.
                </li>
                <li>After your first install, updates come through Play like any other app.</li>
              </ul>

              <h4>Important: Backup note</h4>
              <p class="text-neutral-700 leading-relaxed text-base mb-6">
                Please back up your projects regularly in Settings &gt; Backup &amp; Restore, especially before device
                changes.
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
      </section>
    </>
  )
}
