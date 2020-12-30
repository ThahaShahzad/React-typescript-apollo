import React from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
  show: any
  onHide: any
  size: any
  backdrop: any
  header_class?: string
  header_style?: object
  title_text?: JSX.Element
  title_style?: object
  main_text?: JSX.Element
  main_stle?: object
  footer_text?: JSX.Element
  footer_style?: object
}

const MyModal: React.FC<Props> = ({
  show,
  onHide,
  size,
  backdrop,
  header_style,
  header_class,
  title_text,
  title_style,
  main_text,
  main_stle,
  footer_text,
  footer_style
}) => {
  return (
    <>
      <Modal show={show} onHide={onHide} size={size} backdrop={backdrop}>
        <Modal.Header style={header_style} className={header_class} closeButton>
          <Modal.Title style={title_style}>{title_text}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={main_stle}>{main_text}</Modal.Body>
        <Modal.Footer style={footer_style}>{footer_text}</Modal.Footer>
      </Modal>
    </>
  )
}

export default MyModal
