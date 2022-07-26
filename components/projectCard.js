import React from 'react';
/**
 * Creates a flippable card to display project data
 *
 * @param cardFlipped A boolean indicating if the card is flipped or not (managed by parent)
 * @param onClick A callback that is called whenever the card is clicked
 * @param projectData An instance of the project data that will be used to populate the card
 * @returns A React component
 */
export const ProjectCard = ({ cardFlipped, onClick, projectData, mirrored, }) => (React.createElement("div", { className: 'card-scene' },
    React.createElement("div", { className: `card-container flip-card-container${cardFlipped ? ' is-flipped' : ''}` },
        React.createElement("button", { type: 'submit', className: `flip-card-front card-item-front${mirrored ? '-mirrored' : ''} card-shadow card-shadow-animation`, onClick: () => onClick() },
            projectData.media && (React.createElement("img", { src: projectData.media, alt: projectData.mediaAlt, className: `card-div-front${mirrored ? '-mirrored' : ''}`, style: projectData.imgStyling || {} })),
            React.createElement("div", { className: 'card-div-front' },
                React.createElement("div", { className: 'card-div-blurb' },
                    React.createElement("h3", { className: 'nunito' }, projectData.title),
                    React.createElement("p", { className: 'card-div' }, projectData.shortDescription)),
                projectData.time && (React.createElement("div", { className: 'card-div-blurb' },
                    React.createElement("h5", { className: 'nunito' }, projectData.time))),
                React.createElement("div", { className: 'card-div-blurb' },
                    React.createElement("h5", { className: 'nunito' },
                        React.createElement("b", null, "Skills:"),
                        " ",
                        projectData.skills.join(', '))),
                projectData.repos && (React.createElement("div", { className: 'card-link' }, projectData.repos.map(({ link, title }) => (React.createElement("a", { className: 'nunito card-link', href: link },
                    React.createElement("h5", null, title)))))))),
        React.createElement("button", { type: 'submit', className: 'flip-card-back card-item-back card-shadow card-shadow-animation', onClick: () => onClick() },
            React.createElement("div", { className: 'card-div-back' },
                React.createElement("div", { className: 'card-div-blurb' },
                    React.createElement("h5", { className: 'card-div nunito' },
                        React.createElement("strong", null, "Project Description:")),
                    React.createElement("p", { className: 'card-div' }, projectData.projectDescription)),
                React.createElement("div", { className: 'card-div-blurb' },
                    React.createElement("h5", { className: 'card-div nunito' },
                        React.createElement("strong", null, "Things I learned:")),
                    React.createElement("p", { className: 'card-div' }, projectData.thingsLearned)),
                React.createElement("div", { className: 'card-footer' },
                    React.createElement("h5", { className: 'nunito' },
                        "Skills/Tools: ",
                        projectData.skills.join(', ')),
                    projectData.repos && (React.createElement("div", { className: 'card-link' }, projectData.repos.map(({ link, title }) => (React.createElement("a", { className: 'nunito card-link', href: link },
                        React.createElement("h5", null, title))))))))))));
ProjectCard.defaultProps = {
    mirrored: false,
};
export default ProjectCard;
