import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container pt-5 pb-3">
            <div className="row contact-area">
                <div className="col-md-6">
                    <h2 className="py-4 brand-text brand-primary">Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6">
                    <form className="contactForm">
                        <div className="form-group">
                            <input type="email" className="form-control" id="contactEmail" name="email" placeholder="Your Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="contactName" name="name" placeholder="Your Name/Company Name" />
                        </div>
                        <div className="form-group">
                            <textarea rows="8" type="email" className="form-control" id="details" name="details" placeholder="Project Details"></textarea>
                        </div>
                        <button type="submit" className="btn brand-btn">Submit</button>
                    </form>
                </div>
            </div>
            
            <p className="text-center  mt-5 pt-5">Copyright Abu Hasan Rumi 2020</p>
        </div>
    );
};

export default Contact;