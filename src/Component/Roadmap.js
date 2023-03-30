import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import"./Roadmap.css"
const Roadmap = () => {
  return (
    <div id='roadmap'>
   
    <Container>
    <h1 className='Roadmap text-center' data-aos="fade-up">Roadmap</h1>
      <Row>
        <Col sm={3}></Col>
        <Col sm={1} data-aos="fade-up">
          <div className='phase'>PHASE◈1</div>
        </Col>
        <Col sm={4} data-aos="fade-up">
<div className='twentyTwo'>2022</div>
<div className='para'>✧ Research and Development of Chips</div>
<div className='para'>✧ Website design</div>
<div className='para'>✧ Pre-Seed Round (Funded)</div>
<div className='para'>✧ Beta Launch (iOS & Android)</div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}></Col>
        <Col sm={1} data-aos="fade-up">
          <div className='phase'>PHASE◈1</div>
        </Col>
        <Col sm={5} data-aos="fade-up">
<div className='twentyTwo'>2022</div>
<div className='para'>✧ DAO</div>
<div className='para'>✧ Registered with FINCEN</div>
<div className='para'>✧ Approved Illinois QNBV </div>
<div className='para'>✧ $CHIP Coin Launch</div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={1} data-aos="fade-up">
          <div className='phase'>PHASE◈1</div>
        </Col>
        <Col sm={4} data-aos="fade-up">
<div className='twentyTwo'>2023</div>
<div className='para'>✧ Index Listing</div>
<div className='para'>✧ Multiplayer</div>
<div className='para'>✧ AI</div>
<div className='para'>✧ Chips Marketplace</div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}></Col>
        <Col sm={1} data-aos="fade-up">
          <div className='phase'>PHASE◈1</div>
        </Col>
        <Col sm={5} data-aos="fade-up">
<div className='twentyTwo'>2023</div>
<div className='para'>✧ Project K</div>
<div className='para'>✧ DAO (phase 2)</div>
<div className='para'>✧ Version 1</div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={1} data-aos="fade-up">
          <div className='phase'>PHASE◈1</div>
        </Col>
        <Col sm={4} data-aos="fade-up">
<div className='twentyTwo'>2023</div>
<div className='para'>✧ NFT</div>
<div className='para'>✧ AI (phase 2)</div>
<div className='para'>✧ Maps</div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}


export default Roadmap