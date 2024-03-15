import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={""}>
                  Students
                </Nav.Link>
                <Nav.Link as={Link} to={"addnewstudent"}>
                  Add New Student
                </Nav.Link>
                <Nav.Link as={Link} to={"lessons"}>
                  Lessons
                </Nav.Link>
                <Nav.Link as={Link} to={"addnewlesson"}>
                  Add New Lesson
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
