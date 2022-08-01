import React from 'react'

import ColorEnum from 'constants/colors'
import { JSONEntry } from 'constants/homePage'

/** Helper function to stylize a JSON Entry */
export const stylizeJSONEntry = ({ key, value }: JSONEntry): React.ReactElement => {
  const getClassName = (color: string) => `mono basic-info-${color}`

  let valueElements: React.ReactElement
  if (typeof value === 'string') {
    valueElements = <span className={getClassName(ColorEnum.GREEN)}>{value}</span>
  } else if (typeof value === 'number') {
    valueElements = <span className={getClassName(ColorEnum.ORANGE)}>{value}</span>
  } else if (Array.isArray(value)) {
    valueElements = (
      <>
        [
        {value.map((entry, i) => (
          <>
            <span className={getClassName(ColorEnum.GREEN)}>
              {typeof entry === 'string' ? '"' : ''}
              {entry}
              {typeof entry === 'string' ? '"' : ''}
            </span>
            {i < value.length - 1 ? ', ' : ''}
          </>
        ))}
        ]
      </>
    )
  } else {
    valueElements = <span className={getClassName(ColorEnum.ORANGE)}>{value}</span>
  }

  return (
    <>
      {'\u00A0\u00A0'}
      <span className='mono basic-info-blue'>{key}</span>
      {': '}
      {valueElements}
      ,
      <br />
    </>
  )
}

export default stylizeJSONEntry
