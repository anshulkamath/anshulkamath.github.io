import { getYearsSinceDate } from 'util/date'

export interface JSONEntry {
  key: string
  value: string | number
}

export const welcomePageText =
  "Welcome to my website! Odds are that you're here to learn a bit about me and my professional career. " +
  "I'm an enthusiastic computer scientist that loves to wrestle complex problems at scale. " +
  'Additionally, I have found a deep respect, appreciation, and passion for math and low-level computer systems, ' +
  "but I don't discriminate when it comes to computer science roles - I'm always excited to learn more! " +
  'Please take a look at the overview information below to get a better sense of my background. '

export const anshulJSONList: JSONEntry[] = [
  { key: 'name', value: '"Anshul Kamath"' },
  { key: 'age', value: getYearsSinceDate('06/24/2001') },
  { key: 'school', value: '"Harvey Mudd College"' },
  { key: 'graduation_date', value: '"May 2023"' },
  { key: 'home', value: '"Millburn, NJ"' },
  { key: 'favorite_movies', value: '["Good Will Hunting", "Inception"]' },
  { key: 'major', value: '"Joint Computer Science & Math"' },
]
