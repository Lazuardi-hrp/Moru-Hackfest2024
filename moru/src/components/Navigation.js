import {Navbar, Container, Nav} from "react-bootstrap"
import Logo from "../assets/images/logo.png"

const Navigation = () => {
   return (
      <Navbar>
         <Container className="d-flex justify-content-center align-items-center">
            <Nav>
               <Navbar.Brand href="#home" >
               <img src={Logo} width="225" height="55"/>
               </Navbar.Brand>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default Navigation