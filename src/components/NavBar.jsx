import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useCarritoContext } from "../contexts/CarritoContext";

function NavBar() {
  const { listaCompras } = useCarritoContext();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          {/* <Navbar.Brand>App Compras</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* <Nav.Link className="nav-item"> */}
            {/* <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to={"/"}>
              Home
            </NavLink> */}
            {/* </Nav.Link> */}
            {/* <Nav.Link className="nav-item"> */}
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to={"/"}>
              Productos
            </NavLink>
            {/* </Nav.Link> */}
            {/* <Nav.Link> */}
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to={"/shop"}>
              🛒<Badge bg="info">{listaCompras.length}</Badge>
            </NavLink>
            {/* </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
