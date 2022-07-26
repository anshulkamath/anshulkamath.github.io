import React, { useCallback, useState } from 'react'

import ProjectCard from 'components/projectCard'
import ToggleButton from 'components/toggleButton'
import { projectLists, ProjectData } from 'constants/projects'
import ProjectType from 'models/ProjectType'

import 'stylesheets/projects.css'
import 'stylesheets/card.css'

const ProjectsPage: React.FunctionComponent = () => {
  const { [ProjectType.PERSONAL]: personalProjects, [ProjectType.WORK]: workProjects } =
    projectLists

  const projectsList = personalProjects.concat(workProjects)

  const [projectsToggled, setProjectsToggled] = useState(true)
  const [experienceToggled, setExperienceToggled] = useState(false)
  const [cardsFlipped, setCardsFlipped] = useState(Array(projectsList.length).fill(false))

  const onProjectToggle = useCallback((p: boolean) => setProjectsToggled(p), [])
  const onExperienceToggle = useCallback((e: boolean) => setExperienceToggled(e), [])

  // creates a callback to toggle the corresponding index in the cardsFlipped state
  const onCardPressedCallback = useCallback(
    (i: number) => {
      const tempArray = [...cardsFlipped]
      tempArray[i] = !tempArray[i]
      setCardsFlipped(tempArray)
    },
    [cardsFlipped],
  )

  const projectCards = projectsList.map(
    (projectData: ProjectData, i: number) =>
      ((projectsToggled && projectData.projectType === ProjectType.PERSONAL) ||
        (experienceToggled && projectData.projectType === ProjectType.WORK)) && (
        <ProjectCard
          cardFlipped={cardsFlipped[i]}
          onClick={() => onCardPressedCallback(i)}
          projectData={projectData}
          mirrored={Boolean(i % 2)}
        />
      ),
  )

  return (
    <div className='projects-container'>
      <div className='toggle-container'>
        <div className='toggle-row'>
          <ToggleButton
            toggled={projectsToggled}
            setToggled={onProjectToggle}
            title={ProjectType.PERSONAL}
          />
          <ToggleButton
            toggled={experienceToggled}
            setToggled={onExperienceToggle}
            title={ProjectType.WORK}
          />
        </div>
      </div>
      {projectCards}
    </div>
  )
}

export default ProjectsPage
