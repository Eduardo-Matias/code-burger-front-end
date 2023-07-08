import React from 'react'

import HomeLogo from '../../assets/home-logo.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { HomeImage } from './styles'

export function Home() {
  return (
    <div>
      <HomeImage src={HomeLogo} alt="home logo image" />
      <CategoryCarousel />
      <OffersCarousel />
    </div>
  )
}
