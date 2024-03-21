import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import barrelbeer from '../assets/img/barrel-beer.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Напої', 'Закуски', 'Вино'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(
      () => {
        tick();
      },
      delta,
      index
    );

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Вітаю в BeerKing</span>
                  <h1>
                    {`Живе пиво `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[
                      "Закуски", "Напої" "Вино"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        Крамниця розливного живого крафтового пива, сидра, вина
                        та лимонадів. Смаколики до напоїв, м'ясні, рибні, сирні,
                        снеки.
                      </li>
                      <li>Телефон: +380 11 22 33 444</li>
                      <li> Працюємо: з 11-00 до 22-00</li>
                    </ul>
                  </div>

                  <button onClick={() => console.log('connect')}>
                    Наливаємо за адресою:
                    <ArrowRightCircle size={30} />
                    <a
                      href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu"
                      target="_blank"
                      rel="noreferrer"
                      className="adress"
                    >
                      м.Хмельницький, вул.Залізняка 8/3
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={barrelbeer} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
