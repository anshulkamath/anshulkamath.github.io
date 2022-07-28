import React from 'react'

import 'stylesheets/toggleButton.css'

interface ToggleButtonProps {
  toggled: boolean
  setToggled: (x: boolean) => void
  title: string
}

/**
 * Creates a toggleable button
 * @param toggled Whether or not the button is toggled (to be controlled by parent)
 * @param setToggled A function used to update the toggled state
 * @param title The title to use for the toggle button
 *
 * @returns A React component
 */
const ToggleButton: React.FunctionComponent<ToggleButtonProps> = ({
  toggled,
  setToggled,
  title,
}) => {
  const onClick = () => setToggled(!toggled)
  const toggleClass = toggled ? 'toggle-on' : 'toggle-off'

  return (
    <button className={`toggle-btn ${toggleClass}`} type='submit' onClick={onClick}>
      {title}
    </button>
  )
}

export default ToggleButton
