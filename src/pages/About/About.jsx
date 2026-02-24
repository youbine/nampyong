import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="main_inner page_about">
      <div className="page_about_intro">
        <h2>about</h2>
        <div>
          <p>
            We are a technology company specializing in the development of high
            emissivity materials.
          </p>
          <p>
            We help your company save energy.
            <br /> We help your company improve combustion.
          </p>
        </div>
      </div>
      <div className="page_about_content-txt">
        <h2>awards</h2>
        <div>
          <p>
            Recognized at the highest level—inducted into the Space Technology
            Hall of Fame in 2021 alongside NASA innovations.
          </p>
          <p>
            The only NASA-derived technology proven to enhance heat transfer,
            cooling efficiency, thermal-shock resistance, and service life
            across a wide range of materials.
          </p>
          <p>
            Originally developed to protect human life and critical space
            equipment—ensuring safe re-entry and recovery without structural
            damage.
          </p>
        </div>
      </div>
      <div className="page_about_content-img">
        <img src="/images/about_awards.jpg" alt="Awards" />
      </div>
      <div className="page_about_content-img">
        <img src="/images/about_proven.jpg" alt="Proven Gains" />
      </div>
      <div className="page_about_content-txt">
        <h2>Proven Gains</h2>
        <div>
          <p>5–15% increases in production capacity</p>
          <p>5–12% reductions in fuel use</p>
          <p>Extended run lengths from annual to 30+ months</p>
          <p>Lower CO2 and NOx emissions - reduce carbon intensity</p>
          <p>Increased life of all substrates</p>
          <p>
            By raising surface emissivity, Emisshield improves heat flux,
            stabilizes combustion, and protects refractory and metal surfaces
            from creep, corrosion, and thermal shock.
          </p>
        </div>
      </div>
      <div className="page_about_content-txt">
        <h2>Customers</h2>
        <div>
          <p>Serving industrial markets across all sectors worldwide.</p>
          <ul className="page_about_customer-list">
            <li>
              <a href="#ARAMCO">ARAMCO</a>
            </li>
            <li>
              <a href="#SpaceX">SpaceX</a>
            </li>
            <li>
              <a href="#NASA">NASA</a>
            </li>
            <li>
              <a href="#General-Electric">General Electric</a>
            </li>
            <li>
              <a href="#Corning">Corning</a>
            </li>
            <li>
              <a href="#Exxon-Mobil">Exxon Mobil</a>
            </li>
            <li>
              <a href="#POSCO">POSCO</a>
            </li>
            <li>
              <a href="#Dongkuk-Steel">Dongkuk Steel</a>
            </li>
            <li>
              <a href="#KEPCO">KEPCO</a>
            </li>
            <li>
              <a href="#KOMIPO">KOMIPO</a>
            </li>
            <li>
              <a href="#Novelis">Novelis</a>
            </li>
            <li>
              <a href="#Nucor">Nucor</a>
            </li>
            <li>
              <a href="#Arcelor-Mittal">Arcelor Mittal</a>
            </li>
            <li>
              <a href="#KOBELCO">KOBELCO</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page_about_content-img">
        <img
          src="/images/about_customers.jpg"
          style={{ width: "60%" }}
          alt="customers"
        />
      </div>
    </div>
  );
};

export default About;
