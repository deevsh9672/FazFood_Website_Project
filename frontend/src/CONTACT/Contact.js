import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'
// const handleShowCart = () => setShowCart(true);

const Contact = () => {
    return (
        <div className="container-fluid">
            {/* Header Section */}
            {/* Uncomment if you want to use a header background */}
            <div className=" c1 text-light rounded-4 d-flex flex-column py-4 align-items-center" >
                <h1>Contacts</h1>
                <p className="breadcrumb-item">
                    <a href="/">Home</a>
                    <span className="text-white"> / Contact</span>
                </p>
            </div>
            
            <div className="row">
                {/* Left Column: Contact Information */}
                <div className="col-xl-6">
                    <h2 className="fw-bold mt-5">Send a message</h2>
                    <p>Just fill out the form here and we'll get back to you as soon as possible.</p>
                    <h2>Theme Xtra</h2>
                    <p>Have a question? Give us a call or fill out the contact form. We’d love to hear from you.</p>
                    <div className="address">
                        <p>123 Sky Tower, West 21st Street, Suite 721, NY</p>
                        <p>+844 123 456 789</p>
                        <p>sale@yourexample.com</p>
                        <p><a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a></p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.712179268532!2d75.76861991083985!3d26.853020999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d0abb464cf:0x43440aa416c9fdaf!2sWorld%20Trade%20Park!5e0!3m2!1sen!2sin!4v1728363539877!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>      
                </div>

                {/* Right Column: Contact Form */}
                <div className="col-xl-6">
                    <form action="#" method="post">
                        <div className="d-xl-flex mt-5 gap-5">
                            <input className="form-control my-4" type="text" placeholder="Name" required />
                            <input className="form-control my-4" type="email" name="email" placeholder="Email" required />
                        </div>
                        <input className="form-control mb-4" type="tel" name="phone" placeholder="Phone Number" />
                        <textarea className="form-control mb-4" name="message" cols="30" rows="8" placeholder="Comment" required></textarea>
                        <button className="btn btn-success my-5" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
