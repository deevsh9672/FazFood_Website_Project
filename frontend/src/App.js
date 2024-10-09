import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer1 from './Footer/Footer.js';
import PizzaPromotion from './HOME/dev.js';
import About1 from './Pages/About.js';
import ContactInformation from './Pages/CONTACTINFOMATION.js';
import Fqa from './Pages/Faq.js';
import Grid1 from './Pages/Grid.js';
import Test1 from './Pages/MENUBar.js';
import Login from './CONTACT/Login.js';
import Register from './CONTACT/Register.js';
import CheckOut from './CONTACT/CheckOut.Contacts.js';
import DMCA from './Pages/Dmca.js';
import Blog from './BLOG/blog.js';
import SingleBlog from './BLOG/SinglePage.js';
import ProductClassic from './PRODUCT/Product-Classic.js';
import ProductVideo from './PRODUCT/ProductWithVideo.js';
import ProductFixed from './PRODUCT/ProduvtScrollFixed.js';
import Devesh1 from './Footer/Devesh.js';
import Contact from './CONTACT/Contact.js';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar2 /> Uncomment to include Navbar */}
        <Routes>
          <Route path="/" element={<PizzaPromotion />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/grid1" element={<Grid1 />} />
          <Route path="/fqas" element={<Fqa />} />
          <Route path="/contactinfomation" element={<ContactInformation />} />
          <Route path="/about" element={<About1 />} />
          {/* <Route path="/menu" element={<Test1 />} /> */}
          <Route path="/productclassics" element={<ProductClassic />} />
          <Route path="/productvideo" element={<ProductVideo />} />
          <Route path="/productfixed" element={<ProductFixed />} />
          <Route path="/contact1" element={<Contact />} />

          <Route path="/contact" element={<Login />} />
          <Route path="/blogclassics" element={<Blog />} />
          <Route path="/singlepost" element={<SingleBlog />} />
          <Route path="/devesh" element={<Devesh1/>} />


        </Routes>
        <Footer1 /> 
      </Router>
    </>
  );
}

export default App;
