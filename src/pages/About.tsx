import Hero from '../components/Hero'

export default function About() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle="Software developer specializing in native mobile and modern web apps"
        variant="compact"
      />
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-card">
              <h3>My Background</h3>
              <p className="about-text">
                I am a Software Developer with a passion for learning and creating impactful applications. I graduated from
                Indiana University East with a degree in Informatics, and I have over 8 years of professional experience with a wide range of
                programming technologies. My focus has been on native Android and iOS apps, but I have also worked with web
                development and cross-platform development.
              </p>
              <p className="about-text" style={{ marginTop: 'var(--spacing-md)' }}>
                In my spare time, I enjoy riding my bike, taking care of my animals (cats, dogs, and chickens), house
                improvement projects, knitting, and playing the ukulele. I have also recently discovered
                a love for legos. I've been missing out for years! These creative hobbies help me
                maintain a balanced perspective and bring a unique approach to problem-solving in my development work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
