import React from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Navbar
        className={'text-enter'}
        style={{ backgroundColor: 'black', position: 'sticky', bottom: 0, left: 0, width: '100%' }}
        variant='dark'>
        <Navbar.Brand target='_blank' href=''>
          <small className='text-enter'> © 2020 Shahzad Family </small>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Footer
