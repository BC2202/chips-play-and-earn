import React from "react";
import "./Tokenomics.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
const Tokenomics = () => {
  const data = [
    {
      textTop: "chip",
      textBottom: "Token Name",
    },
    {
      textTop: "chip",
      textBottom: "Token Ticker",
    },
    {
      textTop: "0",
      textBottom: "Decimal",
    },
    {
      textTop: "500,000,000",
      textBottom: "Total Supply",
    },
    {
      textTop: "Cardano",
      textBottom: "Network",
    },
    {
      textTop: "Utility Token",
      textBottom: "Token type",
    },
  ];
  return (
    <div id="tokenomic">
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://chipsmobile.com/static/media/wavy-bg-top.daba3b46ce9d39b94ba8.png"
        alt=""
      />
      <div id="blue">
        <Container>
          <h1 className="heading text-center" data-aos="fade-up">
            Tokenomics
          </h1>
          <p className="paragraph text-center pt-3" data-aos="fade-up">
            Invest in the game's success and support social impact by
            participating in the token sale.
          </p>
          <div className="container">
            <div className="mt-4 row" data-aos="zoom-in">
              {data.map((Tokenomics) => {
                return (
                  <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                    <div className="item-box">
                      <div className="item-box-top">
                        <h3 className="t-dark text-center">
                          {Tokenomics.textTop}
                        </h3>
                      </div>
                      <div className="item-box-bottom">
                        <h4 className="t-white text-center">
                          {Tokenomics.textBottom}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <h1 className="heading text-center" data-aos="fade-up">
            Token Utilization
          </h1>
          <Row className="pb-5">
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Reserved</p>
              <p className="box">5%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="reserved1"></div>
                <div id="reserved2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Team</p>
              <p className="box">10%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="team1"></div>
                <div id="team2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Development</p>
              <p className="box">15%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="development1"></div>
                <div id="development2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Public Sales</p>
              <p className="box">35%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="public1"></div>
                <div id="public2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Marketing</p>
              <p className="box">16.1%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="market1"></div>
                <div id="market2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Liquidity</p>
              <p className="box">12%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="liquidity1"></div>
                <div id="liquidity2"></div>
                <div id="team3"></div>
              </div>
            </Col>

            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Private Seed</p>
              <p className="box">2.3%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="private1"></div>
                <div id="private2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Seed 1</p>
              <p className="box">2.3%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="private1"></div>
                <div id="private2"></div>
                <div id="team3"></div>
              </div>
            </Col>
            <Col className="circle" sm={1} data-aos="zoom-in">
              <p className="box pt-2">Seed 2</p>
              <p className="box">2.3%</p>
              <div id="bar" className="d-flex justify-content-center">
                <div id="private1"></div>
                <div id="private2"></div>
                <div id="team3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <img
      style={{width:"100%",height:"100%"}}
          src="https://chipsmobile.com/static/media/wavy-bg-bottom.3668b91d9fc298d2672b.png"
          alt=""
        />
    </div>
  );
};

export default Tokenomics;
