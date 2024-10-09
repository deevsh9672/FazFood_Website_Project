import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'; // Keep this import
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import social icons
import './about.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar2 from "../NavBar/Navbar";
import Footer1 from "../Footer/Footer";

function About() {
    return (
        <>
        <Navbar2/>
            {/* First Container */}
            <Container fluid className="about-section1">
                <Row className="text-center">
                    <Col>
                        <p className="text-danger">
                            <span>About Our Food</span>
                        </p>
                        <h1 style={{fontWeight:'bold'}} className="dev">
                            <span>
                                Best burger ideas &<br />
                                traditions from the<br />
                                whole world
                            </span>
                        </h1>
                        <p>
                            <span>
                                The mouth-watering aroma of sizzling burgers now fills the streets of Birmingham<br />
                                thanks to the passionate pursuit of three brothers, the British founders of Fazfood.<br />
                                After over 50 years of experience in the culinary industry between them, they set<br />
                                out on a journey to discover the ultimate burger.
                            </span>
                        </p>
                        <Button variant="outline-success" className="dev1">
                            ABOUT OUR FOOD <FontAwesomeIcon icon={faArrowCircleRight} />
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-start ">
                    <Col xs={12} md={6} className="text-center">
                        <img src={require('../Images/1.png')} alt="Delicious Burgers" className="about-image" />
                    </Col>
                </Row>
            </Container>

            {/* Third Container */}
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center" style={{ fontSize: '3rem' ,fontWeight:'bold'}}>
                            <span>Meet Our Expert Chefs</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {/* Chef 1 */}
                    <Col md={3}> 
                        <img 
                            src={require('../Images/card1.png')} 
                            alt="Chef" 
                            style={{ 
                                borderRadius: '3px', 
                                width: '100%', 
                                height: 'auto' 
                            }} 
                        />
                        <div className="text-center">
                            <h6 style={{ color: 'darkblue' }}>
                                <span>Jacob Hilton</span>
                            </h6>
                            <h6>
                                <span>EXECUTIVE CHEF</span>
                            </h6>
                            <Row className="justify-content-center">
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 5px' }} />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* Chef 2 */}
                    <Col md={3}> 
                        <img 
                            src={require('../Images/card2.png')} 
                            alt="Chef" 
                            style={{ 
                                borderRadius: '3px', 
                                width: '100%', 
                                height: 'auto' 
                            }} 
                        />
                        <div className="text-center">
                            <h6 style={{ color: 'darkblue' }}>
                                <span> Linda Erton </span>
                            </h6>
                            <h6>
                                <span>HEAD CHEF </span>
                            </h6>
                            <Row className="justify-content-center">
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 5px' }} />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* Repeat for other chefs */}
                    <Col md={3}> 
                        <img 
                            src={require('../Images/card3.png')} 
                            alt="Chef" 
                            style={{ 
                                borderRadius: '3px', 
                                width: '100%', 
                                height: 'auto' 
                            }} 
                        />
                        <div className="text-center">
                            <h6 style={{ color: 'darkblue' }}>
                                <span>JEF RICK</span>
                            </h6>
                            <h6>
                                <span> KITCHEN PORTER

</span>
                            </h6>
                            <Row className="justify-content-center">
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 5px' }} />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={3}> 
                        <img 
                            src={require('../Images/card4.png')} 
                            alt="Chef" 
                            style={{ 
                                borderRadius: '3px', 
                                width: '100%', 
                                height: 'auto' 
                            }} 
                        />
                        <div className="text-center">
                            <h6 style={{ color: 'darkblue' }}>
                                <span>JACOB HILTON</span>
                            </h6>
                            <h6>
                                <span>EXECUTIVE CHEF </span>
                            </h6>
                            <Row className="justify-content-center">
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 5px' }} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 5px' }} />

                                </Col>
                       
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer1/>
        </>
    );
}

export default About;
