import React, { useState, useEffect } from 'react'
import './Hero.css'
import '../../App.css'

import heroback from '../../Assets/video/hero-back-video.mp4'
import { heroimgs } from '../../Assets/images/heroimgs'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //Function to mov to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1) % heroimgs.length);
    };
    //Function to move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + heroimgs.length) % heroimgs.length);
    };
    useEffect(() => {
        const sliedInterval = setInterval(() => {
            nextSlide();
        }, 20000)

        return () => clearInterval(sliedInterval);
    }, []);

  return (
    <div className='hero'>
        <video class="video-background" autoPlay muted loop>
            <source src={heroback} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className='hero-container'>
            <div className='hero-left'>
                <h1>Public <br/>Advisors</h1>
                <p>
                    Vítejte v Public Advisors, vašem spolehlivém partnerovi 
                    pro zakládání firem, účetní operace a personální řešení. 
                    Nabízíme komplexní služby, které zahrnují vše od 
                    zakládání firem až po zajišťování víz a administrativních 
                    úkonů, čímž vám usnadňujeme podnikání. S Public Partners 
                    je vaše podnikání efektivnější, snadnější a připravené 
                    na růst.
                </p>
                <button>Rezervace</button>
            </div>
            <div className='hero-right'>
                <div className='slider'>
                    <button className='prev' onClick={prevSlide}>
                        &#10094;
                    </button>
                    <div className='slide-container'>
                        <img src={heroimgs[currentIndex]} alt={`slide ${currentIndex}`} className='slide'/>
                        <div className='slide-butt'>
                            <button onClick={() => setCurrentIndex(0)} className={`button${currentIndex === 0 ? "active" : ""}`}></button>
                            <button onClick={() => setCurrentIndex(1)} className={`button${currentIndex === 1 ? "active" : ""}`}></button>
                            <button onClick={() => setCurrentIndex(2)} className={`button${currentIndex === 2 ? "active" : ""}`}></button>
                            <button onClick={() => setCurrentIndex(3)} className={`button${currentIndex === 3 ? "active" : ""}`}></button>
                        </div>
                    </div>
                    <button className='next' onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
