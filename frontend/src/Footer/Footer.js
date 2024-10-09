import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Assuming you will create this CSS file

function Footer1() {
    return (

        <footer className="footer bg-dark">
            <div className="footer-container">
                <div className="footer-col">
                    <img src="https://ap-fazfood.myshopify.com/cdn/shop/files/logo_3.png?v=1703491484&width=200" alt="Logo" />
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    <p>support@example.com</p>
                    <strong className="text-danger">+(084) 456-0789</strong>
                </div>

                <div className="footer-col">
                    <h5>Products</h5>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">BURGER</a></li>
                        <li><a href="#" className="footer-link">King Delight Products</a></li>
                        <li><a href="#" className="footer-link">Crispy Flavors</a></li>
                        <li><a href="#" className="footer-link">Breakfast Products</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h5>MENU</h5>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">KIDS MENU</a></li>
                        <li><a href="#" className="footer-link">DESSERTS</a></li>
                        <li><a href="#" className="footer-link">BEVERAGES</a></li>
                        <li><a href="#" className="footer-link">SAUCES</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h5>QUICK LINKS</h5>
                    <ul className="footer-links">
                        <li><a href="/home" className="footer-link">HOME</a></li>
                        <li><a href="/menu" className="footer-link">MENU</a></li>
                        <li><a href="/aboutus" className="footer-link">ABOUT US</a></li>
                        <li><a href="/contacts" className="footer-link">CONTACTS</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h5>OPENING HOURS</h5>
                    <p>Monday - Friday: <span className="text-danger">8am - 4pm</span></p>
                    <p>Saturday: <span className="text-danger">8am - 4pm Uhr</span></p>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
<hr/>
            <div className="footer-bottom">
                <p>Copyright © 2023 Fazfood. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer1;
