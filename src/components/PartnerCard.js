import { Col } from 'react-bootstrap';

export const PartnerCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={8} md={6} lg={2}>
      <div className="partner-imgbx">
        <img src={imgUrl} alt="partner card" />
        {/* <div className="partner-txtx">
          <h4>{title}</h4>
          <p className="discr">{description}</p>
        </div> */}
      </div>
    </Col>
  );
};
