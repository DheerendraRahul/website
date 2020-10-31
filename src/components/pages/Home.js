import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../HeroSection.css';

function Home() {
  return (
   <>
    <div className='hero-container'>
    <Navbar />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <p>“WATER IS THE LIFEBLOOD OF OUR BODIES,<br/> OUR ECONOMY, OUR NATION & OUR WELL-BEING”</p>
      <p style={{fontSize: "15px"}}> – Stephen Johnson</p>
      <Footer />
    </div>
    </>
  );
}

export default Home;