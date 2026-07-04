import { NavLink } from "react-router-dom";
import RightArrow from "../assets/right-arrow.svg";
import './OurMenu.css';

export function OurMenu() {
    return(
        <>
        <div className="our-menu">
         <div className="menu"><h2>our menu</h2></div>
         <NavLink className="see-products" to=''>see all <img src={RightArrow} alt="right-arrow"/></NavLink>
         
        </div>
        </>
    );
}