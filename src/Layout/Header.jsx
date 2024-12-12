import React, { useContext, useEffect, useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import './Header.css'
import { CardContext } from '../context/CardContext';
import logo from '../assets/logo.png'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    const { ItemAmount } = useContext(CardContext);

    return (
        <>
            <header className={isActive ? 'red' : 'blue'} id="navMenu">
                <div className="container">
                    <div className="row">
                        <div className="header" >
                            <NavLink to="/">
                                <div className="logo"><img src={logo} alt="logo" /></div>
                            </NavLink>
                            <NavLink to="/card">
                                <div className="navCard f-flex">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <p>{ItemAmount}</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header
