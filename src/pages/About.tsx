import Hero from '@components/Hero'

export default function About() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle="I'm an Android developer focused on Kotlin and Jetpack Compose."
        variant="compact"
      />
      <section class="about">
        <div class="site-container">
          <div class="about-card">
            <h3>My Background</h3>
            <p class="about-text">
            I'm an Android developer focused on Kotlin and Jetpack Compose. I build production-ready apps with clear architecture, testing, and reliable release workflows.
            I also have professional iOS experience with Swift and SwiftUI. I'm currently exploring Kotlin Multiplatform through personal projects.
            I have a passion for learning and creating impactful applications. I graduated from
              Indiana University East with a degree in Informatics, and I have 10 years of professional experience with a wide range of
              programming technologies. 
            
            </p>
            <p class="about-text" style={{ "margin-top": 'var(--spacing-md)' }}>
              In my spare time, I enjoy riding my bike, taking care of my animals (cats, dogs, and chickens), house
              improvement projects, knitting, and playing the ukulele. I have also recently discovered
              a love for legos. I've been missing out for years! These creative hobbies help me
              maintain a balanced perspective and bring a unique approach to problem-solving in my development work.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
