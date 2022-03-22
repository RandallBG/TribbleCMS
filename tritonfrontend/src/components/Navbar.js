
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import "./nav.css"

function Navbar() {
  return (
      <Nav className="navBar">
        <LinkContainer to="/" ><Nav.Link>Home</Nav.Link></LinkContainer>
        <LinkContainer to="/about" ><Nav.Link href="/about">About</Nav.Link></LinkContainer>
        <LinkContainer to="/contact" ><Nav.Link href="/contact">Contact</Nav.Link></LinkContainer>
      </Nav>
    
  )
}

export default Navbar