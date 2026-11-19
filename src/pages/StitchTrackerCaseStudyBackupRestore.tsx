import type { JSX } from 'solid-js'
import CaseStudyImage from '../components/caseStudy/CaseStudyImage'
import CaseStudyCard from '../components/caseStudy/CaseStudyCard'
import Hero from '../components/Hero'
import ProjectDetailMetricGrid from '../components/ProjectDetailMetricGrid'
import ProjectDetailStatTile from '../components/ProjectDetailStatTile'
import { CaseStudyLightboxProvider } from '../components/caseStudy/CaseStudyLightbox'
import { STITCH_COUNTER_V2_PLAY_STORE_URL } from '../constants/routes'
import StitchTrackerCaseStudyFooter from './StitchTrackerCaseStudyFooter'

const IMG_DEV = '/work/android-feature-development'

function InlineCode(props: { children: string }) {
  return <code class="case-study__inline-code">{props.children}</code>
}

function ProblemHeading(props: { title: string; children: JSX.Element }) {
  return (
    <>
      <p class="case-study__kicker">Problem</p>
      <h3 class="case-study__section-title case-study__section-title--accent">{props.title}</h3>
      <p class="case-study__section-lead">{props.children}</p>
    </>
  )
}

function BackupRestoreContent() {
  return (
    <>
      <Hero
        title="Backup and restore"
        subtitle="Stitch Counter (V2): a local-first library that survives a new phone."
        variant="compact"
      />
      <section
        class="project-detail case-study"
        id="stitch-counter-case-studies"
        aria-label="Case study: backup and restore for Stitch Counter (V2)"
      >
        <div class="site-container">
          <article class="case-study__doc" id="case-study-backup-restore">
            <div class="case-study__hero-band" style={{ 'border-radius': 'var(--radius-lg)', 'margin-bottom': 0 }}>
              <div class="case-study__hero-band-inner">
                <h3 class="case-study__doc-intro-title">
                  A backup file that restores the whole project,{' '}
                  <span class="case-study__headline-accent">photos included</span>
                </h3>
                <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                  Stitch Counter has no accounts and no cloud sync, so an exported zip is how a library moves to
                  a new phone. I built it so the photos come along even if the originals are long gone.
                </p>
                <div class="case-study__hero-chips">
                  <span class="case-study__chip">Kotlin · Room · kotlinx.serialization</span>
                  <span class="case-study__chip">No cloud, no storage permission</span>
                  <span class="case-study__chip">Versioned zip format</span>
                </div>
              </div>
            </div>

            <section class="case-study__section">
              <h3 class="case-study__block-title">Backup at a glance</h3>
              <ProjectDetailMetricGrid columns="4">
                <ProjectDetailStatTile
                  label="App"
                  value={
                    <a
                      href={STITCH_COUNTER_V2_PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-accent-link"
                      aria-label="Stitch Counter V2 on Google Play (opens in a new tab)"
                    >
                      Stitch Counter V2, on Google Play
                    </a>
                  }
                />
                <ProjectDetailStatTile label="Storage" value="Room + app-private image files" />
                <ProjectDetailStatTile label="Backup format" value="Zip: backup.json + images/" />
                <ProjectDetailStatTile label="Permissions" value="None (system file picker)" />
              </ProjectDetailMetricGrid>
            </section>

            <section class="case-study__section">
              <ProblemHeading title="A backup is only useful if the photos survive too">
                A project in Stitch Counter is more than counter numbers. It has notes and photos of the work
                in progress. Backing up only the database rows would bring projects back with empty photo
                slots, and keeping a link to the gallery image would not help either: the user may have
                deleted it, or it may never have existed on the new phone.
              </ProblemHeading>
              <CaseStudyCard
                kicker="Approach"
                title="The app keeps its own copy of every photo"
                outcome="A restored project shows the saved photos on a new phone that never had the originals, or on the same phone even if the user deleted the originals."
                takeaway="Copy the photo when it is picked, not when it is exported. By export time the original may be gone, and a backup can only include what the app still has."
                footer={
                  <div class="case-study__row--2">
                    <CaseStudyImage
                      src={`${IMG_DEV}/case2_backup_restore_settings.png`}
                      caption="Backup &amp; restore in Settings"
                      enlargedDescription="Settings screen with Backup and Restore export and import actions"
                      variant="pair"
                    />
                    <CaseStudyImage
                      src={`${IMG_DEV}/case2_backup_backup_manager.png`}
                      caption="BackupManager: JSON plus image files"
                      enlargedDescription="Kotlin BackupManager creating backup zip with JSON and image files"
                      variant="pair"
                    />
                  </div>
                }
              >
                <p>
                  When someone adds a photo, the app does not store a link to the gallery item. It decodes the
                  image, applies its rotation, scales it down so neither side is longer than 1024px (keeping its
                  proportions), and saves a compressed JPEG in app-private storage. Room stores only the relative path, which keeps the
                  database small and lets images load straight from disk.
                </p>
                <p>Export then copies those files into the zip, next to the project data:</p>
                <ul>
                  <li>
                    <InlineCode>backup.json</InlineCode> holds the metadata, projects, and notes.
                  </li>
                  <li>
                    <InlineCode>images/</InlineCode> holds the photos each project points to, as ordinary image
                    files.
                  </li>
                </ul>
                <p>
                  On restore, each image is copied to a new unique file name and the project is pointed at it,
                  so nothing depends on a path from the old phone.
                </p>
              </CaseStudyCard>
            </section>

            <section class="case-study__section">
              <ProblemHeading title="Deleted photos should not pile up or end up in a backup">
                Every photo the app copies takes space on the phone. If removing a photo from a project left its
                file behind, storage would fill with images nobody can see, and a careless backup could carry
                them along.
              </ProblemHeading>
              <CaseStudyCard
                kicker="Approach"
                title="Backups follow what projects reference, and files are cleaned up with them"
                outcome="Backups contain only photos that projects use, and removed photos do not linger on the device."
                takeaway="Delete files only after the change that removed them is saved. Until then the user can still undo it, and a deleted file cannot be undone."
              >
                <p>
                  Every export is a fresh snapshot built from the database, so only photos a project still
                  references go into the zip. If a referenced file is missing on disk, the export logs it and
                  skips it instead of failing.
                </p>
                <p>
                  On the phone, image files go away with whatever owned them. Deleting a project deletes its
                  photos. Removing a single photo deletes its file once the edit is saved, and discarding an
                  edit deletes photos added during it.
                </p>
                <p>
                  The file is deleted only after the project is saved, not the moment the user removes the photo
                  from the screen. The project screen has a Discard option that brings removed photos back, and a
                  file deleted right away could not be brought back.
                </p>
              </CaseStudyCard>
            </section>

            <section class="case-study__section">
              <ProblemHeading title="Restoring a file the user picked should never damage their library">
                A backup is a file from outside the app. It might be damaged, edited, made by an older version of the app,
                or made by a newer one. Restoring it has to either succeed, fail clearly before changing anything, or import everything it can and report exactly what it could not.
              </ProblemHeading>
              <CaseStudyCard
                kicker="Approach"
                title="Restore treats the zip as untrusted input"
                outcome="Backups from older releases still restore, and a backup from a newer format is refused with a clear message before anything is imported. 46 unit tests cover the zip, the format, export, and import, including zip paths that try to escape the folder, a missing backup.json, older-format files, and projects that fail partway through."
                takeaway="Putting file and stream access behind two small injected interfaces made the zip logic easy to test, because the tests run against temp folders instead of a device. The part I would revisit is import. It always adds projects as new ones instead of overwriting, so a restore can never destroy what is already on the phone. The cost is that restoring a backup onto a phone that already has those projects gives you two copies of each, photos included. The import code can already replace projects by ID, but Settings only offers adding. A next step would be letting the user choose between adding and replacing, or skipping projects that are already there."
              >
                <p>
                  Extraction rejects any zip entry whose resolved path would land outside the temp folder (a
                  zip-slip attack), and export refuses image paths that point outside app storage.
                </p>
                <p>
                  Failures are sealed result types rather than exceptions: a missing{' '}
                  <InlineCode>backup.json</InlineCode>, an unreadable file, an unsafe entry, or a backup from a
                  newer app version each show a specific error message under the Import button, such as “This backup was
                  created by a newer app version.” Projects and notes import one at a
                  time, and the result lists exactly which ones failed, so a single bad record does not throw
                  away the rest.
                </p>
                <p>
                  Each backup records the version of its file format. The app reads every format version it
                  knows. Format 1 backups, made before notes and custom ordering existed, still restore into
                  today’s app (format 2), with empty notes and the default order. Going the other way, a
                  backup whose format version is higher than the app knows is refused as a whole, before
                  anything is imported, because the app cannot tell what the new fields mean.
                </p>
              </CaseStudyCard>
            </section>
          </article>
          <StitchTrackerCaseStudyFooter currentStudyId="stitch-backup-restore" />
        </div>
      </section>
    </>
  )
}

export default function StitchTrackerCaseStudyBackupRestore() {
  return (
    <CaseStudyLightboxProvider>
      <BackupRestoreContent />
    </CaseStudyLightboxProvider>
  )
}
