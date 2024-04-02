import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo1 from '../assets/img/logo1.svg';
import telegram from '../assets/img/telegram.svg';
import viber from '../assets/img/viber.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            BEERKING
            <img className="navbar-logo" src={logo1} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Головна
              </Nav.Link>
              <Nav.Link
                href="#products"
                className={
                  activeLink === 'beers' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('beers')}
              >
                Продукція
              </Nav.Link>
              <Nav.Link
                href="#partners"
                className={
                  activeLink === 'suppliers'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('suppliers')}
              >
                Наші партнери
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="telegram" />
                </a>

                <a
                  href="https://www.viber.com/ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={viber} alt="viber" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="instagram" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Приєднатися</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
