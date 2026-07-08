import "./Header.css";
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import store from '../../assets/icons/store-icon.svg';
import storeActive from '../../assets/icons/dine-in-br.svg';

import deals from '../../assets/icons/deals-icon.svg';
import dealsActive from '../../assets/icons/offers-icon.svg';

import user from '../../assets/icons/user-icon.svg';
import userActive from '../../assets/icons/login-icon.svg';

import cart from '../../assets/icons/cart-icon.svg';
import cartActive from '../../assets/icons/cart-active.svg';
import search from '../../assets/icons/search-icon.svg';
import location from '../../assets/location.svg';

import { Toggle } from '../home_componets/Toggle';

export function Header() {
    return (
        <>
            <div className="header">
                <div className="user-choice" >
                    <NavLink className="logo" to="/">
                        <img src={logo} alt="logo" className="img-logo" width={79} height={79} />
                    </NavLink>
                    <Toggle />
                    <div className="header_devider"></div>
                    <NavLink className="user-input" to="/search-location">
                        <input type="text" placeholder="location" className="search-location" />
                        <img src={location} alt="search-icon" width={10} height={20} className="location-icon" />
                    </NavLink>
                </div>


                <nav className="nav-links">
                    <NavLink to="/nearby-store" className={({ isActive }) => isActive ? "nav-pages active-link" : "nav-pages"}>
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive ? storeActive : store}
                                    alt="store-icon"
                                />
                                NEARBY STORE
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/king-deals" className={({ isActive }) => isActive ? "nav-pages active-link" : "nav-pages"}>
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive ? dealsActive : deals}
                                    alt="king-deals-icon" />
                                    KING DEALS
                            </>
                        )}

                    </NavLink>
                    <NavLink to="/my-profile" className={({ isActive }) => isActive ? "nav-pages active-link" : "nav-pages"}>
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive ? userActive : user} 
                                    alt="profile-icon" /> 
                                    MY PROFILE
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-pages active-link" : "nav-pages"}>
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive? cartActive:cart}
                                    alt="cart-icon" />
                                    CART
                            </>
                        )}
                    </NavLink>
                </nav>

                <NavLink className="search-icon" to="/search" >
                    <img src={search} alt="search-icon" />
                </NavLink>

            </div>
        </>
    );
}
