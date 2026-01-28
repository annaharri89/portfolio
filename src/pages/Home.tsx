import Hero from '../components/Hero'
import NavigationCards from '../components/NavigationCards'

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Welcome!<br />
            <span className="hero-text-smaller">I'm</span> Anna Harrison
          </>
        }
        subtitle="I build native and cross-platform apps for web and mobile."
      />
      <NavigationCards />
    </>
  )
}
