export const MS_PER_YEAR = 31557600000

/* Returns the current date in millisecond time (ms since last epoch) */
export const getCurrentDate = (): number => new Date().valueOf()

/* Returns the milliseconds between the given date and the last epoch */
export const getDate = (date: string): number => new Date(date).valueOf()

/* Returns the number of years that have elapsed since the given date */
export const getYearsSinceDate = (date: string): number =>
  Math.floor((getCurrentDate() - getDate(date)) / MS_PER_YEAR)
