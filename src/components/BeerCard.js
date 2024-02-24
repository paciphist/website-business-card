import { Col } from 'react-bootstrap';

export const BeerCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="beer-imgbx">
        <img src={imgUrl} alt="beer card" />
        <div className="beer-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
