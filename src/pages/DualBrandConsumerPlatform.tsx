import Hero from '@components/Hero'
import { ROUTES } from '@consts/routes'
import DualBrandCaseStudyCta from './dualBrand/DualBrandCaseStudyCta'

export default function DualBrandConsumerPlatform() {
  return (
    <>
      <Hero
        title="Dual-brand consumer platform"
        subtitle="Strengthened store presence on one app, then dual flavors added to ship a second brand"
        variant="compact"
      />
      <section class="project-detail case-study" aria-label="Dual-brand consumer platform case study">
        <div class="site-container">
          <p style={{ 'margin-bottom': 'var(--spacing-lg)' }}>
            <a href={ROUTES.PROJECTS} class="case-study__text-link">
              ← All projects
            </a>
          </p>

          <article class="case-study__doc">
            <div
              class="case-study__hero-band"
              style={{ 'border-radius': 'var(--radius-lg)', 'margin-bottom': 0 }}
            >
              <div class="case-study__hero-band-inner">
                <h2 class="case-study__doc-intro-title">
                  One app first,{' '}
                  <span class="case-study__headline-accent">two brands later</span>
                </h2>
                <p class="case-study__section-lead" style={{ 'margin-top': 'var(--spacing-sm)' }}>
                  Prior Android engineering on a major B2C consumer platform: improved reliability
                  and release discipline on a single consumer app, helped move public store ratings
                  from roughly 3 stars to above 4 stars and hold there, then added dual-flavor
                  support to the master codebase and launched a second brand without rebuilding
                  mobile from scratch.
                </p>
                <div class="case-study__hero-chips">
                  <span class="case-study__chip">Dual-brand delivery</span>
                  <span class="case-study__chip">Store presence</span>
                  <span class="case-study__chip">Mobile operations</span>
                </div>
              </div>
            </div>

            <section class="case-study__section">
              <h3 class="case-study__section-title case-study__section-title--accent">
                Overview
              </h3>
              <p class="case-study__section-lead">
                What the work was about, who it served, and why it mattered to the business.
              </p>
              <div class="case-study__card">
                <div class="case-study__block">
                  <p>
                    As Android engineer on{' '}
                    <strong>a major B2C consumer platform</strong>, the work started with one
                    consumer app in the store—not a dual-brand portfolio on day one. The first
                    priority was reliability and store presence: leadership wanted predictable
                    releases, stronger quality bars, and public ratings that supported
                    acquisition—not a constant cycle of reactive fixes.
                  </p>
                </div>
                <div class="case-study__block">
                  <p>
                    Separately, the company added a second consumer brand in the same category.
                    The follow-on engineering was to{' '}
                    <strong>add dual-flavor support</strong> to the existing master codebase: keep
                    one shared implementation for core product behavior, isolate brand-specific
                    packaging, and ship the second store listing without building a second app from
                    scratch.
                  </p>
                </div>
              </div>
            </section>

            <section class="case-study__section">
              <h3 class="case-study__section-title case-study__section-title--accent">
                The problem
              </h3>
              <p class="case-study__section-lead">
                What the business needed from mobile before the second brand could ship.
              </p>
              <div class="case-study__card">
                <h4 class="case-study__block-title">One app, room to grow in the store</h4>
                <div class="case-study__block">
                  <p>
                    The company had a single recognizable consumer app in the category. Store
                    ratings and retention mattered for discovery and paid acquisition, so mobile
                    quality was treated as a growth lever—not only an engineering backlog item.
                    The goal was a more dependable experience users could recommend and re-open.
                  </p>
                </div>
                <div class="case-study__block">
                  <p>
                    Leadership wanted that app to behave like infrastructure: predictable
                    releases, clear ownership when issues surfaced, and quality bars product and
                    finance could plan around.
                  </p>
                </div>
              </div>
              <div class="case-study__card" style={{ 'margin-top': 'var(--spacing-md)' }}>
                <h4 class="case-study__block-title">
                  A second brand, without a second mobile rebuild
                </h4>
                <div class="case-study__block">
                  <p>
                    The company also wanted a second brand with its own listing, marketing story,
                    and support expectations. The risk was treating that as a greenfield rewrite:
                    doubled feature cost, doubled regression surface, and months before a second
                    app could reach the same level of polish and feature parity.
                  </p>
                </div>
                <div class="case-study__block">
                  <p>
                    Accounts, safety tooling, notifications, and the flows that turn a download
                    into a paying relationship were largely the same behind the scenes. The business
                    question was how to add a second store presence without building and maintaining
                    two separate apps.
                  </p>
                </div>
              </div>
            </section>

            <section class="case-study__section">
              <h3 class="case-study__section-title case-study__section-title--accent">
                The solution
              </h3>
              <p class="case-study__section-lead">
                What changed on the first app, and how dual flavors shipped a second brand.
              </p>
              <div class="case-study__card">
                <h4 class="case-study__block-title">Stronger store presence on the first app</h4>
                <div class="case-study__block">
                  <p>
                    Reliability and release work connected directly to marketplace perception.
                    Public store ratings on that app moved from{' '}
                    <strong>roughly 3 stars to above 4 stars and held there</strong>—the kind of
                    floor consumer brands need when acquisition costs are high and alternatives are
                    one tap away.
                  </p>
                </div>
              </div>
              <div class="case-study__card" style={{ 'margin-top': 'var(--spacing-md)' }}>
                <h4 class="case-study__block-title">Dual flavors added for the second brand</h4>
                <div class="case-study__block">
                  <p>
                    To ship the second brand without a from-scratch rebuild, dual-flavor support was
                    added to the existing master codebase: one shared implementation for core
                    product behavior, with brand-specific layers for identity, store listings,
                    configuration, and the parts of the experience that must feel distinct in the
                    market.
                  </p>
                </div>
                <div class="case-study__block">
                  <p>
                    Shared work (core domain logic, messaging, account lifecycle, safety paths, and
                    the release train) lives in one place. Brand-specific work (visual identity,
                    copy, store assets, and go-to-market packaging) stays isolated so the second
                    brand could launch without a parallel rewrite.
                  </p>
                </div>
                <div class="case-study__block">
                  <p>
                    Stabilize one product users already download, then publish a second store
                    listing from the same engineering system instead of building two separate apps
                    from scratch.
                  </p>
                </div>
              </div>
              <div class="case-study__card" style={{ 'margin-top': 'var(--spacing-md)' }}>
                <h4 class="case-study__block-title">What changed in day-to-day operations</h4>
                <div class="case-study__bullet-list">
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Stronger store presence on app one: </strong>
                      Public ratings moved from roughly 3 stars to above 4 stars and held there on
                      the first app.
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>Dual flavors added: </strong>
                      A second store listing shipped after flavor support was built into the
                      stabilized codebase, not as a from-scratch second app.
                    </span>
                  </div>
                  <div class="case-study__bullet">
                    <span class="case-study__bullet-dot" aria-hidden />
                    <span>
                      <strong>One backlog for shared product: </strong>
                      After launch, features and fixes land for both brands unless a change is
                      intentionally brand-only.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section class="case-study__section">
              <h3 class="case-study__section-title case-study__section-title--accent">
                Business impact
              </h3>
              <p class="case-study__section-lead">
                Outcomes that matter for product, growth, and engineering planning.
              </p>
              <div class="case-study__card">
                <h4 class="case-study__block-title">Stronger store presence on the first app</h4>
                <div class="case-study__block">
                  <p>
                    Public ratings on the original app moved from roughly 3 stars to a durable
                    position above 4 stars, aligning mobile quality with what marketing and paid
                    acquisition need to work. When mobile quality supports the listing, growth
                    spend works harder.
                  </p>
                </div>
              </div>
              <div class="case-study__card" style={{ 'margin-top': 'var(--spacing-md)' }}>
                <h4 class="case-study__block-title">Second brand without doubling mobile cost</h4>
                <div class="case-study__block">
                  <p>
                    Adding a second flavor to the master codebase and launching the follow-on brand
                    that way{' '}
                    <strong>
                      avoided the cost of building and maintaining a fully separate second app
                    </strong>
                    . The savings show up as faster roadmaps, a smaller regression surface, and one
                    release train for shared product work.
                  </p>
                </div>
              </div>
            </section>

            <DualBrandCaseStudyCta />

            <p
              class="case-study__section-lead"
              aria-label="Case study note"
              style={{
                'margin-top': 'var(--spacing-lg)',
                'font-size': '0.8125rem',
                'line-height': '1.55',
                'max-width': '42rem',
                opacity: '0.85',
              }}
            >
              Anonymized case study for confidentiality. Details are generalized and do not identify
              any employer or product that may be inferred from this story.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
