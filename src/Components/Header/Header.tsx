import React, { useState } from 'react'
import { Nav, Navbar, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  const [expanded, setexpanded] = useState(false)
  return (
    <>
      <Navbar expanded={expanded} style={{ backgroundColor: 'white' }} expand='lg' variant='dark'>
        <Col md='2' />
        <Navbar.Brand className='text-dark'>Shahzad Family</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto ' onClick={() => setexpanded(false)}>
            <Link className='text-dark nav-link' to='/'>
              Home
            </Link>
            <Link className='text-dark nav-link' to='/people'>
              People
            </Link>
            <Link className='text-dark nav-link' to='/animals'>
              Animals
            </Link>
          </Nav>
          <div onClick={() => setexpanded(false)}></div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
