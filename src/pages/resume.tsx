import React from 'react'

import kamathResume from 'resources/media/kamathResume.png'
import 'stylesheets/resume.css'

const ResumePage: React.FunctionComponent = () => (
  <div className='resume-page'>
    <img src={kamathResume} alt='kamathResume' width='60%' />
  </div>
)

export default ResumePage
