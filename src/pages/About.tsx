export default function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Software Developer with a passion for creating meaningful applications
          </p>
        </div>

        <div className="space-y-8">
          {/* Portfolio Section */}
          <div className="card p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">This Portfolio</h3>
            <p className="text-neutral-700 leading-relaxed text-base">
              This portfolio was built with modern web technologies including React, TypeScript, Vite, and Tailwind CSS.
              It showcases my ability to work with cutting-edge frontend frameworks and create responsive, modern user
              interfaces. The source code is available on{' '}
              <a
                href="https://github.com/annaharri89/annaharri89.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline hover:text-neutral-600"
              >
                GitHub
              </a>
              .
            </p>
          </div>

          {/* About Section */}
          <div className="card p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">The Developer</h3>
            <p className="text-neutral-700 leading-relaxed text-base mb-6">
              I am a Software Developer with a passion for learning and creating impactful applications. I graduated from
              Indiana University East with a degree in Informatics, and I have experience with a wide range of
              programming technologies.
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-neutral-900">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript',
                  'JavaScript',
                  'React',
                  'Python',
                  'Java',
                  'Android Development',
                  'HTML5',
                  'CSS',
                  'iOS Development',
                  'Objective-C',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-neutral-100 rounded-md text-sm font-medium text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed text-base mt-6">
              In my spare time, I enjoy knitting, crocheting, and playing the ukulele. These creative hobbies help me
              maintain a balanced perspective and bring a unique approach to problem-solving in my development work.
            </p>
          </div>

          {/* Hire Me Section */}
          <div className="card p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Let's Work Together</h3>
            <p className="text-neutral-700 leading-relaxed text-base mb-6">
              I'm currently looking for new opportunities in the Middletown, OH or Mason, OH area. I'm also open to
              remote positions and have previous experience working remotely. If you're interested in hiring or know of
              a position that might be a good fit, I'd love to hear from you!
            </p>
            <a
              href="mailto:anna.harri.89@gmail.com?Subject=Job%20Opportunity"
              className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
