import { getYearsSinceDate } from 'util/date'

export interface JSONEntry {
  key: string
  value: string | number | string[]
}

export const welcomePageText =
  "Welcome to my website! Odds are that you're here to learn a bit about me and my professional career. " +
  "I'm an enthusiastic computer scientist that loves to wrestle complex problems at scale. " +
  'Additionally, I have found a deep respect, appreciation, and passion for math and low-level computer systems, ' +
  "but I love any computer science role that allows me to solve complex problems - I'm always excited to learn more! " +
  'Please take a look at the overview information below to get a better sense of my background. '

export const anshulJSONList: JSONEntry[] = [
  { key: 'name', value: '"Anshul Kamath"' },
  { key: 'email', value: '"anshulkam@gmail.com"' },
  { key: 'age', value: getYearsSinceDate('06/24/2001') },
  { key: 'school', value: '"Harvey Mudd College"' },
  { key: 'major', value: '"Joint Computer Science & Math"' },
  { key: 'graduation_date', value: '"May 2023"' },
  { key: 'home', value: '"Millburn, NJ"' },
  { key: 'passsions', value: ['Low-Level Systems', 'Math', 'Backend'] },
]
