import React from 'react'
import'./Problem.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Problem = () => {
  return (
    <div id='problem'>
        <Container>
        <Row>
          <Col>
            <Card id="card">
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
            <Card id="card2">
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
        </Row>
        </Container>
    </div>
  )
}

export default Problem