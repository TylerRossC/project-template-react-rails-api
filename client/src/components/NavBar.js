import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = ({ currentUser }) => {

  return (

      <div>
          <Navbar variant='dark' bg='dark' expand='lg'>
          <Container fluid>
          <Navbar.Brand href="/home">TimeBlock</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                  <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Menu"
                      menuVariant="dark">
                      <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item>
                      <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/Home">Home!</NavDropdown.Item>
                      <NavDropdown.Item href="/Blocks">Create Block</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text>
                          Signed in as: <a href="/home">{currentUser ? `${currentUser.username}` : "Not Signed In"}</a>
                      </Navbar.Text>
                  </Navbar.Collapse>
          </Container>
          </Navbar>
      </div>

  )
}

export default NavBar