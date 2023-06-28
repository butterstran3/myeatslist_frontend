import React, { useEffect, useState } from "react";
import './nav.css';
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import logo from '../../assets/logo.svg';

const Nav = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const checkIsPhone = () => {
            if (window.innerWidth <= 1024) {
                setMobileActive(true);
            } else {
                setMobileActive(false);
            }
        };

        checkIsPhone();
        window.addEventListener('resize', checkIsPhone);
        
        return () => {
            window.removeEventListener('resize', checkIsPhone);
        };
    }, []);

    if (mobileActive && !mobileNav) {
        return (
            <nav className="mobile-nav_container">
                <div className="mobile-nav_contents">
                    <NavLink className="mobile-nav_content" to="/" end>
                        <img alt="logo" className="logo" src={logo}/>
                    </NavLink>
                </div>
                <div className="btn_container">
                    <button className="modal_btn" onClick={() => setMobileNav(!mobileNav)}><AiOutlineMenu /></button>
                </div>
            </nav>
        )
    } else if (mobileActive && mobileNav) {
        return (
            <div className="modal_container">
                <nav className="mobile-nav_container">
                    <div className="mobile-nav_contents">
                        <NavLink className="mobile-nav_content" to="/" onClick={() => setMobileNav(!mobileNav)} end>
                            <img alt="logo" className="logo" src={logo}/>
                        </NavLink>
                    </div>
                    <div className="btn_container">
                        <button className="modal_btn" onClick={() => setMobileNav(!mobileNav)}><RxCross1 /></button>
                    </div>
                </nav>
                <div className='mobile-pages_container'>
                    <div className="modal-nav_content">
                        <NavLink className="nav_content" to="/"  onClick={() => setMobileNav(!mobileNav)}>Home</NavLink>  
                    </div>
                    <div className='modal-nav_content'>
                        <NavLink className="nav_content" to="/form"  onClick={() => setMobileNav(!mobileNav)}>Form</NavLink>  
                    </div>
                </div>
            </div>
        )
        
    } else {
        return (
            <nav className="container nav_container">
                <div className="nav_logo">
                    <NavLink className="" to="/" end>
                        <img alt="logo" className="logo" src={logo}/>
                    </NavLink>
                </div>
                <div className="nav_contents">
                    <NavLink className="nav_content" to="/">Home</NavLink>
                    <NavLink className="nav_content" to="/form">Form</NavLink>
                </div>
            </nav>
        )
    };
};

export default Nav;