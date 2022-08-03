import React from 'react'

import 'stylesheets/download.css'

interface DownloadButtonProps {
  text: string
}

export const DownloadButton: React.FunctionComponent<DownloadButtonProps> = ({ text }) => (
  <div className='download-button sticky-bottom-right'>
    <a href='kamathResume.pdf' download='kamathResume.pdf'>
      {text}
    </a>
  </div>
)

export default DownloadButton
