import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap/Navbar';
import image1 from '../assets/imgi_1_logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHamburgerMenu } from "react-icons/gi";
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
            <NavDropdown title={<GiHamburgerMenu/>} id="nav-dropdown" className='navdrop'bg="light">
        <NavDropdown.Item eventKey="4.1">Home</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Features</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Price</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.4">Contact</NavDropdown.Item>
      </NavDropdown>
    
            
          </Nav>
        </Container>
      </Navbar>
  
    </div>
  )
}

export default Naver
