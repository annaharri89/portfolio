import Hero from '@components/Hero'
import ImageCarousel from '@components/Carousel'
import GithubIcon from '@icons/GithubIcon'
import { getProjectSlides, Project } from '@consts/projects'

export default function HPFPulse() {
  return (
    <>
      <Hero
        title="HPF Pulse"
        subtitle="Android and iOS app developed for The Humanity Preservation Foundation"
        variant="compact"
      />
      <section class="project-detail">
        <div class="container">
          <div class="project-detail-content">
            <div class="project-detail-section">
              <div class="project-header">
                <div class="project-header-row">
                  <img
                    src="/images/icons/hpf_pulse_google_play_icon.png"
                    alt="HPF Pulse Icon"
                    class="project-detail-icon project-header-icon"
                  />
                  <div style={{ display: 'flex', "align-items": 'center' }}>
                    <h3 class="project-header-title">HPF Pulse</h3>
                  </div>
                </div>
                <p class="text-neutral-700 leading-relaxed text-base">
                  HPF Pulse is an Android app and an iOS app I developed on behalf of{' '}
                  <a
                    href="http://humanitypreservationfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Humanity Preservation Foundation
                  </a>
                  . The project was created to provide victims, heroes, caregivers and volunteers a
                  directory for finding services in all 50 states. Pulse lets you know who is out
                  there and willing to help with a form of violence that you may have experienced.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4>Features</h4>
                  <ul class="list-disc list-inside space-y-2 text-neutral-700">
                    <li>
                      On iOS, users can tap an area on the map grouped by time zones to find resources by state. 
                    The app uses Alamofire to make HTTP requests to a PHP server that holds the data.
                    ObjectMapper parses the JSON responses into Swift models.
                    The interactive map highlighting is powered by SwiftSVG, which programmatically accesses SVG tags for each state to highlight the appropriate groups when tapped.
                    </li>
                    <li>
                      The Android version works similarly, using Volley for HTTP networking to communicate with the PHP server.
                      Instead of tap-based selection, Android uses a dropdown menu to select the time zone, which triggers the search.
                      The map highlighting is implemented using VectorMaster to programmatically manipulate SVG elements.
                      The UI is built with ConstraintLayout for responsive layouts across different screen sizes.
                    </li>
                  </ul>                   
                </div>
                <div>
                  <ImageCarousel slides={getProjectSlides(Project.HPF_PULSE)} />
                </div>
              </div>
              <div class="project-tags">
                <span class="year-chip">2017</span>
                <span class="tech-tag">Native Android</span>
                <span class="tech-tag">Java</span>
                <span class="tech-tag">XML</span>
                <span class="tech-tag">ConstraintLayout</span>
                <span class="tech-tag">Volley</span>
                <span class="tech-tag">VectorMaster</span>
              </div>
              <div class="project-tags">
                <span class="year-chip">2017</span>
                <span class="tech-tag">Native iOS</span>
                <span class="tech-tag">Swift</span>
                <span class="tech-tag">UIKit</span>
                <span class="tech-tag">Alamofire</span>
                <span class="tech-tag">ObjectMapper</span>
                <span class="tech-tag">SwiftSVG</span>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/annaharri89/HPFPulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  <GithubIcon />
                  View on GitHub - Android
                </a>
                <a
                  href="https://github.com/annaharri89/HPFPulse_iOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  <GithubIcon />
                  View on GitHub - iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
