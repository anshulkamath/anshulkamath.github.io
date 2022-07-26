import React, { useCallback, useState } from 'react';
import ProjectCard from 'components/projectCard';
import ToggleButton from 'components/toggleButton';
import { PROJECTS_TITLE, EXPERIENCE_TITLE, ecdsaProject } from 'constants/projects';
import 'stylesheets/projects.css';
import 'stylesheets/card.css';
const ProjectsPage = () => {
    const [projectsToggled, setProjectsToggled] = useState(false);
    const [experienceToggled, setExperienceToggled] = useState(false);
    const [cardFlipped, setCardFlipped] = useState(false);
    const onProjectToggle = useCallback((p) => setProjectsToggled(p), []);
    const onExperienceToggle = useCallback((e) => setExperienceToggled(e), []);
    const onCardPressed = useCallback(() => setCardFlipped(!cardFlipped), [cardFlipped]);
    return (React.createElement("div", { className: 'projects-container' },
        React.createElement("div", { className: 'toggle-container' },
            React.createElement("div", { className: 'toggle-row' },
                React.createElement(ToggleButton, { toggled: projectsToggled, setToggled: onProjectToggle, title: PROJECTS_TITLE }),
                React.createElement(ToggleButton, { toggled: experienceToggled, setToggled: onExperienceToggle, title: EXPERIENCE_TITLE }))),
        React.createElement(ProjectCard, { cardFlipped: cardFlipped, onClick: onCardPressed, projectData: ecdsaProject })));
};
export default ProjectsPage;
