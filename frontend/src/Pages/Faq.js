import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Navbar2 from "../NavBar/Navbar";
import Footer1 from "../Footer/Footer";

function Fqa() {
    return (
        <>
        <Navbar2/>
            <Container>
                <h1>Help Center Fazfood</h1>
                <div class="dropdown " style={{marginRight:'59rem'}}>
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />   How much is shipping?

                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                            Standard Shipping: We charge items are $5.99 for the first item + $1.99 <br/>
                             for additional items shipped domestic and $6.99 for the first item + $1.99 per   <br/>
                              each additional product to the rest of the world.
                        </a></li>
                    </ul>
                </div>

                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                    <FontAwesomeIcon icon={faMessage} />   Can I deliver to multiple addresses?
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                            We do not offer shipping to multiple addresses for a single order. If you would like items delivered to multiple addresses, please place those orders separately.
                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />      Do you offer delivery to PO Boxes or Military APO/FPO addresses? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                        Yes, we can send shipments to PO Boxes and Military APO/FPO addresses. Orders shipped to APO addresses are done so via DHL or UPS, and then are turned over to USPS for final delivery<br/>
                         (through the military mail system). Shipments to APOs can take up to 45 additional days to arrive. Unfortunately, once the package enters the military mail system, tracking <br/>
                          ceases to update for military security reasons. This means that we no longer have visibility of your order and cannot provide tracking information.                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />    Will I be charged VAT taxes? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                        Items shipping internationally from the US are shipped DDU (Delivered Duty Unpaid) and we do not collect VAT (Value Added Taxes). All taxes, duties,  <br/>
                        and customs fees are the responsibility of the recipient of the package. Depending on the receiving country, your package may incur local customs or VAT charges. We recommend contacting your local customs office for more 
                        <br/> information regarding your country’s customs policies. Items fulfilled from the UK and EU are charged a 20% VAT rate.                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />    Where do I get tracking info? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                        An email with tracking details will be sent to you the moment your product is shipped out!
                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />      Do you alert us once our order ships? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                        Yes! An email will be sent to you with the tracking information once it ships out to you!
                        </a></li>
                    </ul>
                </div>


                <h1>Ordering</h1>
                <div class="dropdown " style={{marginRight:'59rem'}}>
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />   How much is shipping?

                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                            Standard Shipping: We charge items are $5.99 for the first item + $1.99 <br/>
                             for additional items shipped domestic and $6.99 for the first item + $1.99 per   <br/>
                              each additional product to the rest of the world.
                        </a></li>
                    </ul>
                </div>

                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                    <FontAwesomeIcon icon={faMessage} />        Can I deliver to multiple addresses?
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                            We do not offer shipping to multiple addresses for a single order. If you would like items delivered to multiple addresses, please place those orders separately.
                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Do you offer delivery to PO Boxes or Military APO/FPO addresses? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                        Yes, we can send shipments to PO Boxes and Military APO/FPO addresses. Orders shipped to APO addresses are done so via DHL or UPS, and then are turned over to USPS for final delivery<br/>
                         (through the military mail system). Shipments to APOs can take up to 45 additional days to arrive. Unfortunately, once the package enters the military mail system, tracking <br/>
                          ceases to update for military security reasons. This means that we no longer have visibility of your order and cannot provide tracking information.                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />     Will I be charged VAT taxes? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >

                        Items shipping internationally from the US are shipped DDU (Delivered Duty Unpaid) and we do not collect VAT (Value Added Taxes). All taxes, duties,  <br/>
                        and customs fees are the responsibility of the recipient of the package. Depending on the receiving country, your package may incur local customs or VAT charges. We recommend contacting your local customs office for more 
                        <br/> information regarding your country’s customs policies. Items fulfilled from the UK and EU are charged a 20% VAT rate.                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />     Where do I get tracking info? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                        An email with tracking details will be sent to you the moment your product is shipped out!
                        </a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faMessage} />     Do you alert us once our order ships? 
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" >



                        Yes! An email will be sent to you with the tracking information once it ships out to you!
                        </a></li>
                    </ul>
                </div>

            </Container>
            <Footer1/>

        </>
    )
}
export default Fqa;