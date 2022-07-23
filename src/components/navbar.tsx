import React from 'react'
import Button from 'react-bootstrap/Button'

import { navbarPageRouter, GITHUB, LINKEDIN, BADGE, CONTACT_ME } from 'constants/navbar.constants'

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
        <li id={BADGE.id} key={BADGE.id} className='menu-item inline mono-heavy pair-left'>
          {`${BADGE.title} / `}
        </li>
        {currentPage}
        {navItems}
        <li id={GITHUB.id} key={GITHUB.id} className='menu-item-big inline mono'>
          <Button variant='dark' href='https://www.github.com/anshulkamath' target='blank'>
            {GITHUB.title}
          </Button>
        </li>
        <li id={LINKEDIN.id} key={LINKEDIN.id} className='menu-item-big inline mono'>
          <Button variant='primary' href='https://www.linkedin.com/in/anshulkam' target='blank'>
            {LINKEDIN.title}
          </Button>
        </li>
        <li id={CONTACT_ME.id} key={CONTACT_ME.id} className='menu-item-big inline mono'>
          <Button variant='secondary'>{CONTACT_ME.title}</Button>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
