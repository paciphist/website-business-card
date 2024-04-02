import { Col } from 'react-bootstrap';

export const BeerCard = ({
  title,
  beerTitle,
  beerStrength,
  beerFactory,
  description,
  imgUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="beer-imgbx">
        <img src={imgUrl} alt="beer card" />
        <p className="beer-title">{beerTitle}</p>
        <p className="beerStrength">{beerStrength}</p>
        <p className="beerFactory">{beerFactory}</p>
        <div className="beer-txtx">
          <h4>{title}</h4>
          <p className="beer-discr">{description}</p>
        </div>
      </div>
    </Col>
  );
};
