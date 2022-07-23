/**
 * A file containing all the IDs of elements as constants
 */

interface NavItem {
  id: string
  title: string
}

// navbar links
export const BADGE = { id: '#badge', title: 'anshul_kamath' }
export const HOME = { id: '#home', title: 'hello_world!' }
export const PROJECTS = { id: '#projects', title: 'projects' }
export const RESUME = { id: '#resume', title: 'resume' }
export const MISC = { id: '#misc', title: 'misc' }

// external links
export const GITHUB = { id: '#github', title: 'github' }
export const LINKEDIN = { id: '#linkedin', title: 'linkedin' }
export const CONTACT_ME = { id: '#contact-me', title: 'contact me!' }

export const navbarPageRouter: NavItem[] = [HOME, PROJECTS, RESUME, MISC]
