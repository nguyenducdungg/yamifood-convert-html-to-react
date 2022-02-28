import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
const Header = () => {
  return (
    <header className="top-navbar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="menu.html">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about.html">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <Link className="dropdown-item" to="reservation.html">
                    Reservation
                  </Link>
                  <Link className="dropdown-item" to="stuff.html">
                    Stuff
                  </Link>
                  <Link className="dropdown-item" to="gallery.html">
                    Gallery
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Blog
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <Link className="dropdown-item" to="blog.html">
                    blog
                  </Link>
                  <Link className="dropdown-item" to="blog-details.html">
                    blog Single
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact.html">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
