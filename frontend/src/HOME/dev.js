import React from 'react';
import Footer1 from '../Footer/Footer';
import Navbar2 from '../NavBar/Navbar.js';

import './dev.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const PizzaPromotion = () => {
    return (
        <>
<Navbar2/>

          
<Container fluid className="first1" style={{padding:'15rem'}}>
 
 <h3 style={{color:'yellow', fontSize:'1.3rem',fontWeight:'bold',marginLeft:'11rem'}}>SUPER DELICIONG CHEESE</h3>
 <h1>
  <span style={{fontWeight:'bold',fontSize:'5rem',marginLeft:'rem'}}>CHEESE <br/></span>
  <span style={{fontWeight:'bold',marginLeft:'2rem',fontSize:'5rem',}}> PIZZA LIMITED</span>
 </h1>
 <p> 
  <span style={{fontWeight:'bold',marginLeft:'5rem'}}>Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, <br/></span>
 <sapn  style={{fontWeight:'bold',marginLeft:'10rem'}}> 
   green olives, black olives, fresh tomatoes.</sapn>
  
 </p>
 <Button variant="outline-light" style={{marginLeft:'12rem'}} className="button1 overflow-button custom-button">
         ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
        </Button>
</Container>
         
         <Container>
            <h1 style={{fontWeight:'bold'}}>

GET <span style={{color:'red'}}> $5 OFF </span>JOIN faz LIFE REWARDS  <Button variant="outline-danger"  href='/register'>CREATE AN ACCOUNT</Button> <span style={{fontSize:'1.5rem'}}>OR  </span>  <a style={{color:'green',fontWeight:'bold', fontSize:'2rem'}} href="/login">SIGN IN</a> 
</h1>
         </Container>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-6 col-md-12 ps-0 pe-0 img">
                    <img 
                        sizes="(max-width: 740px) 80vw, (max-width: 999px) 60vw, 425px" 
                        alt="" 
                        height="760" 
                        width="960"
                        className="img-fluid"
                        src="https://ap-fazfood.myshopify.com/cdn/shop/files/i_cad251d6-3415-4274-ac7b-303ac5569823.jpg?v=1702605641%20960w" 
                        style={{ opacity: 1 }} 
                    />
                    <div className="contains">
                        <h4 className="text-warning" style={{fontWeight:'bold'}}>Limited Time ONLY</h4>
                        <h1 className="fs-1 text-white" style={{fontWeight:'bold'}}>LARGE PEPPERONI MAGNIFICO</h1>
                        <span className="fs-2 text-white" style={{fontWeight:'bold'}}>
                            ONLY <strong className="text-warning">$69.00</strong>
                   
                        </span>
                       <p>

                        <Button variant="outline-light" style={{marginLeft:'12rem'}} className="button1 overflow-button custom-button">
         ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        </p>

                    </div>
                </div>

                <div className="col-lg-6 ps-0 pe-0">
                    <div className="img2">
                        <img 
                            sizes="(max-width: 740px) 80vw, (max-width: 999px) 60vw, 425px" 
                            alt="" 
                            src="//ap-fazfood.myshopify.com/cdn/shop/files/i_1.jpg?v=1702605653 960w" 
                            height="380" 
                            width="960" 
                            className="img-fluid" 
                            style={{ opacity: 1 }} 
                        />
                        <div className="contains2" style={{fontSize:'2rem',fontWeight:'bold'}}>
                            <h1  style={{fontSize:'2rem',fontWeight:'bold'}}className="text-white m-0">large</h1>
                            <h1 style={{fontSize:'2rem',fontWeight:'bold'}} className="text-white">specialty pizzas</h1>
                            <strong style={{fontSize:'2rem',fontWeight:'bold'}} className="text-warning">$79.99</strong>
                            <h3 style={{fontSize:'1.5rem',fontWeight:'bold'}} className="text-white">use code: special3</h3>
                        </div>

                        <div className="col-12 p-0">
                            <img 
                                src="https://ap-fazfood.myshopify.com/cdn/shop/files/i_2.jpg?v=1702605671" 
                                alt="" 
                                className="img-fluid" 
                            />
                                                    <div className="contains2" style={{fontWeight:'bold'}}>

                            <p style={{fontWeight:'bold' ,color:'yellow' ,marginLeft:'-9rem'}}>UP TO FOUR TOPPINGS</p>
                            <h1  style={{fontWeight:'bold',marginLeft:'-9rem' ,color:'white' }}>DELLCIOUS PIZZA <br/> BOWELS</h1>
                            <h4  style={{fontWeight:'bold',marginLeft:'-9rem',color:'white'}}>
                                STATING AT
                            </h4>
                            <h4 style={{fontWeight:'bold',color:'yellow',marginLeft:'-9rem'}} >$21,99</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid m-0 p-0">
                <div className="img3">
                    <img 
                        src="https://ap-fazfood.myshopify.com/cdn/shop/files/i_3.jpg?v=1702628800" 
                        alt="" 
                        className="img-fluid" 
                    />
                    <div className="contains3" style={{fontWeight:'bold'}}>
                        <h3 className="text-warning" style={{marginLeft:"8rem",marginBottom:'-4rem'}} >40% off all premium pizzas</h3>
                        <h2 className="text-white" style={{fontWeight:"bold",fontSize:'5rem', marginTop:'5rem'}}>HAPPY SUNDAY</h2>
                        <p className="text-white">
                           <span style={{marginLeft:'6rem'}}>
                            we use only best ingredients for our unique recipes<br /> </span>
                          <span style={{marginLeft:'10rem'}}>
                           passed down through generations.  </span> 
                        </p>
                        <button className="button1 p-3 rounded-3" style={{marginLeft:'13rem'}}>
  ABOUT OUR FOOD <FontAwesomeIcon icon={faArrowRight} />
</button>                    </div>

                    <div className="img_bur">
                        <img 
                            src="https://ap-fazfood.myshopify.com/cdn/shop/files/image_259.png?v=1702628817" 
                            alt="" 
                            style={{ height: '450px', width: '416px' }} 
                        />
                    </div>
                </div>
            </div>
        </div>


{/* <div> */}
<Container fluid className="text-center" style={{ backgroundColor: 'rgb(255, 253, 231)' }}>
  <h5 className="text-danger"  style={{fontWeight:'bold',marginTop:'5rem',fontWeight:'bold'}}>SPECIAL DISHES</h5>
  <h1 style={{fontWeight:'bold'}}>FEAST YOUR EYES</h1>
  <p>
    You can find our whole menu on our website, filled with mouth-watering dishes<br />
    and catering for all kinds of different tastes!
  </p>

  <Container>
    <Row>
      <Col sm={6} md={4}>
        <img
          src="https://ap-fazfood.myshopify.com/cdn/shop/files/sthsn__Delicious_burger__on_isolated_pastel_color_easy_to_remo_1_1_3_b7c3463c-5333-41f8-8c9a-3f21d2f166b3.png?v=1702629800"
          alt="Mega Meat Pizza"
          className="img-fluid"
        />
        <h4 style={{fontWeight:'bold'}}>MEGA MEAT PIZZA</h4>
        <p className="text-center">Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!</p>
      </Col>

      <Col sm={6} md={4}>
        <img
          src="https://ap-fazfood.myshopify.com/cdn/shop/files/download_7a454e51-5b79-494c-8321-9e23c3bf4b90.png?v=1702689811"
          alt="Calabrese Pizza"
          className="img-fluid"
        />
        <h4 style={{fontWeight:'bold'}}>CALABRESE PIZZA</h4>
        <p>Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!</p>
      </Col>

      <Col sm={6} md={4}>
        <img
          src="https://ap-fazfood.myshopify.com/cdn/shop/files/download_03c87895-e1ac-4d7e-9558-1b8c633b02ca.png?v=1702689831"
          alt="Mushroom Truffle Pizza"
          className="img-fluid"
        />
        <h4 style={{fontWeight:'bold'}}>MEGA MEAT PIZZA</h4>
        <p>Indulge in our mouth-watering Signature Stacks - each layer packed with bold flavors and textures that will leave you craving for more!</p>
      </Col>
    </Row>
  </Container>
</Container>
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
<Container fluid style={{marginTop:'2rem'}}>
        <Row>
          <Col className="bgc ">
        <p style={{fontSize:'1.5rem',fontWeight:'bold',marginLeft:'5rem'}}><span>We guarantee</span></p>
            <h1 style={{fontSize:'5rem',fontWeight:'bold',color:'yellow',marginLeft:'5rem',marginRight:'3rem'}}> <span>30 MINUTES <br /> DELIVERY!</span></h1>
            <p style={{marginLeft:'5rem'}}><span>If you’re having a meeting, working late at night and need <br /> an extra push. Let us know and we will be there</span></p>
            <Button style={{marginLeft:'6rem'}} variant="outline-success" className="mx-5 button1 overflow-button custom-button">
              MAKE A ORDER
            </Button>
          </Col>
        </Row>
      </Container>
      <section className="highlights m-3">
    <div className="container-fluid">
        <div className="section_header d-flex flex-column align-items-center my-5 gap-4">
            <span className="text-danger fw-bold">THE MAGIC OF FLAVOR</span>
            <h1 className="fw-bold">EXPLORE THE NEW TASTE</h1>
            <small className="text-center w-75">
                Fasfood is a unique and independent quick service brand. Burgers and shakes are made pretty hot and tasty. The ultimate “melt in your mouth” experience.
            </small>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                <div className="banner_image">
                    <img className='w-100' src={require('../Images/br11.webp')} alt="Banner" />
                    <img className="lower-image" src={require("../Images/burger.webp")} alt="Burger" />
                </div>
                <div className="d-flex flex-column align-items-center text-center mt-4">
                    <h3 style={{fontWeight:'bold'}} className="mt-2">BURG'R COMBO</h3>
                    <small style={{fontWeight:'lighter'}}>
                        Indulge in our mouth-watering Signature Stacks. Each layer is packed with bold flavors and textures that will leave you craving for more!
                    </small>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="banner_image">
                    <img className='w-100' src={require('../Images/br2.webp')} alt="Banner" />
                    <img className="lower-image" src={require("../Images/Chicken.webp")} alt="Chicken" />
                </div>
                <div className="d-flex flex-column align-items-center text-center mt-4">
                    <h3 style={{fontWeight:'bold'}} className="mt-2">CHIK'R COMBO</h3>
                    <small style={{fontWeight:'lighter'}}>
                        Indulge in our mouth-watering Signature Stacks. Each layer is packed with bold flavors and textures that will leave you craving for more!
                    </small>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="banner_image">
                    <img className='w-100' src={require('../Images/br3.webp')} alt="Banner" />
                    <img className="lower-image" src={require("../Images/Burrito.webp")} alt="Burrito" />
                </div>
                <div className="d-flex flex-column align-items-center text-center mt-4">
                    <h3  style={{fontWeight:'bold'}} className="mt-2">TACO BELL</h3>
                    <small style={{fontWeight:'lighter'}}>
                        Indulge in our mouth-watering Signature Stacks. Each layer is packed with bold flavors and textures that will leave you craving for more!
                    </small>
                </div>
            </div>
        </div>
    </div>
</section>


 {/* <section className="quality" style={{ marginTop: '125px' }}> */}
     {/* <Container fluid>
         <Row className="back_img2">
             <Col md={6}>
                 <p className="text-danger">ALWAYS QUALITY</p>
                 <h1 className="fw-bolder">THE BEST QUALITY<br />YOUR HEALTH</h1>
                 <p className="text-secondary">Each freshly meal is perfectly sized for one person to enjoy at one sitting. Out fully<br />prepared meals are delivered fresh, and ready to eat in 3 minutes.</p>
                 
                 {[
                     { title: 'CHOOSE YOUR MEAL', subtitle: '80+ menus to choose item' },
                     { title: 'AUTHENTICAL PRODUCT', subtitle: 'Keep healthy and regulate immune system.' },
                 ].map((item, index) => (
                     <div className="d-flex align-items-center gap-3 mb-2" key={index}>
                         {/* <img className="rounded-circle"  */}
                             {/* src="https://ap-fazfood.myshopify.com/cdn/shop/files/Group_146_1.png?v=1704681212&width=900" 
                             width="150" height="150" alt="" />
                         <div className="d-flex flex-column">
                             <p className="mb-1"><strong>{item.title}</strong></p>
                             <span>{item.subtitle}</span>
                         </div>
                     </div>
                 ))}

                 <Button className=" mb-5 btn2 mt-5 p-4" variant="dark">ORDER NOW  <FontAwesomeIcon icon={faArrowRight} /> <i className="fa-sharp fa-solid fa-arrow-right"></i></Button>
             </Col>

             <Col md={6}>
<img  src={require('../Images/dev1.png')} />

             </Col>
         </Row>
     </Container> 
 </section>*/}

 {/* Additional Sections (e.g., Our Work, Blog, Footer) would follow a similar pattern */}
{/* </div> */}

{/* Email */}
<Container fluid className='puti'>
            <Row>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <img className='' style={{ width: '54rem',borderRadius:'1rem' }} src={require('../Images/puti2.webp')} alt="Healthy Food" />
                </Col>
                <Col xs={12} md={6} className="text-center text-md-left" style={{ color: 'black' }}>
                    <h1 style={{ fontWeight: 'bold', marginTop:'10rem' }}>OUR WORK <br /> PROVIDING <br /> HEALTHY FOODS</h1>
                    <p style={{marginLeft:'4rem'}}>
                        "Food for us comes from our relatives. Whether they <br />
                        have wings or fins or roots. That is how we consider food.<br/> Food has a culture. It has a history. It has relationships."
                    </p>
                    <Container className="mt-4">
                        <img src={require('../Images/bg_3.webp')} alt="Background 3" />
                        <img src={require('../Images/bg_4.webp')} alt="Background 4" />
                        <img src={require('../Images/bg_5.webp')} alt="Background 5" />
                        <h5 style={{fontWeight:'bold'}}>OUR HAPPY CUSTOMER</h5>
                        <p>
                            <FontAwesomeIcon style={{ color: 'green' }} icon={faStar} /> 4.9 (3.9k Reviews)
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>


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
                <Col className="devesh d-flex flex-column align-items-center" style={{ padding: '2rem' }}>
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

export default PizzaPromotion;
