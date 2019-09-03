import React from "react";

import "./hero.styles.scss";

const Hero = ({ background, title, subtitle, logo }) => (
  <div className="hero-with-navbar">
    <section className="hero is-success is-fullheight has-background">
      <img
        alt="desarrollo-de-negocios-lomas"
        className="hero-background is-transparent"
        src={background}
      />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          <img
            alt="desarrollo-de-negocios-lomas"
            src={logo}
          />
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
