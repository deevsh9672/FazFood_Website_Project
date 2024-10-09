import { Container, Row, Col } from "react-bootstrap";
import Footer1 from "../Footer/Footer";
import Navbar2 from "../NavBar/Navbar";

function Blog() {
    return (
        <>
        <Navbar2/>
        <h1 style={{fontWeight:'bold'}}>NEWS</h1>
            <Container>

                <Row>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc1.webp')} alt="Blog 1" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc2.webp')} alt="Blog 2" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc3.webp')} alt="Blog 3" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc4.webp')} alt="Blog 4" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc5.webp')} alt="Blog 5" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                    <Col xs={4}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc6.webp')} alt="Blog 6" />
                        <h2 style={{ fontWeight: 'bold' }}>FAST FOOD ADVENTURES: <br /> A CULINARY RUSH</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                <Col xs={6}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc7.webp')} alt="Blog 5" />
                        <h2 style={{ fontWeight: 'bold' }}>Fast Food Frenzy: A Taste <br/> of Convenience</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                    <Col xs={6}>
                        <img style={{ width: '20rem', height: '23rem', borderRadius: '2rem' }} src={require('../Images/bc8.webp')} alt="Blog 6" />
                        <h2 style={{ fontWeight: 'bold' }}>BITE-SIZED BLISS: THE  <br/>WORLD OF FAST FOOD</h2>
                        <p>November 20, 2023</p>
                        <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet <br />
                            eturpis varius per a augue magna hac. Nec hac et vestibulum <br />
                            duis a tincidunt per a aptent interdum purus feugiat a... 1 comment</p>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Blog;
