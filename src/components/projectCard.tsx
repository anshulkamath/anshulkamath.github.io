import React from 'react'

import { ProjectData } from 'constants/projects'

interface ProjectCardProps {
  cardFlipped: boolean
  onClick: () => void
  projectData: ProjectData
  mirrored?: boolean
}

/**
 * Creates a flippable card to display project data
 *
 * @param cardFlipped A boolean indicating if the card is flipped or not (managed by parent)
 * @param onClick A callback that is called whenever the card is clicked
 * @param projectData An instance of the project data that will be used to populate the card
 * @returns A React component
 */
export const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  cardFlipped,
  onClick,
  projectData,
  mirrored,
}) => (
  <div className='card-scene'>
    <div className={`card-container flip-card-container${cardFlipped ? ' is-flipped' : ''}`}>
      <button
        type='submit'
        className={`flip-card-front card-item-front${
          mirrored ? '-mirrored' : ''
        } card-shadow card-shadow-animation`}
        onClick={() => onClick()}
      >
        <img
          className={`card-div-front${mirrored ? '-mirrored' : ''}`}
          src={projectData.media}
          alt={projectData.mediaAlt}
        />
        <div className='card-div-front'>
          <div className='card-div-blurb'>
            <h3 className='nunito'>Hello world!</h3>
            <p className='card-div'>{projectData.shortDescription}</p>
          </div>
          <div className='card-div-blurb'>
            <h5 className='nunito'>Uses: C</h5>
          </div>
          <div className='card-link'>
            <a className='nunito card-link' href={projectData.repo}>
              <h5>Github Link</h5>
            </a>
          </div>
        </div>
      </button>
      <button
        type='submit'
        className='flip-card-back card-item-back card-shadow card-shadow-animation'
        onClick={() => onClick()}
      >
        <div className='card-div-back'>
          <div className='card-div-blurb'>
            <h5 className='card-div nunito'>
              <strong>Project Description:</strong>
            </h5>
            <p className='card-div'>{projectData.projectDescription}</p>
          </div>
          <div className='card-div-blurb'>
            <h5 className='card-div nunito'>
              <strong>Things I learned:</strong>
            </h5>
            <p className='card-div'>{projectData.thingsLearned}</p>
          </div>
          <div className='card-footer'>
            <h5 className='nunito'>Skills/Tools: {projectData.skills.join(', ')}</h5>
            <a className='nunito card-link' href={projectData.repo}>
              <h5>Github Link</h5>
            </a>
          </div>
        </div>
      </button>
    </div>
  </div>
)

ProjectCard.defaultProps = {
  mirrored: false,
}

export default ProjectCard