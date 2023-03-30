import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import'./About.css';

function About() {
  return (
    <>
      <Container id="about">
        <Row>
          <Col>
            <h1 data-aos="fade-up" id="color">
              What's It All About?
            </h1>
            <br />
            <p data-aos="fade-up" id="color">
              At Chips Mobile LLC, a registered MSB company with FINCEN and
              approved QNBV in the state of Illinois, we believe that positive
              decision-making can change the world. We're a blockchain-based
              mobile game company that offers a unique gaming experience that
              incentivizes players to make positive decisions in the game and in
              real life. Our Mission is to address social inequalities through
              gamification.
            </p>
          </Col>
          <Col>
            <img
              data-aos="fade-up"
              src="https://chipsmobile.com/static/media/chip.934c2ba0045127ffd521.png"
              style={{ height: "210px", width: "210px", marginLeft: "150px" }}
              alt=""
            />
            <br />
            <img
              data-aos="fade-up"
              src="https://chipsmobile.com/static/media/crumb.dbd0b01375b16e7c65b6.png"
              style={{ height: "160px", width: "200px", marginLeft: "150px" }}
              alt=""
            />
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <Card id="card" style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title data-aos="fade-up" id="heading">An Innovative Solution</Card.Title>
                <Card.Text data-aos="fade-up" id="paragraph">
                  Chips Mobile LLC is addressing financial literacy and access
                  to financial education in the gaming industry through an
                  interactive game that incentivizes positive decision-making
                  and promotes financial skills. Users can earn rewards
                  passively through gameplay and by participating in the token
                  sale and holding $CHIP coins. The game also encourages
                  positive decision-making and requires players to consider the
                  impact of their actions, setting Chips apart from other mobile
                  games. Positive behavior rewards players with coins, but
                  negativity reduces rewards and restricts access to special
                  events, clubs, and discounts. In the event of prolonged
                  negative behavior, coins will not be available for withdrawal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="card2" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title data-aos="fade-up" id="heading">The Team</Card.Title>
                <Card.Text data-aos="fade-up" id="paragraph">
                  Hailing from Chicago, The Founders, self-funded the pre-seed
                  round with a $120k investment, demonstrating their commitment
                  to the project. With a friendship dating back to grade school,
                  they both share interests in investing and early adaptation to
                  cryptocurrency. Wynton, a visionary entrepreneur, brings a
                  strong business acumen to the team while Ken, has a passion
                  for technology and an understanding of coding. With their
                  shared passion for gaming and technology, combined with their
                  philanthropic efforts and diverse backgrounds, the founders
                  are well-positioned for success in the blockchain gaming
                  industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>

    
    </>
  );
}

export default About;
