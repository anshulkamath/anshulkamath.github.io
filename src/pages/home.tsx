import React, { useState } from 'react'

import CardCarousel from 'components/cardCarousel'
import { headshotList } from 'constants/headshot'
import { welcomePageText, anshulJSONList } from 'constants/homePage'
import { stylizeJSONEntry } from 'util/color'

import 'stylesheets/home.css'

const HomePage: React.FunctionComponent = () => {
  const [photoSpy, setPhotoSpy] = useState(false)

  const basicInfoAddendum = photoSpy ? ' basic-info-hover' : ''
  const basicInfoHeadingAddendum = photoSpy ? ' basic-info-heading-hover' : ''

  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='introducing-me'>
          <h3 className='introducing-me'>Introducing: Me!</h3>
          <CardCarousel photoList={headshotList} showCaptions setSpy={setPhotoSpy} />
        </div>
        <div className='basic-info-container'>
          <h3 className={`basic-info-heading${basicInfoHeadingAddendum}`}>Seven second summary:</h3>
          <div className={`basic-info${basicInfoAddendum}`}>
            <p>{welcomePageText}</p>
          </div>
          <h3 className={`basic-info-heading${basicInfoHeadingAddendum}`}>Relevant information:</h3>
          <div className={`basic-info${basicInfoAddendum}`}>
            <p className='mono'>
              const <span className='mono basic-info-red'>recruitment_info</span> ={' {'}
              <br />
              {anshulJSONList.map(stylizeJSONEntry)}
              {'}'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
