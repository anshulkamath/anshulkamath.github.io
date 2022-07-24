import React, { useCallback, useState } from 'react'

import ProjectCard from 'components/projectCard'
import ToggleButton from 'components/toggleButton'
import { PROJECTS_TITLE, EXPERIENCE_TITLE, ecdsaProject } from 'constants/projects'

import 'stylesheets/projects.css'
import 'stylesheets/card.css'

const ProjectsPage: React.FunctionComponent = () => {
  const [projectsToggled, setProjectsToggled] = useState(false)
  const [experienceToggled, setExperienceToggled] = useState(false)
  const [cardFlipped, setCardFlipped] = useState(false)

  const onProjectToggle = useCallback((p: boolean) => setProjectsToggled(p), [])
  const onExperienceToggle = useCallback((e: boolean) => setExperienceToggled(e), [])
  const onCardPressed = useCallback(() => setCardFlipped(!cardFlipped), [cardFlipped])

  return (
    <div className='projects-container'>
      <div className='toggle-container'>
        <div className='toggle-row'>
          <ToggleButton
            toggled={projectsToggled}
            setToggled={onProjectToggle}
            title={PROJECTS_TITLE}
          />
          <ToggleButton
            toggled={experienceToggled}
            setToggled={onExperienceToggle}
            title={EXPERIENCE_TITLE}
          />
        </div>
      </div>
      <ProjectCard cardFlipped={cardFlipped} onClick={onCardPressed} projectData={ecdsaProject} />
    </div>
  )
}

export default ProjectsPage
