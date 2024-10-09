import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar2 from '../NavBar/Navbar';

function ProductClassic() {
    return (
        <>
        <Navbar2/>
            <Container className="my-4">
                <Row>
                    {/* Image section, adjust column size for mobile and desktop */}
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <img
                            style={{ width: '100%' }} // Make image responsive
                            src={require('../Images/pc1.webp')}
                            alt="Product"
                        />
                    </Col>

                    {/* Product details section */}
                    <Col xs={12} md={6}>
                        <h1 style={{ fontWeight: 'bold' }}>DOUBLE-DOUBLE</h1>
                        <p style={{ color: '#cdcd2f' }}>★★★★★</p>
                        <hr />
                        <p>Labore sed et eius sed eveniet explicabo. Eum incidunt cum iusto suscipit. Non vitae voluptatem ut amet.</p>
                        <h4 style={{ fontWeight: 'bold', color: 'red' }}>$9.35</h4>
                        <p>Free global shipping on all orders</p>
                        <p>30 days easy returns if you change your mind</p>
                        <p>Order before noon for same day dispatch</p>
                        <hr />

                        {/* Quantity and action buttons */}
                        <div className="d-flex align-items-center mb-3">
                            <h4 style={{ fontWeight: 'bold' }} className="me-3">Quantity:</h4>
                            <Button variant="outline-success" className="me-2">
                                Add to Cart
                            </Button>
                            <Button variant="success" className="me-2">
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                            <Button variant="danger">
                                <FontAwesomeIcon icon={faRefresh} />
                            </Button>
                        </div>

                        <hr />
                        <h4><strong>SKU</strong>: FF0099</h4>
                        <h4><strong>Categories</strong>: BURGERS, Home page</h4>
                        <h4><strong>Tags</strong>: BURGERS</h4>
                        <h4><strong>SHARE</strong>:
                            <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 10px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 10px' }} />
                            <FontAwesomeIcon icon={faPinterest} style={{ margin: '0 10px' }} />
                            <FontAwesomeIcon icon={faLinkedin} style={{ margin: '0 10px' }} />
                        </h4>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <nav className="navbar bg-body-tertiary px-3 mb-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#des">DESCRIPTION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cus">CUSTOM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading3">REVIEW</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Scrollspy content */}
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" className="des scrollspy-example bg-body-tertiary p-3 rounded-2">
                        <p>Labore sed et eius sed eveniet explicabo. Eum incidunt cum iusto suscipit. Non vitae voluptatem ut amet.</p>
                        <p>Adipisci quod ullam hic rerum dolores. Asperiores odit quae cumque autem iste. Dignissimos maiores beatae soluta distinctio sequi.</p>
                        <p>Corporis laudantium similique rerum eligendi quam rerum. Ea minus laudantium dolores vitae veniam quo voluptas. Qui nihil porro debitis aspernatur repudiandae ut. Voluptatibus placeat iusto nisi tenetur reiciendis placeat qui enim.</p>
                        <br />
                        <p>Ducimus dolor quo rem numquam ipsa nihil. Possimus sed iure perferendis aut omnis ut. Eaque quibusdam odio voluptatum at eaque eaque.</p>
                        <br />
                        <p>Consequatur sint labore velit quas libero et asperiores blanditiis. Omnis aliquid vero nam consectetur fugiat.</p>

                        <OffcanvasSection title="Shipping" content="We deliver your parcel within 2–3 working days. As soon as your package has left our warehouse, you will receive a confirmation by email with tracking info." />
                        <OffcanvasSection title="Warranty" content="We provide a 2-year limited warranty for all products. For defective products or issues, please contact us." />
                        <OffcanvasSection title="Secure Payment" content="Your payment info is processed securely. We do not store credit card details. We accept Visa, MasterCard, PayPal, and more." />

                        <hr />
                    </div>

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" className="cus scrollspy-example bg-body-tertiary p-3 rounded-2">
                        <p>By changing our most important processes and products, we have already made a big leap forward. This ranges from the increased use of more sustainable fibers to the use of more environmentally friendly printing processes to the development of efficient waste management in our value chain.</p>
                    </div>
                </Row>
            </Container>
        </>
    );
}

function OffcanvasSection({ title, content }) {
    return (
        <>
            <Button className="mb-2" data-bs-toggle="offcanvas" href={`#offcanvas-${title}`} aria-controls={`#offcanvas-${title}`}>
                {title}
            </Button>
            <div className="offcanvas offcanvas-start" id={`offcanvas-${title}`} tabIndex="-1">
                <div className="offcanvas-header">
                    <h5>{title}</h5>
                    <Button variant="close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                </div>
                <div className="offcanvas-body">
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}

export default ProductClassic;
