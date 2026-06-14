import type { Component } from 'solid-js'
import MainSiteContactBentoNavCard from './MainSiteContactBentoNavCard'
import UpworkBentoNavCard from './UpworkBentoNavCard'

const BentoHireNavCard: Component =
  import.meta.env.VITE_UPWORK_MODE === 'true'
    ? UpworkBentoNavCard
    : MainSiteContactBentoNavCard

export default BentoHireNavCard
