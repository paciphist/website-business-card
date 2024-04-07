import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import crown from '../assets/img/icons/crown.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img className="navbar-logo" src={crown} alt="logo" />
            <h3>BEERKING</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
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
            <p> CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
