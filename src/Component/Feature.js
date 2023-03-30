import React from "react";
import'./Feature.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Feature = () => {
  const data=[
    {
      img:"https://stitchedbackend.com/stitched-frontend/features/1663054312gameplay.png",
      title:"Gameplay",
      discruption:"Experience freedom and control in Chips. Innovative mechanics, customize your character, and take the game to the next level.",
    },
    {
      img:"https://stitchedbackend.com/stitched-frontend/features/1663054341gamemachenics.png",
      title:"Game Mechanics",
      discruption:"Get hooked with Chips! Cutting-edge graphics and dynamic gameplay. Immerse in a world of adventure.",
    },
    {
      img:"https://stitchedbackend.com/stitched-frontend/features/1663054367technical-support.png",
      title:"How Things Work",
      discruption:"Chips: A decentralized, player-owned economy built on blockchain technology.",
    },
    {
      img:"https://stitchedbackend.com/stitched-frontend/features/1671730163chip%20logo%20for%20fiel%20crypto-01%20(1)%20(1).png",
      title:"Staking",
      discruption:"Crypto staking: Lock up crypto to earn rewards/interest.",
    },
  ]
  return (
    <div id="feature">
     <img style={{width:"100%",height:"100%"}} src="https://chipsmobile.com/static/media/wavy-bg-top.daba3b46ce9d39b94ba8.png" alt="" />
      <div id="blue" >
     
        <h1 data-aos="fade-up" id="empower">Empowering Players with Unique Features</h1>
<div className="container">
        <Row>
          
          {data.map((Feature)=>{
            return(
              <Col>
              <Card  className="Features" data-aos="fade-up">
              <Card.Img
                id="img"
                variant="top"
                src={Feature.img}
                style={{ height: "80px", width: "80px" }}
              />
              <Card.Body>
                <Card.Title id="title">{Feature.title}</Card.Title>
                <Card.Text id="title">
                {Feature.discruption}
                </Card.Text>
              </Card.Body>
            </Card>
          
          </Col>
            );
          })}
        </Row>
        </div>
       
      </div>
      <img
      style={{width:"100%",height:"100%"}}
          src="https://chipsmobile.com/static/media/wavy-bg-bottom.3668b91d9fc298d2672b.png"
          alt=""
        />
    </div>
  );
};

export default Feature;
