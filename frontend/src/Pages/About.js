import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'; // Keep this import
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import social icons
import {faHome} from '@fortawesome/free-solid-svg-icons';

import './about.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar2 from "../NavBar/Navbar";

function About() {
    return (
        <>
 <Navbar2/>   
      <Container  className='menubg  mt-1' >
  <h1 style={{fontSize:'2.5rem',fontWeight:"bold",textAlign:'center',color:'wheat'}}>ABOUT US</h1>
  <h5  style={{textAlign:'center'}}>
  <FontAwesomeIcon icon={faHome} style={{color:'white'}}  className='menubtn' />

  <Button className='menubtn'
      variant="link"
      style={{ fontSize: '1rem', fontWeight: 'bold', color: 'wheat' }}
      href="/                " // Use 'to' prop if using React Router
    >
      / Home
    </Button>
  </h5>
  <p className="text-danger text-center" style={{fontWeight:'bold'}}>
                            <span>About Our Food</span>
                        </p>
</Container>
            {/* First Container */}
            <Container fluid className="about-section1">
                <Row className="text-center">
                    <Col>

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
                        <Button style={{marginLeft:'6rem'}} variant="outline-success" className="mx-5 button1 overflow-button custom-button">
              ABOUT OUR FOOD
            </Button>
                    </Col>
                </Row>
                <Row className="justify-content-start ">
                    <Col xs={12} md={12} className="text-center">
                        <img src={require('../Images/ab1.jpeg')} alt="Delicious Burgers" className="about-image img-fluid" />
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
                            src={require('../Images/aboutc1.webp')} 
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
                            src={require('../Images/aboutc2.webp')} 
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
                            src={require('../Images/aboutc3.webp')} 
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
                            src={require('../Images/aboutc4.webp')} 
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
        </>
    );
}

export default About;
