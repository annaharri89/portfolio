import type { Component } from 'solid-js'
import MainSiteDualBrandCaseStudyCta from './MainSiteDualBrandCaseStudyCta'
import UpworkDualBrandCaseStudyCta from './UpworkDualBrandCaseStudyCta'

const DualBrandCaseStudyCta: Component =
  import.meta.env.VITE_UPWORK_MODE === 'true'
    ? UpworkDualBrandCaseStudyCta
    : MainSiteDualBrandCaseStudyCta

export default DualBrandCaseStudyCta
