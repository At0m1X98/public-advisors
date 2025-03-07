import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import '../../App.css';
import logonoback from '../../Assets/logo/logonoback.png';

const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setNavBackground(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.scroll-section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // 60% of section must be visible to be active
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleScrollTo = (id) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className={`navbar ${navBackground ? 'navbar-scrolled' : ''}`}>
            <div className='nav-left'>
                <img src={logonoback} alt='logo' />
            </div>
            <div className='nav-right'>
                <ul>
                    <li 
                        className={activeSection === 'hero' ? 'active' : ''}
                        onClick={() => handleScrollTo('hero')}
                    >
                        O NÁS
                    </li>
                    <li 
                        className={activeSection === 'offer' ? 'active' : ''}
                        onClick={() => handleScrollTo('offer')}
                    >
                        SLUŽBY
                    </li>
                    <li 
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={() => handleScrollTo('contact')}
                    >
                        KONTAKT
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
