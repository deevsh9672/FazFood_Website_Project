import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'
import { Nav } from 'react-bootstrap';
import Navbar2 from '../NavBar/Navbar';
// import { useNavigate } from 'react-router-dom';

const Register= () => {
    // const navigate = useNavigate();
  return (
    <>
    <Navbar2/>

    <Container className="text-center" style={{marginTop:'10rem'}} >
      <Form>
        <h1 style={{fontWeight:'bold',fontSize:'3rem',margin:'3rem'}}> Create account  </h1>
        <Form.Group>
          <Form.Control
            style={{ width: '36rem', height: '3rem', margin: '14px auto' }}
            type="text"
            placeholder="Enter First Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ width: '36rem', height: '3rem', margin: '14px auto' }}
            type="text"
            placeholder="Enter Last Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ width: '36rem', height: '3rem', margin: '14px auto' }}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ width: '36rem', height: '3rem', margin: '10px auto' }}
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
      
        <Button variant="success" type="button">
CREATE        </Button>
{/* <Nav.Link
      className='hover-green1'
      style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '10px' }}
      onClick={() => navigate('Login.js')}
    >
      Aleared User
    </Nav.Link>L */}
  <h5>
     <a href='/Login'>Aleared user</a>  </h5>
      </Form>
    </Container>
    </>

    
  );
};

export default Register;
