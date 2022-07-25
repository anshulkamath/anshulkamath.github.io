import React from 'react'

import amazonPNG from 'resources/media/amazon.png'
import amistadPNG from 'resources/media/amistad.png'
import cTestingPNG from 'resources/media/cTesting.png'
import ellipticCurvePNG from 'resources/media/ellipticCurve.png'
import lightsGIF from 'resources/media/lights.gif'
import manimGIF from 'resources/media/manim.gif'
import prosperlyPNG from 'resources/media/prosperly.png'
import swollioPNG from 'resources/media/swollio.png'

import amazonProjectJSON from 'resources/project-data/amazon.json'
import amistadProjectJSON from 'resources/project-data/amistad.json'
import cTestingProjectJSON from 'resources/project-data/c-testing-library.json'
import ecdsaProjectJSON from 'resources/project-data/ecdsa.json'
import ledLightsProjectJSON from 'resources/project-data/led-lights.json'
import luluProjectJSON from 'resources/project-data/lulu.json'
import manimProjectJSON from 'resources/project-data/manim.json'
import prosperlyProjectJSON from 'resources/project-data/prosperly.json'
import shellProjectJSON from 'resources/project-data/shell.json'
import swollioProjectJSON from 'resources/project-data/swollio.json'
import websiteProjectJSON from 'resources/project-data/website.json'

export enum ProjectType {
  PERSONAL = 'personal',
  WORK = 'work',
}

export interface Repo {
  link: string
  title: string
}

export interface ProjectData {
  title: string // the title of the project
  skills: string[] // a list of all the skills used
  time?: string // a string denoting when the project was undertaken
  repos?: Repo[] // a link to the github repo
  media?: string // the path to the media to display
  mediaAlt?: string // the alt for the given media
  shortDescription: string // a short description of the project
  projectDescription: string // a long description of the project
  thingsLearned: string // a list of the things learned in the project
  projectType: ProjectType // the kind of project to classify this as
  imgStyling?: React.CSSProperties // any extra styling needed for the image
}

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
  media: lightsGIF,
  imgStyling: { objectPosition: '-80px' },
  projectType: ProjectType.PERSONAL,
}

export const luluProject: ProjectData = {
  ...luluProjectJSON,
  projectType: ProjectType.WORK,
}

export const manimProject: ProjectData = {
  ...manimProjectJSON,
  media: manimGIF,
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
  media: ellipticCurvePNG,
  projectType: ProjectType.PERSONAL,
}

export const projectLists = {
  [ProjectType.PERSONAL]: [
    ecdsaProject,
    ledLightsProject,
    swollioProject,
    websiteProject,
    cTestingProject,
    manimProject,
    shellProject,
  ],
  [ProjectType.WORK]: [amazonProject, prosperlyProject, luluProject, amistadProject],
}
