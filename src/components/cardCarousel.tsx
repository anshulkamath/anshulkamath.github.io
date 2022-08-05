import React, { useState, useCallback, useEffect } from 'react'

import 'stylesheets/card-carousel.css'

interface PhotoData {
  img: string
  alt: string
  caption: string
  style?: React.CSSProperties
}

interface CardCarouselProps {
  photoList: PhotoData[]
  showCaptions?: boolean
  setSpy?: (x: boolean) => void
}

/**
 * Creates a card carousel that the user can flip through. Optionally can display captions underneath the images
 *
 * @param photoList A list of photos that will be used to make the card carousel
 * @param showCaptions A boolean to control if the captions should be shown or not
 * @param setSpy A callback to allow the component to manipulate parent state when the carousel is hovered over
 *
 * @returns A React component
 */
const CardCarousel: React.FunctionComponent<CardCarouselProps> = ({
  photoList,
  showCaptions,
  setSpy = () => {},
}) => {
  const maxZ = 5
  const [photoIndex, setPhotoIndex] = useState(0)
  const [zIndices, setZIndices] = useState([3, 2, 1, 0, 0, 0])
  const [showPhotos, setShowPhotos] = useState(false)
  const [scrollTime, setScrollTime] = useState(0.1)

  const populateZIndices = (arr: number[], zIndex: number) => {
    const result = [...arr]

    let left = zIndex
    let right = zIndex
    let currZ = maxZ

    while ((left >= 0 || right < arr.length) && currZ > 0) {
      if (right < arr.length) result[right] = currZ - 1
      if (left >= 0) result[left] = currZ

      left -= 1
      right += 1
      currZ -= 2
    }

    return result
  }

  const decreaseIndex = (index: number, indices: number[], skipNumber = 1) => {
    const newPhotoIndex = Math.max(index - skipNumber, 0)
    setPhotoIndex(newPhotoIndex)
    setZIndices(populateZIndices(indices, newPhotoIndex))
  }

  const increaseIndex = (index: number, indices: number[], skipNumber = 1) => {
    const newPhotoIndex = Math.min(index + skipNumber, indices.length)
    setPhotoIndex(newPhotoIndex)
    setZIndices(populateZIndices(indices, newPhotoIndex))
  }

  const onShowPhotos = useCallback(() => {
    setSpy(true)
    setShowPhotos(true)
  }, [])

  const onHidePhotos = useCallback(() => {
    setSpy(false)
    setShowPhotos(false)
  }, [])

  const wheelSpeedToTime = (x: number): number => {
    if (Math.abs(x) < 15) return 0.3
    if (Math.abs(x) < 30) return 0.2
    if (Math.abs(x) < 50) return 0.1
    return 0.01
  }

  let cumulativeX = 0
  const onScrollHandler = (e: WheelEvent) => {
    if (!showPhotos) return

    cumulativeX += e.deltaX
    cumulativeX *= Number(showPhotos)
    setScrollTime(wheelSpeedToTime(e.deltaX))

    const SCROLL_THRESHOLD = 100
    if (cumulativeX > SCROLL_THRESHOLD && photoIndex < zIndices.length - 1) {
      increaseIndex(photoIndex, zIndices, 1)
      cumulativeX = 0
    }

    if (cumulativeX < -SCROLL_THRESHOLD && photoIndex > 0) {
      decreaseIndex(photoIndex, zIndices, 1)
    }
  }

  useEffect(() => {
    const content = document.getElementById('body')
    if (!content) return () => {}
    if (showPhotos) content.style.overflow = 'hidden'
    else content.style.overflow = 'visible'

    window.addEventListener('wheel', onScrollHandler, { passive: true })

    return () => {
      window.removeEventListener('wheel', onScrollHandler)
      content.style.overflow = 'visible'
    }
  })

  const cardTextClass = showPhotos ? ' card-carousel-text-hover' : ''

  return (
    <div className='card-carousel-container'>
      <div
        className='card-carousel-img-container'
        onMouseEnter={onShowPhotos}
        onMouseLeave={onHidePhotos}
      >
        {photoList.map((photo, i) => {
          let rotationTransform = ''
          let onClick: (_0: number, _1: number[], _2: number) => void = () => {}
          let skipNumber: number
          if (showPhotos) {
            if (i === photoIndex + 1) {
              rotationTransform = ' card-carousel-image-right'
              onClick = increaseIndex
              skipNumber = 1
            } else if (i === photoIndex - 1) {
              rotationTransform = ' card-carousel-image-left'
              onClick = decreaseIndex
              skipNumber = 1
            } else if (i === photoIndex + 2) {
              rotationTransform = ' card-carousel-image-right-right'
              onClick = increaseIndex
              skipNumber = 2
            } else if (i === photoIndex - 2) {
              rotationTransform = ' card-carousel-image-left-left'
              onClick = decreaseIndex
              skipNumber = 2
            }
          }

          return (
            <div
              key={photo.alt}
              className={`card-carousel-image${rotationTransform}`}
              onClick={() => onClick(photoIndex, zIndices, skipNumber)}
              style={{ zIndex: zIndices[i], transition: `${scrollTime}s ease-in-out` }}
            >
              <img
                className='card-carousel-image'
                src={photo.img}
                alt={photo.alt}
                style={{ ...photo.style, transition: `${scrollTime}s ease-in-out` }}
              />
            </div>
          )
        })}
      </div>
      {showCaptions && (
        <div
          className={`card-carousel-text${cardTextClass}`}
          onMouseEnter={onShowPhotos}
          onMouseLeave={onHidePhotos}
        >
          {photoList[photoIndex].caption}
        </div>
      )}
    </div>
  )
}

CardCarousel.defaultProps = {
  showCaptions: false,
  setSpy: () => {},
}

export default CardCarousel
