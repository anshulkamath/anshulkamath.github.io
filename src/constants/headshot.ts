import React from 'react'

import graduationPNG from 'resources/media/home-page/anshul/graduation.png'
import headshotPNG from 'resources/media/home-page/anshul/headshot.png'
import hikingPNG from 'resources/media/home-page/anshul/hiking.png'
import roboticsPNG from 'resources/media/home-page/anshul/robotics.png'
import snowmanPNG from 'resources/media/home-page/anshul/snowman.png'
import swimmingPNG from 'resources/media/home-page/anshul/swimming.png'

export interface HeadshotData {
  img: string
  alt: string
  caption: string
  style?: React.CSSProperties
}

export const graduation = {
  img: graduationPNG,
  alt: 'me graduating !!',
  caption:
    'I spent the first 18 years of my life in a little town called Millburn, New Jersey. After many late night study sessions and early morning swim practices, I finally graduated and started the next chapter of my life (colorized, 6/23/2019).',
  style: {
    objectPosition: '0px -10px',
  },
}

export const headshot = {
  img: headshotPNG,
  alt: 'me',
  caption:
    'Hi! This is me at at my swim club from high school. Hover or swipe (left and right) over the images to take a look at my gallery for a soft introduction - hopefully they can give you a sense of who I am!',
}

export const hiking = {
  img: hikingPNG,
  alt: 'me looking at a mountian on a mountain',
  caption:
    "I wouldn't consider myself an outdoorsy person, but I love seeing nature when I can. During my time in Seattle I went on a few hikes - needless to say, the views were breathtaking.",
}

export const robotics = {
  img: roboticsPNG,
  alt: 'me doing robotics',
  caption:
    'Starting in 8th grade, I particpated in the VEX Robotics competition. I was the lead coder for my team, 4610Z, and this is when I knew that I wanted to pursue a career in software development.',
}

export const snowman = {
  img: snowmanPNG,
  alt: 'snowman',
  caption:
    "Aside from coding projects, I love taking up the ~seasonal~ side project as well! Take this giant, 15' snowman, for example. After a particularly heavy snowstorm, my friends and I decided to get into the holiday spirit and build a snowman that the neighborhood could enjoy!",
}

export const swimming = {
  img: swimmingPNG,
  alt: 'me swimming',
  caption:
    'I swam for the Berkeley Aquatic Club from second grade until I graduated. This club instilled many values into me, and it is a big part of who I am today.',
}

export const headshotList: HeadshotData[] = [
  headshot,
  graduation,
  robotics,
  swimming,
  hiking,
  snowman,
]
