import React, { useState, useCallback } from 'react'

import NavBar from 'components/navbar'
import { HOME, PROJECTS, RESUME } from 'constants/navbar'

import HomePage from './home'
import MiscPage from './misc'
import ProjectsPage from './projects'
import ResumePage from './resume'

import 'stylesheets/rootPage.css'

const RootPage = () => {
  const [pageId, setPageId] = useState(HOME.id)
  const onChangePage = useCallback((newPage: string) => setPageId(newPage), [])
  let CurrentPage

  if (pageId === HOME.id) {
    CurrentPage = HomePage
  } else if (pageId === PROJECTS.id) {
    CurrentPage = ProjectsPage
  } else if (pageId === RESUME.id) {
    CurrentPage = ResumePage
  } else {
    CurrentPage = MiscPage
  }

  return (
    <div className='root-container'>
      <NavBar page={pageId} onClick={onChangePage} />
      <div className='rest'>
        <CurrentPage />
      </div>
    </div>
  )
}

export default RootPage
