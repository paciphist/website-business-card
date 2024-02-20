import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import lvivske from '../assets/img/lvivske.png';
import chernigivske from '../assets/img/hernigivske.png';
import waissburg from '../assets/img/waissburg.png';
import zlatobeer from '../assets/img/zlatobeer.png';
import ukrkeg from '../assets/img/ukrkeg.png';
import colorSharp from '../assets/img/color-sharp.png';

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
              <h2>Наші постачальник</h2>
              <p>Відкрити до співпраці</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="suppliers-slider"
              >
                <div className="item">
                  <img src={chernigivske} alt="" />
                  <h5>Чернігівське</h5>
                </div>
                <div className="item">
                  <img src={waissburg} alt="" />
                  <h5>Waissburg</h5>
                </div>
                <div className="item">
                  <img src={lvivske} alt="" />
                  <h5>Львьвське</h5>
                </div>
                <div className="item">
                  <img src={ukrkeg} alt="" />
                  <h5>УкрКег</h5>
                </div>
                <div className="item">
                  <img src={zlatobeer} alt="" />
                  <h5>ZlatoBeer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
