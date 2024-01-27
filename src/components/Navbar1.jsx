import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbar1 = () => {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand text-success fw-bold" to="/luigi/">
              LuiGi
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link
                className="active fw-semibold text-uppercase"
                href="/luigi/"
              >
                Home
              </Nav.Link>

              <Nav.Link
                className="fw-semibold text-uppercase"
                href="/luigi/menu"
              >
                Menu
              </Nav.Link>

              <Nav.Link
                className="fw-semibold text-uppercase"
                href="/luigi/about"
              >
                About
              </Nav.Link>

              <Nav.Link
                className="fw-semibold text-uppercase"
                href="/luigi/contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
