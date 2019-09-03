import React from "react";

import Hero from '../../components/hero/hero.component';

import HeroImage from "../../assets/hero-image.jpg";
import Logo from "../../assets/logo.png";

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <Hero logo={Logo} background={HeroImage} title='¡Próximamente!' subtitle='Estamos en construcción, contáctanos en contacto@dnlomas.mx.' />
  </div>
)

export default Homepage;