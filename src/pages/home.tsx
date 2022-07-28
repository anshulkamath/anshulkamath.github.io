import React from 'react'

import CardCarousel from 'components/cardCarousel'
import { headshotList } from 'constants/headshot'

import 'stylesheets/home.css'

const HomePage: React.FunctionComponent = () => (
  <div className='home-container'>
    <div className='home-content'>
      <CardCarousel photoList={headshotList} showCaptions />
    </div>
  </div>
)

export default HomePage
