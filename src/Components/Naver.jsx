import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap/Navbar';
import image1 from '../assets/imgi_1_logo.png'

const Naver = () => {
  return (
    <div>
     <Navbar className='navhead' data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home"><img src={image1} alt="" className='img1'/></Navbar.Brand>
          <Nav className="me-auto nav1">
            <Nav.Link href="#home" className='nav2'>Home</Nav.Link>
            <Link href="#features"className='nav2'>Features</Link>
            <Link href="#pricing" className='nav2'>Pricing</Link>
            <Link href="#pricing" className='nav2'>Contact</Link>
            
          </Nav>
        </Container>
      </Navbar>
  
    </div>
  )
}

export default Naver
