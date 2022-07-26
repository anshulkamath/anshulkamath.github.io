import React, { useState, useCallback, useEffect } from 'react';
import NavBar from 'components/navbar';
import { HOME, PROJECTS, RESUME } from 'constants/navbar';
import HomePage from './home';
import MiscPage from './misc';
import ProjectsPage from './projects';
import ResumePage from './resume';
import 'stylesheets/root.css';
const RootPage = () => {
    const [pageId, setPageId] = useState(HOME.id);
    const onChangePage = useCallback((newPage) => setPageId(newPage), []);
    useEffect(() => {
        if (!process.env.REACT_APP_PROD) {
            setPageId(PROJECTS.id);
        }
    }, []);
    let CurrentPage;
    if (pageId === HOME.id) {
        CurrentPage = HomePage;
    }
    else if (pageId === PROJECTS.id) {
        CurrentPage = ProjectsPage;
    }
    else if (pageId === RESUME.id) {
        CurrentPage = ResumePage;
    }
    else {
        CurrentPage = MiscPage;
    }
    return (React.createElement("div", { className: 'root-container' },
        React.createElement(NavBar, { page: pageId, onClick: onChangePage }),
        React.createElement("div", { className: 'rest' },
            React.createElement(CurrentPage, null))));
};
export default RootPage;
