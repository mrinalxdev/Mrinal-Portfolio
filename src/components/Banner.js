import { Container, Row, Col } from 'react-bootstrap'

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I am Mrinal`}<span className="wrap">Full stack developer</span></h1>
                        <p>
                        Passionate software developer from India helping innovators to turn their dreams into reality. With 2 years of experience, I'm always looking for a challenge and create something extraordinary
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}