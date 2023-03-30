import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <div className="footer">
    <img
        style={{ width: "100%", height: "100%" }}
        src="https://chipsmobile.com/static/media/wavy-bg-top.daba3b46ce9d39b94ba8.png"
        alt=""
      />
      <div id="blue">
      <Container fluid className="footer1">
        <Row>
          <Col>
            <Card data-aos="fade-up" className="footer-card">
              <Card.Img
              className="ms-3"
                style={{ width: "20%", height: "20%"  }}
                src="https://chipsmobile.com/static/media/chips.7c1ab7386b24852cad04.png"
              />
              <Card.Body>
                <Card.Title className="contact">Contact</Card.Title>
                <Card.Link className="link" href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJfpskGmTwBKZPvgMwSLhbrfnzdJdRvVjPGGgrbNjhvsdvMqHnwxPXnVTXCMvFqrVllKqsB">admin@chipsmobile.com</Card.Link>
                <Card.Title className="copyright">© Copyright 2023 Chips Mobile LLC. All Rights Reserved.</Card.Title>            
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-up" className="card2nd">
              <Card.Body>
                <Card.Title id="quick">Quick Links</Card.Title>
                <Card.Text>
                 <hr className="hr"/>
                 <Card.Link className="links" href="#tokenomic">Tokenomics</Card.Link><br />
                 <Card.Link className="links" href="#feature">Features</Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-up" className="card2nd" >
              <Card.Body>
                <Card.Title id="quick">Useful Links</Card.Title>
                <Card.Text>
                 <hr className="hr"/>
                 <Card.Link className="links" href="https://chipsmobile.com/Chips-Privacy-Policy.pdf">Privacy Policy</Card.Link><br />
                 <Card.Link className="links" href="https://chipsmobile.com/Chips-Terms-and-Conditions.pdf">Term and Condition</Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Footer;
