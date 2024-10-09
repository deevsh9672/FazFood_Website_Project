import { Container, Button } from "react-bootstrap";
import React from "react";
import Footer1 from "../Footer/Footer";
import Navbar2 from "../NavBar/Navbar";

function SingleBlog() {
  return (
    <>
    <Navbar2/>
    <Container>
      <h1 style={{ fontWeight: "bold" }}>
        FAST FOOD ADVENTURES: A CULINARY RUSH
      </h1>
      <img src={require("../Images/bs1.webp")} alt="Blog post" />
      <p>
        Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius
        per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a
        aptent interdum purus feugiat a id <br />
        aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui
        gravida justo.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco <br />
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat <br />
        cupidatat non proident sunt in culpa qui officia deserunt mollit anim id
        est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque <br />
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit <br />
        aspernatur aut odit aut fugit, sed quia conse.
      </p>
      <br />
      <br />
      <p>
        “Food for us comes from our relatives. Whether they have wings or fins
        or roots. That is how we consider food. Food has a culture. It has a
        history. It has relationships.”
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco <br />
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat <br />
        cupidatat non proident, sunt in culpa qui officia deserunt mollit.
      </p>
      <br />
      <br />
      <h4 style={{ fontWeight: "bold" }}>
        BENEFITS OF HEALTH AND SAFETY MEASURES:
      </h4>
      <br />
      <br />
      <p>
        Menu InnovationFast food chains are always looking for ways to innovate
        and offer new menu items. However, in a post-pandemic world, this has
        become even more important. <br />
        Many chains are introducing new menu items that cater to the needs of
        customers who are looking for healthier options or who have specific
        dietary requirements.
      </p>
      <br />
      <br />
      <img src={require("../Images/bs2.webp")} alt="Health and safety" />
      <br />
      <br />
      <p>Provides a safe and comfortable environment for customers and employees. By Fazfood</p>
      <br />
      <br />
      <p>
        In conclusion, the fast food industry is adapting to the post-pandemic
        world in a variety of ways. By implementing contactless payment options,
        relying on drive-thru and delivery <br />
        services, prioritizing health and safety measures, and innovating their
        menus, fast food chains are positioning themselves for success in a
        world that has been forever changed by <br />
        the pandemic.
      </p>
      <hr />

      <h3>Leave a Reply</h3>
      <p>Your email address will not be published. Required fields are marked *</p>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          NAME
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your name"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <Button variant="outline-success">SUBMIT</Button>
    </Container>
    <Footer1/>
    </>
  );
}

export default SingleBlog;
