import React from 'react'

import { navbarPageRouter, GITHUB, LINKEDIN, BADGE, CONTACT_ME } from 'constants/navbar'

import 'stylesheets/navbar.css'

interface NavBarProps {
  page: string
  onClick: (_: string) => void
}

/**
 * Creates a navigation bar for the website.
 *
 * @param page State to be passed up to the parent containing the current page of the website
 * @param onClick Setter for the parent state
 * @returns A React Component
 */
const NavBar: React.FunctionComponent<NavBarProps> = ({ page, onClick }) => {
  const clickedFormat = (title: string) => <b>{title}</b>

  // map the nav items to the list
  const navItemsMap = navbarPageRouter.map(({ id, title }) => {
    const isSelected = page === id

    return {
      li: (
        <li
          id={id}
          key={id}
          className={`menu-item inline ${
            isSelected ? 'pair-right clicked-item' : 'mono clickable'
          }`}
        >
          {isSelected ? (
            clickedFormat(title)
          ) : (
            <button type='submit' onClick={() => onClick(id)}>
              {title}
            </button>
          )}
        </li>
      ),
      value: +isSelected,
    }
  })

  const [currentPage, ...navItems] = navItemsMap
    .sort((a, b) => b.value - a.value)
    .map(({ li }) => li)

  return (
    <div className='custom-navbar'>
      <ul className='navbar-menu'>
        <li id={BADGE.id} key={BADGE.id} className='menu-item inline badge-font pair-left'>
          {`${BADGE.title} / `}
        </li>
        {currentPage}
        {navItems}
        <li id={GITHUB.id} key={GITHUB.id} className='inline'>
          <a
            href='https://www.github.com/anshulkamath'
            target='blank'
            className='menu-item-big github mono'
          >
            {GITHUB.title}
          </a>
        </li>
        <li id={LINKEDIN.id} key={LINKEDIN.id} className='inline'>
          <a
            href='https://www.linkedin.com/in/anshulkam'
            target='blank'
            className='menu-item-big linked-in mono'
          >
            {LINKEDIN.title}
          </a>
        </li>
        <li id={CONTACT_ME.id} key={CONTACT_ME.id} className='inline'>
          <a href='/#' className='menu-item-big contact-me mono'>
            {CONTACT_ME.title}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
