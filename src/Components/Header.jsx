import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder'>
            <Link to={'/'} style={{ textDecoration: 'none', color:'black'}}>
            <i class="fa-solid fa-video"></i>
            {' '}
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
