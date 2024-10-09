import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Navbar2 from "../NavBar/Navbar";
function CheckOut(){
    return(
<>
<Navbar2/>
<Container className="text-center" style={{marginTop:'10rem'}}>
    <h1 style={{fontWeight:'bold' ,fontSize:'2rem'}}>Your Cart</h1>
<p>Spend $1,000.00 more and get free shipping!</p>

</Container>

<Container>
    <Row>
        <Col >
        <h5 >PRODUCT</h5>
        </Col>
        <Col>
        <h5 >QUANTITY</h5>
        </Col>
        <Col >
        <h5 >TOTAL</h5>
        </Col>
        <hr />
    </Row>
</Container>
</>
    );
}
export default CheckOut;