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

/**
 * Creates the header for a modal (to be used as a child)
 * @param title The title of the modal
 * @param style An optional argument needed if any additional style is to be used
 *
 * @returns A React component
 */
export const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({ title, style }) => (
  <div className='modal-header' style={style}>
    <h3 className='modal-header' style={style}>
      {title}
    </h3>
  </div>
)

/**
 * Creates the body for a modal (to be used as a child)
 * @param body The body of the modal
 * @param style An optional argument needed if any additional style is to be used
 *
 * @returns A React component
 */
export const ModalBody: React.FunctionComponent<ModalBodyProps> = ({ body, style }) => (
  <div className='modal-body' style={style}>
    <p className='modal-body' style={style}>
      {body}
    </p>
  </div>
)

/**
 * Creates the footer for a modal (to be used as a child)
 * @param footer The footer of the modal
 * @param style An optional argument needed if any additional style is to be used
 *
 * @returns A React component
 */
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

/**
 * Creates the container of a modal. Children should be used in addition to this component.
 *
 * @param open State managed by parent which determines if the modal is open or not
 * @param onClose A callback that the modal will call when it closes itself
 * @param children Any children to populate the modal
 *
 * @returns A React component
 */
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
