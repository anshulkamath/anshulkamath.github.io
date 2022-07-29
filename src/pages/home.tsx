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
      <div className='basic-info'>
        Here is some basic info about me! I am a coder beep boop bop biddity boop
      </div>
    </div>
  </div>
)

export default HomePage
