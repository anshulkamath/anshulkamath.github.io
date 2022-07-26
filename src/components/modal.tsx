import React from 'react'

import 'stylesheets/modal.css'

interface ModalHeaderProps {
  title: string
  style?: React.CSSProperties
}

interface ModalBodyProps {
  body: string
  style?: React.CSSProperties
}

interface ModalFooterProps {
  closeTitle: string
  onClose: () => void
  style?: React.CSSProperties
}

interface ModalProps {
  open: boolean
  onClose: () => void
  children?: React.ReactNode[]
}

export const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({ title, style }) => (
  <div className='modal-header' style={style}>
    <h3 className='modal-header' style={style}>
      {title}
    </h3>
  </div>
)

export const ModalBody: React.FunctionComponent<ModalBodyProps> = ({ body, style }) => (
  <div className='modal-body' style={style}>
    <p className='modal-body' style={style}>
      {body}
    </p>
  </div>
)

export const ModalFooter: React.FunctionComponent<ModalFooterProps> = ({
  closeTitle,
  onClose,
  style,
}) => (
  <div className='modal-footer' style={style}>
    <button type='submit' className='modal-footer' style={style} onClick={onClose}>
      {closeTitle}
    </button>
  </div>
)

export const Modal: React.FunctionComponent<ModalProps> = ({ open, onClose, children }) => (
  <>
    {open && (
      <>
        <div className='modal-background' onClick={onClose}>
          <div
            className='modal-container'
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {children}
          </div>
        </div>
      </>
    )}
  </>
)

ModalHeader.defaultProps = {
  style: {},
}

ModalBody.defaultProps = {
  style: {},
}

ModalFooter.defaultProps = {
  style: {},
}

Modal.defaultProps = {
  children: [],
}

export default Modal
