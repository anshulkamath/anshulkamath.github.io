import React from 'react'

import { navbarPageRouter, navbarExternalLinks, BADGE } from 'constants/navbar'

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
  // map over all nav pages and create the respective element (taking into account
  // style of current page)
  const navPagesMap = navbarPageRouter.map(({ id, title }) => {
    const isSelected = page === id

    return {
      elem: isSelected ? (
        <div id={id} key={id} className='badge-item badge-font'>
          {title}
        </div>
      ) : (
        <button
          id={id}
          key={id}
          type='submit'
          onClick={() => onClick(id)}
          className='menu-item mono clickable'
        >
          {title}
        </button>
      ),
      value: +isSelected,
    }
  })

  const [currentPage, ...navPages] = navPagesMap
    .sort((a, b) => b.value - a.value)
    .map(({ elem }) => elem)

  // create the badge
  const badge = (
    <div className='navbar-badge'>
      <div id={BADGE.id} key={BADGE.id} className='badge-item badge-font'>
        {`${BADGE.title}\u00A0/\u00A0`}
      </div>
      {currentPage}
    </div>
  )

  // map the external links buttons
  const externalLinkButtons = (
    <div className='external-links'>
      {navbarExternalLinks.map(({ id, title, style, link }) => (
        <div id={id} key={id}>
          <a href={link} target='blank' className={`menu-item-big mono ${style || ''}`}>
            {title}
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <div className='custom-navbar'>
      {badge}
      {navPages}
      {externalLinkButtons}
    </div>
  )
}

export default NavBar
