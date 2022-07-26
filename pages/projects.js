import React, { useCallback, useState } from 'react';
import ProjectCard from 'components/projectCard';
import ToggleButton from 'components/toggleButton';
import { projectLists } from 'constants/projects';
import ProjectType from 'models/ProjectType';
import 'stylesheets/projects.css';
import 'stylesheets/card.css';
const ProjectsPage = () => {
    const { [ProjectType.PERSONAL]: personalProjects, [ProjectType.WORK]: workProjects } = projectLists;
    const projectsList = personalProjects.concat(workProjects);
    const [projectsToggled, setProjectsToggled] = useState(false);
    const [experienceToggled, setExperienceToggled] = useState(false);
    const [cardsFlipped, setCardsFlipped] = useState(Array(projectsList.length).fill(false));
    const onProjectToggle = useCallback((p) => setProjectsToggled(p), []);
    const onExperienceToggle = useCallback((e) => setExperienceToggled(e), []);
    // creates a callback to toggle the corresponding index in the cardsFlipped state
    const onCardPressedCallback = useCallback((i) => {
        const tempArray = [...cardsFlipped];
        tempArray[i] = !tempArray[i];
        setCardsFlipped(tempArray);
    }, [cardsFlipped]);
    const projectCards = projectsList.map((projectData, i) => ((projectsToggled && projectData.projectType === ProjectType.PERSONAL) ||
        (experienceToggled && projectData.projectType === ProjectType.WORK)) && (React.createElement(ProjectCard, { cardFlipped: cardsFlipped[i], onClick: () => onCardPressedCallback(i), projectData: projectData, mirrored: Boolean(i % 2) })));
    return (React.createElement("div", { className: 'projects-container' },
        React.createElement("div", { className: 'toggle-container' },
            React.createElement("div", { className: 'toggle-row' },
                React.createElement(ToggleButton, { toggled: projectsToggled, setToggled: onProjectToggle, title: ProjectType.PERSONAL }),
                React.createElement(ToggleButton, { toggled: experienceToggled, setToggled: onExperienceToggle, title: ProjectType.WORK }))),
        projectCards));
};
export default ProjectsPage;
