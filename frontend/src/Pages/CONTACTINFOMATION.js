import backgroundImage from '../Images/menubg1.webp'; // Import the image
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Navbar2 from '../NavBar/Navbar';
import Footer1 from '../Footer/Footer';
function ContactInforamtion(){
    return(
        <>
        <Navbar2/>
           <Container
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '2rem',
                padding: '2rem',
                color: 'white', // If you want text to stand out against the background
                height: '12rem', 
                width:'70rem'// Adjust as needed
            }}
        >
            <h1 style={{textAlign:'center'}}> Contact Information </h1>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign:'center', padding: '1rem', borderRadius: '1rem' }}>
        <FontAwesomeIcon icon={faHome}  href='/' /> Home/LOCKBOOK
    </div>
        </Container>
<Container fluid style={{marginTop:'3rem'}}>
    <h6>Trade name: BRAINOS SOLUTION COMPANY LIMITED</h6>
    <h6>Phone number: +84987822810</h6>
    <h6>Whatsapp: +84987822810</h6>
    <h6>Email: leoclothescom@gmail.com</h6>
    <h6> 
        <span style={{fontWeight:'bold'}}>US Warehouse: </span>
        <span>  584 Castro Street #3053, San Francisco, CA 94114 
</span>
        </h6>
        <h6> 
        <span style={{fontWeight:'bold'}}>France: </span>
        <span>  Apt. 7 eme gauche - 127 avenue Aristide Briand 94230 Cachan, 1986-6179
</span>

        </h6>
        <h6> 
        <span style={{fontWeight:'bold'}}>Việt Nam: </span>
        <span> 81 Land 2 Dai Lo Thang Long Street - Me Tri Ward, Nam Tu Liem District, Hanoi
</span>
        </h6>
        <h6>VAT number: 0106120392</h6>

</Container>
<Footer1/>
        
        </>
    )
}
export default ContactInforamtion;