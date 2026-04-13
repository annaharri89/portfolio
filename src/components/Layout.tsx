import type { ParentProps } from 'solid-js'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'

export default function Layout(props: ParentProps) {
  return (
    <div class="min-h-screen">
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
