import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
export default function Beta() {
  const playOptInUrl = 'https://play.google.com/apps/testing/dev.harrisonsoftware.stitchCounter'
  const playInstallUrl = 'https://play.google.com/store/apps/details?id=dev.harrisonsoftware.stitchCounter' // TODO_REPLACE_PLAY_INSTALL_URL

  return (
    <>
      <Hero
        title="Try Stitch Counter Beta (Android)"
        subtitle=""
        variant="compact"
      />
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-content">
            <div className="project-detail-section">
              <h3>Help shape Stitch Counter before launch</h3>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                I&apos;m opening a beta for knitters and crocheters who want a simple offline row and stitch counter.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Availability: Android only via Google Play beta.
              </p>

              <h4>What to expect</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Track projects with single or double counters (stitches/rows)</li>
                <li>Save projects in your library and pick up where you left off</li>
                <li>Add up to 6 reference photos per project</li>
                <li>Choose from multiple themes with light/dark mode support</li>
                <li>Import/export local backups (including project photos) for device transfer</li>
                <li>Privacy-first: no account, no analytics, all data stays on your device</li>
                <li>Works offline</li>
                <li>Free and ad-free</li>
              </ul>

              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                If you&apos;d like early access and want to share feedback, you can join in 3 quick steps.
              </p>

              <h4 className="mb-6">How to Join</h4>
              <div className="project-links project-links-vertical mb-6">
                <a href={playOptInUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Step 1: Join Beta on Google Play
                </a>
                <a href={playInstallUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Step 2: Install App
                </a>
              </div>

              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                If Play says the app isn&apos;t available yet, wait 5-15 minutes after Step 1 and try again.
              </p>
              <h4>Beta stability note</h4>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                You may run into bugs, and data loss is possible while features are being tested.
              </p>

              <h4>Important: Backup note</h4>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                Please back up your projects regularly in Settings &gt; Backup &amp; Restore while the beta is in progress.
              </p>

              <h4>Found an issue or have an idea?</h4>
              <p className="text-neutral-700 leading-relaxed text-base mb-6">
                In the app, go to Settings &gt; Support and use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                <li>Report Bug</li>
                <li>Send Feedback</li>
                <li>Request Feature</li>
              </ul>

              <h3>
                Thank you for helping make Stitch Counter better for the fiber community!
              </h3>
                <div className="project-links">
                <Link to={ROUTES.STITCH_COUNTER_V2_PRIVACY_POLICY} className="project-link">
                  Privacy Policy
                </Link>
                <Link to={ROUTES.STITCH_COUNTER_V2_EULA} className="project-link">
                  EULA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
