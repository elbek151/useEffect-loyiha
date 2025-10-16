import React from "react";
import "./elbek.css";

function Elbek() {
  return (
    <div className="container">
      <header className="header">
        <h1>Positivus</h1>
        <nav>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <button className="quote-btn">Request a quote</button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Navigating the digital landscape for success</h2>
          <p>
            Our digital marketing agency helps businesses grow online with
            strategic marketing, branding, and data-driven results.
          </p>
          <button className="consult-btn">Book a consultation</button>
        </div>
        <div className="hero-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8qrDxO2nvceN1u4fcWatwLDzvdQzIrKlAw&s" alt="" />
        </div>
      </section>

      <section className="brands">
        <p>
          <strong>Trusted by:</strong> Amazon, Dribbble, HubSpot, Notion,
          Netflix, Zoom
        </p>
      </section>

      <section className="services">
        <h3>Services</h3>
        <div className="cards">
          <div className="card green">Search engine optimization</div>
          <div className="card green">Pay-per-click advertising</div>
          <div className="card dark">Social Media Marketing</div>
          <div className="card light">Email Marketing</div>
          <div className="card green">Content Creation</div>
          <div className="card dark">Analytics and Tracking</div>
        </div>
      </section>

      <section className="cta">
        <h4>Let’s make things happen</h4>
        <p>
          Contact us today to learn more about our digital marketing services
          and how we can help your business grow.
        </p>
        <button className="proposal-btn">Get your free proposal</button>
      </section>
    </div>
  );
}

export default Elbek;
