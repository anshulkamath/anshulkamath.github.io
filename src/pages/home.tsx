import React from 'react'

import CardCarousel from 'components/cardCarousel'
import { headshotList } from 'constants/headshot'

import 'stylesheets/home.css'

const HomePage: React.FunctionComponent = () => (
  <div className='home-container'>
    <div className='home-content'>
      <div className='introducing-me'>
        <h3 className='introducing-me'>Introducing: Me!</h3>
        <CardCarousel photoList={headshotList} showCaptions />
      </div>
    </div>
  </div>
)

export default HomePage
