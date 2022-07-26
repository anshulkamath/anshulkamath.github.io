import React from 'react';
import { navbarPageRouter, navbarExternalLinks, BADGE } from 'constants/navbar';
import 'stylesheets/navbar.css';
/**
 * Creates a navigation bar for the website.
 *
 * @param page State to be passed up to the parent containing the current page of the website
 * @param onClick Setter for the parent state
 * @returns A React Component
 */
const NavBar = ({ page, onClick }) => {
    // map over all nav pages and create the respective element (taking into account
    // style of current page)
    const navPagesMap = navbarPageRouter.map(({ id, title }) => {
        const isSelected = page === id;
        return {
            elem: isSelected ? (React.createElement("div", { id: id, key: id, className: 'badge-item badge-font' }, title)) : (React.createElement("button", { id: id, key: id, type: 'submit', onClick: () => onClick(id), className: 'menu-item mono clickable' }, title)),
            value: +isSelected,
        };
    });
    const [currentPage, ...navPages] = navPagesMap
        .sort((a, b) => b.value - a.value)
        .map(({ elem }) => elem);
    // create the badge
    const badge = (React.createElement("div", { className: 'navbar-badge' },
        React.createElement("div", { id: BADGE.id, key: BADGE.id, className: 'badge-item badge-font' }, `${BADGE.title}\u00A0/\u00A0`),
        currentPage));
    // map the external links buttons
    const externalLinkButtons = (React.createElement("div", { className: 'external-links' }, navbarExternalLinks.map(({ id, title, style }) => (React.createElement("div", { id: id, key: id },
        React.createElement("a", { href: 'https://www.github.com/anshulkamath', target: 'blank', className: `menu-item-big mono ${style || ''}` }, title))))));
    return (React.createElement("div", { className: 'custom-navbar' },
        badge,
        navPages,
        externalLinkButtons));
};
export default NavBar;
