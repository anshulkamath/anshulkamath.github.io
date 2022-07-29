import React, { useState } from 'react'

import CardCarousel from 'components/cardCarousel'
import { headshotList } from 'constants/headshot'
import { welcomePageText, anshulJSONList } from 'constants/homePage'

import 'stylesheets/home.css'

const HomePage: React.FunctionComponent = () => {
  const [photoSpy, setPhotoSpy] = useState(false)

  const basicInfoAddendum = photoSpy ? ' basic-info-hover' : ''

  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='introducing-me'>
          <h3 className='introducing-me'>Introducing: Me!</h3>
          <CardCarousel photoList={headshotList} showCaptions setSpy={setPhotoSpy} />
        </div>
        <div className='basic-info-container'>
          <h3 className='basic-info-heading'>Things about me:</h3>
          <div className={`basic-info${basicInfoAddendum}`}>
            <p>{welcomePageText}</p>
            <div className='basic-info-json'>
              <p className='mono'>
                const <span className='mono basic-info-red'>recruitment_info</span> ={' {'}
                <br />
                {anshulJSONList.map(({ key, value }) => (
                  <>
                    {'\u00A0\u00A0'}
                    <span className='mono basic-info-blue'>{key}</span>
                    {': '}
                    <span
                      className={`mono basic-info-${
                        typeof value === 'string' ? 'green' : 'orange'
                      }`}
                    >
                      {value}
                    </span>
                    ,
                    <br />
                  </>
                ))}
                {'}'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
