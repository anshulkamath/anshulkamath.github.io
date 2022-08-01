import React from 'react'

import ProjectType from 'models/ProjectType'
import Repository from 'models/Respository'

import amazonPNG from 'resources/media/projects/amazon.png'
import amistadPNG from 'resources/media/projects/amistad.png'
import cTestingPNG from 'resources/media/projects/cTesting.png'
import ellipticCurvePNG from 'resources/media/projects/ellipticCurve.png'
import lightsGIF from 'resources/media/projects/lights.gif'
import lightsMP4 from 'resources/media/projects/lights.mp4'
import manimGIF from 'resources/media/projects/manim.gif'
import manimMP4 from 'resources/media/projects/manim.mp4'
import prosperlyPNG from 'resources/media/projects/prosperly.png'
import swollioPNG from 'resources/media/projects/swollio.png'
import websitePNG from 'resources/media/projects/website.png'

import amazonProjectJSON from 'resources/text/projects/amazon.json'
import amistadProjectJSON from 'resources/text/projects/amistad.json'
import cTestingProjectJSON from 'resources/text/projects/c-testing-library.json'
import ecdsaProjectJSON from 'resources/text/projects/ecdsa.json'
import ledLightsProjectJSON from 'resources/text/projects/led-lights.json'
import luluProjectJSON from 'resources/text/projects/lulu.json'
import manimProjectJSON from 'resources/text/projects/manim.json'
import prosperlyProjectJSON from 'resources/text/projects/prosperly.json'
import shellProjectJSON from 'resources/text/projects/shell.json'
import swollioProjectJSON from 'resources/text/projects/swollio.json'
import websiteProjectJSON from 'resources/text/projects/website.json'

export interface ProjectData {
  title: string // the title of the project
  skills: string[] // a list of all the skills used
  time?: string // a string denoting when the project was undertaken
  repos?: Repository[] // a link to the github repo
  media?: string // the path to the media to display
  mediaAlt?: string // the alt for the given media
  shortDescription: string // a short description of the project
  projectDescription: string // a long description of the project
  thingsLearned: string // a list of the things learned in the project
  projectType: ProjectType // the kind of project to classify this as
  imgStyling?: React.CSSProperties // any extra styling needed for the image
}

const isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') === -1 &&
  navigator.userAgent.indexOf('FxiOS') === -1

export const amazonProject: ProjectData = {
  ...amazonProjectJSON,
  media: amazonPNG,
  projectType: ProjectType.WORK,
}

export const amistadProject: ProjectData = {
  ...amistadProjectJSON,
  media: amistadPNG,
  imgStyling: { objectFit: 'contain' },
  projectType: ProjectType.WORK,
}

export const cTestingProject: ProjectData = {
  ...cTestingProjectJSON,
  media: cTestingPNG,
  projectType: ProjectType.PERSONAL,
}

export const ecdsaProject: ProjectData = {
  ...ecdsaProjectJSON,
  media: ellipticCurvePNG,
  projectType: ProjectType.PERSONAL,
}

export const ledLightsProject: ProjectData = {
  ...ledLightsProjectJSON,
  media: isSafari ? lightsMP4 : lightsGIF,
  projectType: ProjectType.PERSONAL,
}

export const luluProject: ProjectData = {
  ...luluProjectJSON,
  projectType: ProjectType.WORK,
}

export const manimProject: ProjectData = {
  ...manimProjectJSON,
  media: isSafari ? manimMP4 : manimGIF,
  projectType: ProjectType.PERSONAL,
}

export const prosperlyProject: ProjectData = {
  ...prosperlyProjectJSON,
  media: prosperlyPNG,
  projectType: ProjectType.WORK,
}

export const shellProject: ProjectData = {
  ...shellProjectJSON,
  projectType: ProjectType.PERSONAL,
}

export const swollioProject: ProjectData = {
  ...swollioProjectJSON,
  media: swollioPNG,
  projectType: ProjectType.PERSONAL,
}

export const websiteProject: ProjectData = {
  ...websiteProjectJSON,
  media: websitePNG,
  projectType: ProjectType.PERSONAL,
  imgStyling: { objectPosition: '-70px' },
}

export const projectLists = {
  [ProjectType.PERSONAL]: [
    ecdsaProject,
    ledLightsProject,
    websiteProject,
    swollioProject,
    cTestingProject,
    manimProject,
    shellProject,
  ],
  [ProjectType.WORK]: [amazonProject, amistadProject, prosperlyProject, luluProject],
  [ProjectType.ALL]: [
    amazonProject,
    amistadProject,
    ecdsaProject,
    prosperlyProject,
    ledLightsProject,
    websiteProject,
    swollioProject,
    cTestingProject,
    manimProject,
    shellProject,
  ],
}
