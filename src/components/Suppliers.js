import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import royalfruit from '../assets/img/royalfruit.jpg';
import lvivske from '../assets/img/lvivske.png';
import chernigivske from '../assets/img/hernigivske.png';
import waissburg from '../assets/img/waissburg.png';
import zlatobeer from '../assets/img/zlatobeer.png';
import ukrkeg from '../assets/img/ukrkeg.png';
import berdichiv from '../assets/img/berdichiv.jpg';
import umanbeer from '../assets/img/umanbeer.jpg';
import podilske from '../assets/img/podilske.jpg';
import carlsberg from '../assets/img/carlsberg.png';

export const Suppliers = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="suppliers" id="suppliers">
      <Container>
        <Row>
          <Col>
            <div className="suppliers-bx">
              <h2>Наші партнери</h2>
              <p>Відкрити до співпраці</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="suppliers-slider"
              >
                <div className="item">
                  <img src={chernigivske} alt="chernigivske" />
                  <h5>Чернігівське</h5>
                </div>
                <div className="item">
                  <img src={royalfruit} alt="royalfruit" />
                  <h5>Royal Fruit Garden</h5>
                </div>
                <div className="item">
                  <img src={waissburg} alt="waissburg" />
                  <h5>Waissburg</h5>
                </div>
                <div className="item">
                  <img src={lvivske} alt="vivske" />
                  <h5>Львьвське</h5>
                </div>
                <div className="item">
                  <img src={ukrkeg} alt="ukrkeg" />
                  <h5>УкрКег</h5>
                </div>
                <div className="item">
                  <img src={zlatobeer} alt="zlatobeer" />
                  <h5>ZlatoBeer</h5>
                </div>
                <div className="item">
                  <img src={berdichiv} alt="berdichiv" />
                  <h5>Бердичівське</h5>
                </div>
                <div className="item">
                  <img src={umanbeer} alt="umanbeer" />
                  <h5>УманьПиво</h5>
                </div>
                <div className="item">
                  <img src={podilske} alt="podilske" />
                  <h5>Перша крафтова броварня</h5>
                </div>
                <div className="item">
                  <img src={carlsberg} alt="carlsberg" />
                  <h5>Carlsberg Ukraine</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
