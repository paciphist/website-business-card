import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BeerCard } from '../components/BeerCard';
import beerImg1 from '../assets/img/white-beer1.png';
import beerImg2 from '../assets/img/white-beer2.png';
import beerImg3 from '../assets/img/dark-beer3.png';
import beerImg4 from '../assets/img/dark-beer3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Beers = () => {
  const beers = [
    {
      title: 'Чеський Лагер',
      description: 'Світле фільтроване пастерезоване',
      imgUrl: beerImg1,
    },
    {
      title: 'Світле нефільтроване',
      description: 'Світле нефільтроване непастерезоване',
      imgUrl: beerImg2,
    },
    {
      title: 'Темне',
      description: 'Темне фільтроване',
      imgUrl: beerImg3,
    },
    {
      title: 'Напівтемне нефільтроване',
      description: 'Напівтемне нефільтроване',
      imgUrl: beerImg4,
    },
    {
      title: 'Світле фільтроване',
      description: 'Світле фільтроване пастерезоване',
      imgUrl: beerImg1,
    },
    {
      title: 'Світле нефільтроване',
      description: 'Світле нефільтроване непастерезоване',
      imgUrl: beerImg2,
    },
  ];

  return (
    <section className="beers" id="beers">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Продукція</h2>
                  <h3>Наш асортимент</h3>
                  <Tab.Container id="beers-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Пиво</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Закуски</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Вино</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {beers.map((beer, index) => {
                            return <BeerCard key={index} {...beer} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">22</Tab.Pane>
                      <Tab.Pane eventKey="third">33</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
