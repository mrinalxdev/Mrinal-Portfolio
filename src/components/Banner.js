import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I am Mrinal`}
              <span className="wrap">Full stack developer</span>
            </h1>
            <p>
              Passionate software developer from India helping innovators to
              turn their dreams into reality. With 2 years of experience, I'm
              always looking for a challenge and create something extraordinary
            </p>
            <button onClick={() => console.log("connected")}>Let's Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={ArrowRightCircle} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
