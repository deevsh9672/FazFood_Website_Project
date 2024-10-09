import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuBar.menubar.css';
import  {React, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping ,faArrowRight, faHome, faBurger, faPizzaSlice, faPieChart} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container} from 'react-bootstrap';
import Navbar2 from '../NavBar/Navbar';



const ProductCard = ({ imgSrc, title, price, description }) => {
  return (
    <div className="card product-card text-center">
      <img src={imgSrc} className="card-img-top img-fluid" alt={title} />
      <div className="card-body d-flex justify-content-between align-items-center">
        <h3 style={{ color: '#333' }} className="card-title mb-0 me-4">{title}</h3>
        <FontAwesomeIcon className="icon-container1 me-2" icon={faHeart} />
      </div>
      <div className="stars">★★★★★</div>
      <p className="description">{description}</p>
      <Row className="justify-content-between align-items-center">
        <Col style={{ color: 'red' }} xs="auto">
          <h3 className="card-title mb-0">{price}</h3>
        </Col>
        <Col xs="auto" className="me-2 icon-container">
          <Button variant='success'>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Col>
      </Row>
    </div>
  );
};


    


const MENUBar = () => {

  const products = [
    { img: require('../Images/card-1.webp'), title: 'BIG MAC', price: '$35.15', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
    { img: require('../Images/card-2.webp'), title: 'CLASSIC ROAST BEEF', price: '$9.58', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
    { img: require('../Images/card-3.webp'), title: 'CLASSIC CHICKEN SANDWICH', price: '$2.35', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
    { img: require('../Images/card-4.webp'), title: 'PEPPERONI PIZZA', price: '$12.49', description: 'Quis pariatur atque est et. Molestiae qui ab...' },
    { img: require('../Images/card-5.webp'), title: 'SONIC BLAST', price: '$6.29', description: 'Vel nihil voluptas consequatur et laboriosam...' },
    { img: require('../Images/card-6.webp'), title: 'CLASSIC ROAST BEEF', price: '$12.49', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
    { img: require('../Images/card-7.webp'), title: 'CLASSIC ROAST BEEF', price: '$12.49', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
    { img: require('../Images/card-8.webp'), title: 'CLASSIC ROAST BEEF', price: '$12.49', description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  ];

  return (
    <>
<Navbar2/>

    {/* First bg-image */}
<Container  className='menubg  mt-1' >
  <h1 style={{fontSize:'2.5rem',fontWeight:"bold",textAlign:'center',color:'wheat'}}>MENU</h1>
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
</Container>



{/* Button multple */}
<Container fluid>
      <Row>
        <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'3.5rem',marginTop:'3rem'}}> POPULAR DISHES
        </h1>
        <Col className="text-center" style={{display:'flex',justifyContent:'space-evenly',marginTop:'3rem'}}>
          <Button variant="outline-danger" href="/">
            <FontAwesomeIcon icon={faBurger} /> BURGER
          </Button>
          <Button variant="outline-dark" href="/">
            <FontAwesomeIcon icon={faPizzaSlice} /> PIZZA
          </Button>
          <Button variant="outline-dark" href="/">
            <FontAwesomeIcon icon={faPieChart} /> SUSHI
          </Button>
          <Button variant="outline-dark" href="/">
            <FontAwesomeIcon icon={faHeart} /> SALADS
          </Button>
          <Button variant="outline-dark" href="/">
            <FontAwesomeIcon icon={faPizzaSlice} /> BURRITO
          </Button>
          <Button variant="outline-dark" href="/">
            <FontAwesomeIcon icon={faPizzaSlice} /> BEVERAGES
          </Button>
        </Col>
      </Row>
    </Container>



    <Container fluid >
      <Row>
        {products.map((product, index) => (
          <Col md={3} key={index} className="mt-5">
            <ProductCard imgSrc={product.img} title={product.title} price={product.price} description={product.description} />
          </Col>
        ))}
      </Row>
    </Container>
    {/* third image */}
    
{/* dont wala */}
<Container fluid style={{ backgroundColor: 'rgb(255, 253, 231)'}}>
      <Row className="align-items-center mt-4" >
       
       <Row>
        <Col xs={12} md={6}>
        <h6 style={{fontWeight:'bold',color:'red'}}>EXPLORE THE NEW TASTE </h6>
        <h1 style={{fontWeight:'bold' ,fontSize:'3.5rem'}}> WE LOVE TO SURPRISE YOU</h1>
        </Col>

        <Col xs={12} md={6}>
       <img src="" />
        </Col>
        
        </Row> 
        <Col xs={12} md={6}>
          <img src={require('../Images/Rectangle_528.webp')} alt="Food" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col xs={12} md={6}>
          <h5 style={{ fontWeight: 'bold' }}>
            BIG MAC
            <span style={{ color: 'red',marginLeft:'6rem' }}>$35.15</span>
   
          </h5>
          <p style={{ color: 'lightgray' }}>BURGER</p>

          <h5 style={{ fontWeight: 'bold' }}>
            CLASSIC ROAST BEEF
            <span style={{ color: 'red',marginLeft:'2rem' }}>$9.58 <br /></span>
          </h5>
          <p style={{ color: 'lightgray' }}>BURGER, PIZZA</p>


          <h5 style={{ fontWeight: 'bold' }}>
            CLASSIC CHICKEN SANDWICH
            <span style={{ color: 'red' ,marginLeft:'2rem'}}>$2.35 <br /></span>
          </h5>
          <p style={{ color: 'lightgray' }}>BURGER</p>


          <h5 style={{ fontWeight: 'bold' }}>
            PEPPERONI PIZZA
            <span style={{ color: 'red' ,marginLeft:'2rem'}}>$12.49 <br /></span>
          </h5>
          <p style={{ color: 'lightgray' }}>BURGERS, SALADS, SANDWICH</p>

          <h5 style={{ fontWeight: 'bold' }}>
            SONIC BLAST
            <span style={{ color: 'red',marginLeft:'2rem'}}>$12.49 <br /></span>
          </h5>
          <p style={{ color: 'lightgray' }}>BURGERS, SALADS, SANDWICH</p>

        </Col>
      </Row>
    </Container>

    <Container fluid className="mb-5" style={{ marginTop: '3rem', backgroundColor: 'rgb(255, 253, 231)' }}>

<Row className="mt-5 text-center">
  <Col md={4}>
    <img className="img-fluid mx-auto" style={{ objectFit: 'cover', height: '80px', backgroundColor: 'transparent' }} src={require('../Images/Screenshot_24-9-2024_165239_ap-fazfood.myshopify.com-removebg-preview (1).png')} alt="Quality Foods" />
    <h3>
      <span className="mx-3">QUALITY FOODS</span>
    </h3>
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur<br /> adipisicing
        elit, sed do eiusmod tempor incididunt <br />
        ut labore et dolore magna aliqua.
      </span>
    </p>
  </Col>

  <Col md={4}>
    <img className="img-fluid mx-auto" style={{ objectFit: 'cover', height: '80px' }} src={require('../Images/MENU4__2_-removebg-preview.png')} alt="Original Recipes" />
    <h3 className="mx-3">
      <span>ORIGINAL RECIPES</span>
    </h3>
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur <br />adipisicing
        elit, sed do eiusmod tempor incididunt <br />
        ut labore et dolore magna aliqua.
      </span>
    </p>
  </Col>

  <Col md={4}>
    <img style={{ objectFit: 'cover', height: '80px' }} className="img-fluid mx-auto" src={require('../Images/MENU4__3_-removebg-preview.png')} alt="Fast Delivery" />
    <h3>
      <span className="mx-3">FAST DELIVERY</span>
    </h3>
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
        elit, sed do eiusmod tempor incididunt <br />
        ut labore et dolore magna aliqua.
      </span>
    </p>
  </Col>
</Row>

{/* Second row */}
<Row style={{ marginTop: '3rem' }}>
  <Col md={6} className="custom-background d-flex flex-column justify-content-center align-items-start" style={{ fontWeight: 'bold' }}>
    <h1 className="mx-5" style={{ opacity: '1' }}>
      <span style={{ display: 'block', opacity: '1', fontWeight: 'bold', visibility: 'visible' }}>
        SUPER <br />
        DELICIOUS
      </span>
    </h1>
    <h6 className="mx-5">
      <span>
        CALL US NOW: <br /> <h5 style={{ color: 'red' }}>1-800-555-333</h5>
      </span>
    </h6>
    <Button variant="outline-success" className="button1 mx-5 overflow-button custom-button">
      ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </Col>

  <Col md={6} className="d-flex flex-column justify-content-center align-items-start background-image" style={{ fontWeight: 'bold' }}>
    <h1 className="mx-3" style={{ opacity: '1' }}>
      <span style={{ color: 'white', display: 'block', fontWeight: 'bold', opacity: '1', visibility: 'visible' }}>
        30 MINUTES <br />
        DELIVERY!
      </span>
    </h1>
    <p className="mx-3">
      <span style={{ color: 'white' }}>
        If you’re having a meeting, working late <br />
        at night and need an extra push.
      </span>
    </p>
    <Button variant="outline-light" className="button1 mx-5 overflow-button custom-button">
      MAKE AN ORDER <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </Col>
</Row>
</Container>

{/* Email wala */  }

<hr/>
<Container fluid >
<div className="marquee">
            <div className="marquee-inner">
            <h1 style={{fontWeight:"bold",fontSize:'6rem'}}> • SUBSCRIBE • FOLLOW • NEWSLETTER
   • SUBSCRIBE • FOLLOW • NEWSLETTER
   </h1>    
            </div>
        </div>
<Row className="text-center" style={{ marginTop: '3rem' ,marginBottom:'15rem'}}>
                <Col className="devesh d-flex flex-column align-items-center" style={{ padding: '17rem' }}>
                    <h1 style={{ color: 'black' }}>
                        <span style={{ opacity: '1',fontWeight:"bold", visibility: 'visible',fontSize:'3.5rem' }}>
                            JOIN FOR HOT OFFERS
                        </span>
                    </h1>
                    <p style={{ color: 'black' }}>
                        <span style={{ opacity: '1', visibility: 'visible' }}>
                            If we go all out... We do it well! Subscribe to the <br /> newsletter to get the most exclusive promos.
                        </span>
                    </p>
                    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
                        <div className="mb-4" style={{ width: '300px' }}>
                            {/* <label style={{ color: 'black' }} htmlFor="exampleFormControlInput1" className="form-label">
                                Email address
                            </label> */}
                            <input style={{height:'4rem',width:'19rem',marginTop:'1rem'}}
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <Button variant="success" type="submit" className="button1 ms-2">
                            Subscribe <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container> 
      

</>

  );
};

export default MENUBar;
