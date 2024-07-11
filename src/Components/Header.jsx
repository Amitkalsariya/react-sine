import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const Header = () => {
  return (
   <>
         <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className=''>SiNE_VILLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <div className="set">
         <Nav className="me-auto">
         <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
         <Nav.Link href="#home"><Link to="/Menu">Menu</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Blog">Blog</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/About">About Us</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact">Contact</Link></Nav.Link>
          </Nav>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
