import React from 'react';
import '../App.css';

import Hero from '../Components/Hero/Hero';
import Offer from '../Components/Offer/Offer';
import Team from '../Components/Team/Team';
import Contact from '../Components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>  
        <div id='hero' className='scroll-section'><Hero/></div>
        <div id='offer' className='scroll-section'><Offer/></div>
        <div id='team' className='scroll-section'><Team/></div>
        <div id='contact' className='scroll-section'><Contact/></div>
      </div>
    </div>
  );
};

export default Home;
