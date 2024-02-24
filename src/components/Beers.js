import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BeerCard } from '../components/BeerCard';
import beerImg1 from '../assets/img/beer-img1.png';
import beerImg2 from '../assets/img/beer-img2.png';
import beerImg3 from '../assets/img/beer-img3.png';
import beerImg4 from '../assets/img/beer-img4.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Beers = () => {
  const beers = [
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
          <Col>
            <h2>Сорта пива</h2>
            <p>Наш асортимент</p>
            <Tab.Container id="beers-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
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
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background right"
      />
    </section>
  );
};
