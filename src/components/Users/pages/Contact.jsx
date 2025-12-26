import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";
import MyBooks from './MyBooks';

const Contact = () => {
  return (
    <section className="new-contact-section">
      <div className="new-container">
        {/* Left Info Card */}
        <div className="contact-info-card">
          <h2>Let's Connect </h2>
          <p className="sub-text">
            Have questions or business inquiries? We're here to help.
          </p>

          <div className="info-item"><FaMapMarkerAlt /> Navsari, Gujarat, India</div>
          <div className="info-item"><FaPhoneAlt /> +91 98765 43210</div>
          <div className="info-item"><FaEnvelope /> MyBooks@gmail.com</div>
          <div className="info-item"><FaClock /> Mon - Sat: 9AM - 8PM</div>

          <div className="gradient-line"></div>
        </div>

        {/* Right Form Card */}
        <form className="contact-form-card">
          <h3>Send us a Message</h3>

          <div className="grid-2">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="grid-2">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Write your message..." rows="5"></textarea>

          <button className="send-btn">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
