import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'
import Navbar2 from '../NavBar/Navbar';

const Login= () => {
  return (
    <>
    <Navbar2/>
    <Container className="text-center " style={{marginTop:'10rem'}}  >
      <Form>
        <h1 style={{fontWeight:'bold',fontSize:'3rem',margin:'3rem'}}>LOGIN</h1>
        <Form.Group>
          <Form.Control
            style={{ width: '36rem', height: '3rem', margin: '14px auto' }}
            type="email"
            placeholder="Enter your email"
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
        {/* <p style={{ marginRight: '25rem' }}>Forget your password?</p> */}
        <p className="hover-green">
      Forget your password?
    </p>
        <Button variant="success" type="button">
          SIGN IN
        </Button>
        <h6
       
        >
         < a href='./register'>   Create account</a>
        </h6>
      </Form>
    </Container>  
      </>

    
  );
};

export default Login;
