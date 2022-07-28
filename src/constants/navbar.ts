/**
 * A file containing all the IDs of elements as constants
 */

interface NavItem {
  id: string
  title: string
  style?: string
  link?: string
}

// navbar links
export const BADGE = { id: '#badge', title: 'anshul_kamath' }
export const HOME = { id: '#home', title: 'hello_world!' }
export const PROJECTS = { id: '#projects', title: 'projects' }
export const RESUME = { id: '#resume', title: 'resume' }
export const MISC = { id: '#misc', title: 'misc' }

// external links
export const GITHUB = {
  id: '#github',
  title: 'github',
  style: 'github',
  link: 'https://github.com/anshulkamath',
}

export const LINKEDIN = {
  id: '#linkedin',
  title: 'linkedin',
  style: 'linked-in',
  link: 'https://www.linkedin.com/in/anshulkam/',
}

export const CONTACT_ME = {
  id: '#contact-me',
  title: 'contact me!',
  style: 'contact-me',
  link: 'mailto:anshulkam@gmail.com?subject=Mail from anshul-kamath.com',
}

export const navbarPageRouter: NavItem[] = [HOME, PROJECTS, RESUME, MISC]
export const navbarExternalLinks: NavItem[] = [GITHUB, LINKEDIN, CONTACT_ME]
