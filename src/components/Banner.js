import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from '../assets/img/header-img.svg';
// import logo from '../assets/img/logo-beer-king.jpg';
import barrelbeer from '../assets/img/barrel-beer.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ['Напої', 'Закуски'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Вітаю в BeerKing</span>
            <h1>
              {`Живе пиво `}
              <span className="wrap">{text}</span>
              <p>Тут щось буде....</p>
              <button onClick={() => console.log('connect')}>
                Приєднатися
                <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={barrelbeer} alt="Header Img" />
            {/* <img src={logo} alt="logo" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
