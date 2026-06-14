import type { Component } from 'solid-js'
import UpworkFooterLinks from './footer/UpworkFooterLinks'
import MainSiteFooterLinks from './footer/MainSiteFooterLinks'

const FooterLinks: Component =
  import.meta.env.VITE_UPWORK_MODE === 'true'
    ? UpworkFooterLinks
    : MainSiteFooterLinks

export default function Footer() {
  return (
    <footer class="footer">
      <div class="site-container footer-inner">
        <p class="footer-text">&copy; 2026 Anna Harrison. All rights reserved.</p>
        <nav class="footer-links" aria-label="Social and contact">
          <FooterLinks />
        </nav>
      </div>
    </footer>
  )
}
