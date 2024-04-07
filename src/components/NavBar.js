import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import crown from '../assets/img/icons/crown.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';
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
            <img className="navbar-logo" src={crown} alt="logo" />
            <h3>BEERKING</h3>
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
                  activeLink === 'partners'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('partners')}
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
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span className="vvd-text">З'вязок</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
