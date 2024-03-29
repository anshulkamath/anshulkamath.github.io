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
        {projectData.media && (
          <img
            src={projectData.media}
            alt={projectData.mediaAlt}
            className={`card-div-front${mirrored ? '-mirrored' : ''}`}
            style={projectData.imgStyling || {}}
          />
        )}
        <div className='card-div-front'>
          <h3 className='card-div-blurb'>{projectData.title}</h3>
          <h4 className='card-div-blurb'>{projectData.shortDescription}</h4>
          {projectData.time && (
            <div className='card-div-blurb'>
              <h4 className='card-div-blurb'>{projectData.time}</h4>
            </div>
          )}
          <div className='card-div-blurb'>
            <h5 className='card-div-blurb'>
              <b className='card-div-blurb'>Skills:</b> {projectData.skills.join(', ')}
            </h5>
          </div>
          {projectData.repos && (
            <div className='card-link'>
              {projectData.repos.map(({ link, title }) => (
                <a
                  key={title}
                  className='nunito card-link'
                  href={link}
                  target='blank'
                  onClick={(e) => e.stopPropagation()}
                >
                  <h5 className='card-footer'>{title}</h5>
                </a>
              ))}
            </div>
          )}
        </div>
      </button>
      <button
        type='submit'
        className='flip-card-back card-item-back card-shadow card-shadow-animation'
        onClick={() => onClick()}
      >
        <div className='card-div-back'>
          <div className='card-div-blurb'>
            <h5 className='card-div-blurb'>
              <b className='card-div-blurb'>Project Description:</b>
            </h5>
            <p className='card-div-blurb'>{projectData.projectDescription}</p>
          </div>
          <div className='card-div-blurb'>
            <h5 className='card-div-blurb'>
              <b className='card-div-blurb'>Things I learned:</b>
            </h5>
            <p className='card-div-blurb'>{projectData.thingsLearned}</p>
          </div>
          <div className='card-footer'>
            <h5 className='card-footer'>
              <b>Skills/Tools:</b> {projectData.skills.join(', ')}
            </h5>
            {projectData.repos && (
              <div className='card-link'>
                {projectData.repos.map(({ link, title }) => (
                  <a key={title} className='nunito card-link' href={link}>
                    <h5 className='card-footer'>{title}</h5>
                  </a>
                ))}
              </div>
            )}
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
