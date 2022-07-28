import React from 'react'

import bearHugPNG from 'resources/media/home-page/anshul/bear-hug.png'
import catanPNG from 'resources/media/home-page/anshul/catan.png'
import graduationPNG from 'resources/media/home-page/anshul/graduation.png'
import headshotPNG from 'resources/media/home-page/anshul/headshot.png'
import hikingPNG from 'resources/media/home-page/anshul/hiking.png'
import minigolfPNG from 'resources/media/home-page/anshul/minigolf.png'

export interface HeadshotData {
  img: string
  alt: string
  caption: string
  style?: React.CSSProperties
}

export const bearHug = {
  img: bearHugPNG,
  alt: 'me hugging bear',
  caption:
    'Fun fact: my favorite animal is the bear 🐻. With that being said, you can only imagine my excitement when I saw this huge stuffed animal at Costco for only $25.',
}

export const catan = {
  img: catanPNG,
  alt: 'me losing at catan',
  caption:
    'Over quarantine, I started playing board games with my family. I love the fact that you can feel the highs of winning but, as you can see here, I became pretty familiar with the lows as well.',
}

export const graduation = {
  img: graduationPNG,
  alt: 'me graduating !!',
  caption:
    'I spent the first 18 years of my life in a little place called Millburn, New Jersey. This picture commemorates the day I was told I could no longer stay :( (colorized, 6/23/2019).',
}

export const headshot = {
  img: headshotPNG,
  alt: 'me',
  caption:
    'Hi! This is me at the Berkeley Aquatic Club. I swam for this team from 2009 to 2019, and it is a huge part of who I am today.',
}

export const hiking = {
  img: hikingPNG,
  alt: 'me looking at a mountian on a mountain',
  caption:
    'During my time in Seattle I went on a few hikes - needless to say, the views were breathtaking.',
}

export const minigolf = {
  img: minigolfPNG,
  alt: 'me minigolfing',
  caption:
    'Meet me before minigolfing. Some people are able to perform better when put in front of a camera. Apparently, I am not one of those people. Immediately after this picture was taken, I took 6 strokes on a par 2 hole.',
}

export const headshotList: HeadshotData[] = [headshot, graduation, catan, hiking, bearHug, minigolf]
