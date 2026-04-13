import Hero from '@components/Hero'
import NavigationCards from '@components/NavigationCards'

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Welcome!<br />
            <span class="hero-text-smaller">I'm</span> Anna Harrison
          </>
        }
        subtitle="I build native and multiplatform apps for mobile and web."
      />
      <NavigationCards />
    </>
  )
}
