import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BeerCard } from '../components/BeerCard';
import beerImg1 from '../assets/img/ch-lager.png';
import beerImg2 from '../assets/img/ch-blanc.png';
import beerImg3 from '../assets/img/dark-beer12.png';
import beerImg4 from '../assets/img/dark-beer11.png';
import beerImg5 from '../assets/img/khmelpivo.png';
import beerImg6 from '../assets/img/umanpivo.png';
import beerImg7 from '../assets/img/kronenbourg.png';
import beerImg8 from '../assets/img/pils.png';
import beerImg9 from '../assets/img/satoshi.png';
import beerImg10 from '../assets/img/rizdvo.png';
import beerImg11 from '../assets/img/sangushko.png';
import cyderImg1 from '../assets/img/fragolino1.png';
import cyderImg2 from '../assets/img/lisova-yahodа.png';
import cyderImg4 from '../assets/img/manho-persyk.png';
import cyderImg5 from '../assets/img/zbiten1.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Beers = () => {
  const beers = [
    {
      title: 'Чеський Лагер',
      description:
        'Світле фільтроване. Має насичений зерновий аромат, чистий солодовий смак з тонкою гірчинкою. В післясмаку відчуваються хмельові нотки. Міцність: 3,9%. Щільність: 11,5%. Виробник: м.Золотоноша, Zlato Beer',
      imgUrl: beerImg1,
    },
    {
      title: 'Чеський Бланш',
      description:
        "Світле нефільтроване. Пиво має чистий солодовий смак з тонкою гіркуватістю та легким сп'янілим післясмаком. Зварене на заводі чеськими пивоварами за сучасними технологіями з українського солоду та хмелю. Міцність: 4,8%. Щільність: 11%. м.Золотоноша, Zlato Beer ",
      imgUrl: beerImg2,
    },
    {
      title: 'Хмельницьке',
      description:
        "Світле фільтроване непастеризоване. Має багатий ароматом з солодкими зерновими і солодовими відтінками, фруктовими нюансами. Пиво добре поєднується зі снеками, м'ясними закусками, шинкою, свининою, сендвічами. Міцність: 4,5%. Щільність: 12%. Виробник: м.Хмельницький, Хмельпиво",
      imgUrl: beerImg5,
    },
    {
      title: 'Дункель',
      description:
        'Темне фільтроване. Цей сорт пива має рубіново-червоний колір із незвично темнуватою шапкою піни. У букеті переважає аромат хмелю, а смажений солод дає пікантну гіркоту. Міцність: 4,7%. Щільність: 11%. Виробник: м.Умань, Waissburg',
      imgUrl: beerImg3,
    },
    {
      title: 'Уманське Медове',
      description:
        'Світле фільтроване непастеризоване. Світле фільтроване пиво низового бродіння із солодово-медовим ароматом з квітковими нотками. Пиво золотистого кольору із середньозернистою, стійкою піною. Повнота смаку відчувається із першого ковтка. Пиво виготовляється зі світло-ячмінного солоду із додаванням квіткового меду. Міцність: 6,5%. Щільність: 11%. Виробник: м. Умань, УманьПиво',
      imgUrl: beerImg6,
    },
    {
      title: 'Хмелевус',
      description:
        'Напівтемне нефільтроване непастеризоване. Пшеничне пиво в німецькому стилі. Напій насиченого бурштинового кольору з ароматом стиглих фруктів із пряно-гвоздичними тонами та нотками здоби та випічки. Тіло помірно щільне, смак стиглі фрукти, ефірно-пряні тони, дріжджові нотки. Міцність: 6,4%. Щільність: 15%. Виробник: м.Чернігів, Sun InBev Ukraine',
      imgUrl: beerImg4,
    },
    {
      title: 'Львівське Різдвяне',
      description:
        'Темне фільтроване пастеризоване. Сезонне темне пиво з карамельно-пряним ароматом і ноткою різдвінних спецій, яке вариться до зимових свят. Міцність: 4,2%. Щільність: 11.6%. Виробник: м.Львів, Львівська пивоварня Carlsberg Ukraine',
      imgUrl: beerImg10,
    },
    {
      title: 'Kronenbourg 1664 Blanc',
      description:
        'Пиво з фруктовими нотками, яке виробляється по оригінальній рецептурі, розробленій у Франції. Має м’який солодовий смак з тонким ароматом цитрусових та апельсинової цедри. Це поєднання доповнює пряно-фруктовий присмак, який змінюється солодкуватим, ледь відчутними пшеничними відтінками. Міцність: 4,8%. Щільність: 12%. Виробник: м.Львів, Львівська пивоварня Carlsberg Ukraine',
      imgUrl: beerImg7,
    },

    {
      title: 'Pils',
      description:
        'Справжнє крафтове, світле, нефільтроване та непастеризоване пиво. Виготовлено з натуральної добірної сировини. Міцність: 4,7%. Щільність: 11.2%. Виробник: с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
      imgUrl: beerImg8,
    },
    {
      title: 'Satoshi',
      description:
        'Світле нефільтроване непастеризоване. Крафтове, на основі рису, кукурудзяних пластивців, справжнього хмелю і солоду. Смак з явно вираженою кислинкою. Міцність: 4,5%. Щільність: 11%. Виробник: с.Стуфчинці, Хмельницька обл., Перша крафтова броварня',
      imgUrl: beerImg9,
    },
    {
      title: 'Sangushko',
      description:
        'світле і м’яке пиво преміум класу. Напій містить в собі ніжні ноти меду і лугових трав, заворожує і одночасно заспокоює. Завдяки поєднанню дивовижних смакових властивостей і чудодійного аромату, напій чудово втамовує спрагу в спекотний день і насичує енергією. Міцність: 5.5%. Щільність: 14%. Виробник: м.Славута, Славута-Пивзавод',
      imgUrl: beerImg11,
    },
  ];

  const cyders = [
    {
      title: 'Фраголіно',
      description:
        'Натуральний білий сидр живого бродіння, що має гармонійний свіжий смак з нотками полуниці та легкий винний аромат. Міцність: 5%. Виробник: м.Золотоноша, Royal Fruit Garden',
      imgUrl: cyderImg1,
    },
    {
      title: 'Лісова ягода',
      description:
        'Приємний натуральний освіжаючий смак лохини, малини і ожини вдало поєднуються з яблучним сидром. Міцність: 5%. Виробник: м.Золотоноша, Royal Fruit Garden',
      imgUrl: cyderImg2,
    },
    {
      title: 'Червоний Гріх',
      description:
        'Натуральний яблучний сидр, який виробляється із використанням традиційних методів бродіння та відбору найкращих яблук, що ростуть на наших українських землях! Смак з легенькою кислинкою, журавлина, виноград та полуниця. Міцність: 6%. Виробник: м.Золотоноша, Royal Fruit Garden',
      imgUrl: cyderImg2,
    },
    {
      title: 'Манго-персик',
      description:
        'Напій має приємний свіжий смак, в якому приємна яблучна кислинка ідеально поєднується з екзотичною насолодою манго і персика. Міцність: 5%. Виробник: м.Золотоноша, Royal Fruit Garden',
      imgUrl: cyderImg4,
    },
    {
      title: 'Збітень',
      description:
        'Це солодкий медовий напій, основним компонентом якогоє мед. Крім того, для його приготування використовували воду, різні прянощі та трави, в тому числі лякарські. Міцність: 5%. Виробник: м.Золотоноша, Royal Fruit Garden',
      imgUrl: cyderImg5,
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
                        <Nav.Link eventKey="second">Сидр</Nav.Link>
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {cyders.map((cyder, index) => {
                            return <BeerCard key={index} {...cyder} />;
                          })}
                        </Row>
                      </Tab.Pane>
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
