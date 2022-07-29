import React, { useState, useCallback } from 'react'

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
}

/**
 * Creates a card carousel that the user can flip through. Optionally can display captions underneath the images
 *
 * @param photoList A list of photos that will be used to make the card carousel
 * @param showCaptions A boolean to control if the captions should be shown or not
 *
 * @returns A React component
 */
const CardCarousel: React.FunctionComponent<CardCarouselProps> = ({ photoList, showCaptions }) => {
  const maxZ = 5
  const [photoIndex, setPhotoIndex] = useState(0)
  const [zIndices, setZIndices] = useState([3, 2, 1, 0, 0, 0])
  const [showPhotos, setShowPhotos] = useState(false)

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

  const onShowPhotos = useCallback(() => setShowPhotos(true), [])
  const onHidePhotos = useCallback(() => setShowPhotos(false), [])

  const cardTextClass = showPhotos ? ' card-carousel-text-hover' : ''

  return (
    <div className='card-carousel-container'>
      <button
        type='submit'
        className='card-carousel-container'
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
              style={{ zIndex: zIndices[i] }}
            >
              <img
                className='card-carousel-image'
                src={photo.img}
                alt={photo.alt}
                style={photo.style}
              />
            </div>
          )
        })}
      </button>
      {showCaptions && (
        <button
          type='submit'
          className={`card-carousel-text${cardTextClass}`}
          onMouseEnter={onShowPhotos}
          onMouseLeave={onHidePhotos}
        >
          {photoList[photoIndex].caption}
        </button>
      )}
    </div>
  )
}

CardCarousel.defaultProps = {
  showCaptions: false,
}

export default CardCarousel
