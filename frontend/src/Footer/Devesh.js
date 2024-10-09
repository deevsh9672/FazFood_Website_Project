import 'bootstrap/dist/css/bootstrap.min.css';
import './Devesh.css';
import React, { useState } from 'react';
import { Button, ButtonGroup, Modal,FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container,Form        } from 'react-bootstrap';
import Navbar2 from '../NavBar/Navbar';
import products from '../data';

const ProductCard = ({ imgSrc, title, price, description, onAddToCart }) => {
  return (
    <div className="card product-card text-center">
      {imgSrc && <img src={imgSrc} className="card-img-top img-fluid" alt={title} />}
      <div className="card-body d-flex justify-content-between align-items-center">
        <h3 className="card-title mb-0 me-4" style={{ color: '#333' }}>{title}</h3>
        <FontAwesomeIcon className="icon-container1 me-2" icon={faHeart} />
      </div>
      <div className="stars">★★★★★</div>
      <p className="description">{description}</p>
      <Row className="justify-content-between align-items-center">
        <Col style={{ color: 'red' }} xs="auto">
          <h3 className="card-title mb-0">{price}</h3>
        </Col>
        <Col xs="auto" className="me-2 icon-container">
          <Button variant='success' onClick={onAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const Devesh1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // const products = [
  //   { img: require('../Images/card-1.webp'), title: 'BIG MAC', price: 35.15, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  //   { img: require('../Images/card-2.webp'), title: 'CLASSIC ROAST BEEF', price: 9.58, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  //   { img: require('../Images/card-3.webp'), title: 'CLASSIC CHICKEN SANDWICH', price: 2.35, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  //   { img: require('../Images/card-4.webp'), title: 'PEPPERONI PIZZA', price: 12.49, description: 'Quis pariatur atque est et. Molestiae qui ab...' },
  //   { img: require('../Images/card-5.webp'), title: 'SONIC BLAST', price: 6.29, description: 'Vel nihil voluptas consequatur et laboriosam...' },
  //   { img: require('../Images/card-6.webp'), title: 'CLASSIC ROAST BEEF', price: 12.49, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  //   { img: require('../Images/card-7.webp'), title: 'CLASSIC ROAST BEEF', price: 12.49, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  //   { img: require('../Images/card-8.webp'), title: 'CLASSIC ROAST BEEF', price: 12.49, description: 'Omnis nesciunt perferendis saepe velit consectetur...' },
  // ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
      setCartItems(cartItems.map(item => 
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const incrementItem = (index) => {
    setCartItems(cartItems.map((cartItem, i) =>
      i === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const decrementItem = (index) => {
    setCartItems(cartItems.map((cartItem, i) =>
      i === index && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ));
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <Navbar2 />
      <Container className='menubg mt-1'>
        <h1 style={{ fontSize: '2.5rem', fontWeight: "bold", textAlign: 'center', color: 'wheat' }}>MENU</h1>
        <Button variant="link" style={{ fontSize: '1rem', fontWeight: 'bold', color: 'wheat' }} onClick={handleShowCart}>
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </Button>
      </Container>

      <Container fluid>
        <Row>
          {products.map((product, index) => (
            <Col md={3} key={index} className="mt-5">
              <ProductCard
                imgSrc={product.img}
                title={product.title}
                price={`$${product.price.toFixed(2)}`}
                description={product.description}
                onAddToCart={() => handleAddToCart(product)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                {/* Uncomment this line to display the item image */}
                {/* <img src={item.imgSrc} alt={item.title} style={{ width: '50px', height: '50px' }} /> */}
                <div>
                  <div>{item.title}</div>
                  <div>${item.price.toFixed(2)}</div>
                  <div>Total = ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <ButtonGroup aria-label="Quantity controls">
                  <Button variant="outline-secondary" onClick={() => decrementItem(index)}>-</Button>
                  <span className="px-3">{item.quantity}</span>
                  <Button variant="outline-secondary" onClick={() => incrementItem(index)}>+</Button>
                </ButtonGroup>
                <Button variant="danger" onClick={() => handleRemoveFromCart(index)}>Remove</Button>
              </li>
            ))}
          </ul>
        )}
        
        <ul>
          <li>
            <h5>Order Special Instructions</h5>
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Comments" style={{ height: '100px' }} />
            </FloatingLabel>
          </li>

          <li>
            <h6>Get Shipping Estimate</h6>
            <h5>Country</h5>
            <Form.Select aria-label="Select country">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              {/* Add more countries as needed */}
            </Form.Select>

            <Form.Group className="mb-3" controlId="zipCodeInput">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zip Code" />
            </Form.Group>

            <Button variant="success">ESTIMATE</Button>
          </li>
        </ul>

        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree to the <a href="/term&conditon">terms and conditions</a>
          </label>
          <br />
          <Button 
            variant="outline-success"
            disabled={!isChecked} 
            // onClick={() => alert("Button clicked!")}
          >
            CHECK OUT
          </Button>
        </div>

        <h5>Total: <span style={{ color: 'red', fontWeight: 'bold' }}>${totalAmount}</span></h5>
        <p>Taxes and shipping calculated at checkout    </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCart}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert('Proceed to checkout!')}>Checkout</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Devesh1;
