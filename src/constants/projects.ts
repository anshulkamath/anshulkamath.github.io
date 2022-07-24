import ellipticCurve from 'resources/ellipticCurve.png'

export enum ProjectType {
  PERSONAL = 'personal',
  WORK = 'work',
}

export interface ProjectData {
  title: string // the title of the project
  skills: string[] // a list of all the skills used
  repo: string // a link to the github repo
  media: string // the path to the media to display
  mediaAlt: string // the alt for the given media
  shortDescription: string // a short description of the project
  projectDescription: string // a long description of the project
  thingsLearned: string // a list of the things learned in the project
  projectType: ProjectType // the kind of project to classify this as
}

export const PROJECTS_TITLE = 'personal'
export const EXPERIENCE_TITLE = 'work'

export const ecdsaProject: ProjectData = {
  title: 'Cryptography Project',
  skills: ['C'],
  repo: 'https://github.com/anshulkamath/cryptography',
  media: ellipticCurve,
  mediaAlt: 'elliptic curve',
  shortDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  projectDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  thingsLearned:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  projectType: ProjectType.PERSONAL,
}
