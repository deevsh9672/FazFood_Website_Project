import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import navlogo from '../Images/logo_1.webp';
import grid1 from '../Images/grid1.webp';
import grid2 from '../Images/grid2.png';
import grid3 from '../Images/grid3.png';
import grid4 from '../Images/grid4.png';
import grid5 from '../Images/grid5.png';
import grid6 from '../Images/grid6.webp';
import Navbar2 from "../NavBar/Navbar";
import Footer1 from "../Footer/Footer";

function Grid1() {
    return (
        <>
        <Navbar2/>
            <Container className="mb-3" style={{backgroundColor:'#eeece9'}}
>

                <Row>
                    <Col>
                        <img src={navlogo} alt="Nav Logo" />
                        <h1  style={{fontWeight:'bold', fontSize:'2rem'}}><span>
                            WE MAKE THE BEST <br />BURGER IN YOUR <br /> TOWN</span></h1>

                        <p style={{fontWeight:'revert-layer'}}> <span>The mouth-watering aroma of sizzling burgers now fills the <br /> streets of Birmingham thanks to the passionate pursuit of <br/> three brothers, the British founders of Fazfood</span></p>
                 
                        <Row>
                            <Col xs={4}>
                                <img src={grid1} alt="Grid 1" />
                            </Col>

                            <Col xs={4}>
                                <img src={grid2} alt="Grid 2" />
                            </Col>
                            
                            <Col xs={4}>
                                <img src={grid3} alt="Grid 3" />
                            </Col>
                        </Row>

                        <Row style={{marginTop:'1rem'}}>
                            <Col xs={4}>
                                <img src={grid4} alt="Grid 4" />
                            </Col>

                            <Col xs={4}>
                                <img src={grid5} alt="Grid 5" />
                            </Col>

                            <Col xs={4}>
                                <img src={grid6} alt="Grid 6" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer1/>
        </>
    );
}

export default Grid1;
