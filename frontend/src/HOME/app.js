
// import './App.css';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Footer1 from './Footer/Footer.js';
// import PizzaPromotion from './HOME/dev.js';
// import Home from './HOME/Home.js';
// import Navbar2 from './NavBar/Navbar.js';
// import About1 from './Pages/About.js';
// import ContactInformation from './Pages/CONTACTINFOMATION.js';
// import Fqa from './Pages/Faq.js';
// import Grid1 from './Pages/Grid.js';
// import Test1 from './Pages/MENUBar.js';
// import Login from './CONTACT/Login.js';
// import Register from './CONTACT/Register.js';
// import CheckOut from './CONTACT/CheckOut.Contacts.js';
// import DMCA from './Pages/Dmca.js';
// import Blog from './BLOG/blog.js';
// import SingleBlog from './BLOG/SinglePage.js';
// import Card from './CARD/Card.js';
// import { useState } from 'react';
// import ProductClassic from './PRODUCT/Product-Classic.js';
// import ProductVideo from './PRODUCT/ProductWithVideo.js';
// import ProductFixed from './PRODUCT/ProduvtScrollFixed.js';

// function App() {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   const [warning, setWarning] = useState(false);

//   const addToCart = (item) => {
//     const isProductPresent = cart.some((product) => product.id === item.id);

//     if (isProductPresent) {
//       setWarning(true);
//       setTimeout(() => {
//         setWarning(false);
//       }, 3000);
//       return;
//     }

//     setCart([...cart, { ...item, amount: 1 }]);
//   };

//   const handleProductQuantity = (item, delta) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.map((product) => {
//         if (product.id === item.id) {
//           const newAmount = product.amount + delta;
//           return { ...product, amount: Math.max(newAmount, 1) };
//         }
//         return product;
//       });
//       return updatedCart;
//     });
//   };

//   return (
//     <>
//       <Header size={cart.length} setCart={setShow} />
//       {show ? (
//         <Devesh addToCart={addToCart} />
//       ) : (
//         <Cart
//           cart={cart}
//           setCart={setCart}
//           handleProductQuantity={handleProductQuantity}
//         />
//       )}
//       <div className='products'>
//         {Devesh.map((item) => (
//           <Card key={item.id} item={item} addToCart={addToCart} />
//         ))}
//       </div>
//       {warning && <div className="warning">Product is already in the cart!</div>}
//     </>
//     // <Router>
     
//     //   {/* <Navbar2 />  */}
//     //   <Routes>
//     //     <Route path="/" exact element={<PizzaPromotion />} />
//     //     <Route path="/register" element={<Register/>} />
//     //     <Route path="/login" element={<Login/>} />
//     //     <Route path="/dmca" element={<DMCA/>} />
//     //     <Route path="/Checkout" element={<CheckOut/>} />
//     //     <Route path="/grid1" element={<Grid1/>} />
//     //     <Route path="/fqas" element={<Fqa/>} />
//     //     <Route path="/contactinfomation" element={<ContactInformation/>} />
//     //     <Route path="/about" element={<About1/>} />
//     //     <Route path="/menu" element={<Test1/>} />
//     //     <Route path="/productclassics" element={<ProductClassic/>} />
//     //     <Route path="/productvideo" element={< ProductVideo/>} />
//     //     <Route path="/productfixed" element={<ProductFixed/>} />



//         //  <Route path="/pages" element={Pages} />
//         // <Route path="/shop" element={Shop} /> 
//       //   <Route path="/contact" element={<Login/>} />
//       //    <Route path="/blogclassics" element={<Blog />} />
//       //    <Route path="/singlepost" element={<SingleBlog/>}  />
//       // </Routes>


      

//   //  </Router>
//   );
// }

// export default App;

