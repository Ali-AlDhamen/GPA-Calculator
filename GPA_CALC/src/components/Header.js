import { Row, Col } from "react-bootstrap";
const Header = ({ header, subHeader }) => {
  return (
    <>
      <Row>
        <Col>
          <div className="text-start p-4">
            <h2>{header}</h2>
            <span>{subHeader}</span>
            <hr></hr>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
