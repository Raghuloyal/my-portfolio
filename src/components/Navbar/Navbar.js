import React, { useEffect, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo_raghu.jpeg'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const offset = -250;  // Adjust this value based on your nav bar height

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            {/* <img src={logo} alt="" className='logo' /> */}
            <b className="brand-name">Raghubal</b>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={offset} duration={500} >Home</Link> </li>
                <li><Link to='testimonials' smooth={true} offset={offset} duration={500} >My Work</Link></li>
                <li><Link to='about' smooth={true} offset={offset} duration={500} >About</Link></li>                
                <li><button className='btn'><Link to='contact' smooth={true} offset={offset} duration={500} >Contact</Link></button></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar
