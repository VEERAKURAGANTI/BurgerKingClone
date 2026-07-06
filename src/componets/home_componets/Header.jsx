import "./Header.css";
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import store from '../../assets/icons/store-icon.svg';
import deals from '../../assets/icons/deals-icon.svg';
import user from '../../assets/icons/user-icon.svg';
import cart from '../../assets/icons/cart-icon.svg';
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
                        <img src={location} alt="search-icon" width={10} height={20} className="location-icon"/>
                    </NavLink>
                </div>

                {/*pages link  */}
                <nav className="nav-links">
                    <NavLink className="nav-pages" to="/nearby-store">
                        <img src={store} alt="store-icon" className="store" /> NEARBY STORE
                    </NavLink>
                    <NavLink className="nav-pages" to="/king-deals">
                        <img src={deals} alt="king-deals-icon" /> KING DEALS
                    </NavLink>
                    <NavLink className="nav-pages" to="/my-profile">
                        <img src={user} alt="profile-icon" /> MY PROFILE
                    </NavLink>
                    <NavLink className="nav-pages" to="/cart">
                        <img src={cart} alt="cart-icon" /> CART
                    </NavLink>
                </nav>
                {/*search icon  */}
                <NavLink className="search-icon" to="/search">
                    <img src={search} alt="search-icon" />
                </NavLink>

            </div>
        </>
    );
}
