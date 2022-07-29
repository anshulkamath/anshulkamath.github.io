import React, { useState, useCallback } from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'components/modal'
import NavBar from 'components/navbar'
import disclaimer from 'constants/disclaimer'
import { HOME, PROJECTS, RESUME } from 'constants/navbar'

import HomePage from './home'
import MiscPage from './misc'
import ProjectsPage from './projects'
import ResumePage from './resume'

import 'stylesheets/root.css'

const RootPage = () => {
  const [pageId, setPageId] = useState(HOME.id)
  const [showDevelopmentAlert, setShowDevelopmentAlert] = useState(
    !Number.parseInt(process.env.REACT_APP_NO_SHOW_MODAL || '0', 10),
  )
  const onChangePage = useCallback((newPage: string) => setPageId(newPage), [])
  const onHideModal = useCallback(() => setShowDevelopmentAlert(false), [])

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
    <>
      <div className='root-container'>
        <NavBar page={pageId} onClick={onChangePage} />
        <div className='rest'>
          <CurrentPage />
        </div>
      </div>
      <Modal open={showDevelopmentAlert} onClose={onHideModal}>
        <ModalHeader title={disclaimer.title} />
        <ModalBody body={disclaimer.message} />
        <ModalFooter closeTitle={disclaimer.closeButton} onClose={onHideModal} />
      </Modal>
    </>
  )
}

export default RootPage
