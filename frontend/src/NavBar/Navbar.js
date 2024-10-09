import {useState,React} from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, Navbar, Nav, NavDropdown, Offcanvas , Form, FormControl,DropdownButton,Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus, faPersonBiking, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Contact from '../CONTACT/Contact';
const Navbar2 = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <Navbar className=' bg-dark' expand="lg">

      <div className="container-fluid">
      <FontAwesomeIcon icon={faPhone } style={{color:'green',marginTop:'1rem'}} />  
    <p class="ms-3" className='text-light' style={{fontWeight:'bold'}}>24/7 Support center <br/><strong style={{color:'red'}}>+1 718-904-4450</strong></p>


        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">

        <Nav.Link className='text-light me-auto ' style={{marginLeft:'10rem'}}  as={Link} to="/">HOME</Nav.Link>

          <Nav.Link  className='text-light' as={Link} to="menu">MENU</Nav.Link>

          <NavDropdown class="light"  style={{display:'block',marginTop:'0px'}} title={<span style={{ color: 'lightgray' }}>PAGES</span>} id="pages-dropdown">  
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/fqas">FQA's</NavDropdown.Item>
              <NavDropdown.Item href="/dmca">DMCA</NavDropdown.Item>
              <NavDropdown.Item href="/lookbook">LOOKBOOK</NavDropdown.Item>
              <NavDropdown.Item href="/contactinfomation">ContactInformation</NavDropdown.Item>
              <NavDropdown.Item href="/privacy">Privacy </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown.Divider />
            <Navbar.Brand as={Link} to="/">
          <img src={require('../Images/logo_1.webp')} style={{width:'8rem',alignItems:'center'}}  alt="Logo" className="  d-inline-block align-text-top" />
        </Navbar.Brand>
        

            <NavDropdown className='light'title={<span style={{ color: 'lightgray' }}>SHOP</span>}id="shop-dropdown">
            <NavDropdown title="PRODUCT LAYOUT" id="PRODUCTLAYOUT-dropdown">
            <NavDropdown.Item href="/productclassics">PRODUCT CLASSIC</NavDropdown.Item>
            <NavDropdown.Item href="/productfixed">PRODUCT Scoroll Fixed</NavDropdown.Item>
            <NavDropdown.Item href="/productvideo">PRODUCT With Video</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">PRODUCT Upshell</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">PRODUCT Crosssel</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">SOLDOUT-IN COMING</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">COMING SOON..</NavDropdown.Item>


            <NavDropdown.Divider />



            </NavDropdown>
            <NavDropdown  title="COLLECTION LAYOUT" id="COLLECTIONLAYOUT-dropdown">
            <NavDropdown.Item href="/productclassics">Left Sidebar</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">Collection Top</NavDropdown.Item>
            <NavDropdown.Item href="/productclassics">List Collection</NavDropdown.Item>
           
            <NavDropdown.Divider />



            </NavDropdown>
            <NavDropdown  title="PRODUCT PAGE" id="PRODUCTPAGE-dropdown">
            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
            <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
            <NavDropdown.Item href="/checkout">Checkout</NavDropdown.Item>
            <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>

           
            <NavDropdown.Divider />



            </NavDropdown>
            
            </NavDropdown>
            <NavDropdown
      className='light'
      title={<span style={{ color: 'lightgray' }}>BLOG</span>}
      id="blog-dropdown"
    >            <NavDropdown.Divider />

<NavDropdown.Item href="/blogclassics">Blog-Classic</NavDropdown.Item>
<NavDropdown.Item href="/singlepost">Single Post</NavDropdown.Item>
<NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link className='text-light' as={Link} to="/contact">CONTACTS</Nav.Link>
          </Nav>

          {/* search bar */}
          <Button variant="button" className='text-light' onClick={handleShow}>
          <FontAwesomeIcon icon={faSearch} />Search

      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you looking for ?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <br/>

          </Form>




        </Offcanvas.Header>
        <Offcanvas.Body>
    <h5>POPULAR</h5>
    <h4>  
<a href=''>ALL Producct</a> <br/>
<a href=''>ALL COLLECTION</a> <br/>
<a href='/contact'>Contact</a> <br/>
<a href=''> Blog</a>
</h4>


<hr/>

<Offcanvas.Title>INFOMATION</Offcanvas.Title>
<a href='/contact'>Contact</a>
         
        </Offcanvas.Body>
      </Offcanvas>
        
        
      <Button variant="outline-danger" className="me-2" onClick={Contact}>
  <FontAwesomeIcon icon={faPersonBiking} /> ORDER NOW
</Button>
          <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title={<FontAwesomeIcon icon={faUser} />}
      className="me-2"
    >
      <Dropdown.Item href="/login">Login</Dropdown.Item>
      <Dropdown.Item href="/register">Register</Dropdown.Item>
      <Dropdown.Item href="/checkout">Checkput</Dropdown.Item>
      <Dropdown.Item href="/Compare">Compare(0)</Dropdown.Item>

    </DropdownButton>
          <Button variant="success">
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbar2;
