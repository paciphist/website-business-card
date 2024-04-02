import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import logo1 from '../assets/img/logo1.svg';
import telegram from '../assets/img/telegram.svg';
import viber from '../assets/img/viber.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <span className="footer-logo-text">BEERKING</span>
            <img className="navbar-logo" src={logo1} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p> CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
