import React from 'react'

import 'stylesheets/toggleButton.css'

interface ToggleButtonProps {
  toggled: boolean
  setToggled: (x: boolean) => void
  title: string
}

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
