import MenuItem1 from "../assets/menu-items/menu-item1.jpg";
import MenuItem2 from "../assets/menu-items/menu-item1.jpg";
import MenuItem3 from "../assets/menu-items/menu-item2.jpg";
import MenuItem4 from "../assets/menu-items/menu-item3.jpg";
import MenuItem5 from "../assets/menu-items/menu-item4.jpg";
import MenuItem6 from "../assets/menu-items/menu-item5.jpg";
import MenuItem7 from "../assets/menu-items/menu-item6.jpg";
import MenuItem8 from "../assets/menu-items/menu-item7.jpg";
import MenuItem9 from "../assets/menu-items/menu-item8.jpg";
import MenuItem10 from "../assets/menu-items/menu-item9.jpg";
import MenuItem11 from "../assets/menu-items/menu-item10.jpg";
import MenuItem12 from "../assets/menu-items/menu-item11.jpg";
import MenuItem13 from "../assets/menu-items/menu-item12.jpg";
import MenuItem14 from "../assets/menu-items/menu-item13.jpg";
import MenuItem15 from "../assets/menu-items/menu-item14.jpg";

import './SliderContainer.css';

export function SlideContainer() {
    return (
        <>         
        <div className="slide-container">
            <div className="menu-item"><img src={MenuItem1} alt="menu-item" /><p>Korean Spicy Fest S2</p></div>
            <div className="menu-item"><img src={MenuItem2} alt="menu-item"/><p>INDULGENT MEAL FOR 1</p></div>
            <div className="menu-item"><img src={MenuItem3} alt="menu-item"/><p>INDULGENT MEAL FOR 2</p></div>
            <div className="menu-item"><img src={MenuItem4} alt="menu-item"/><p>Whopper Deluxe (Reg. Size Bun)</p></div>
            <div className="menu-item"><img src={MenuItem5} alt="menu-item"/><p>Value Meals</p></div>
            <div className="menu-item"><img src={MenuItem6} alt="menu-item"/><p>Original Whopper (XL Size Bun)</p></div>
            <div className="menu-item"><img src={MenuItem7} alt="menu-item"/><p>Burgers & Wraps</p></div>
            <div className="menu-item"><img src={MenuItem8} alt="menu-item"/><p>Beverages</p></div>
            <div className="menu-item"><img src={MenuItem9} alt="menu-item"/><p>Crazy App Deals</p></div>
            <div className="menu-item"><img src={MenuItem10} alt="menu-item"/><p>2 for Offers</p></div>
            <div className="menu-item"><img src={MenuItem11} alt="menu-item"/><p>BK Cafe</p></div>
            <div className="menu-item"><img src={MenuItem12} alt="menu-item"/><p>New Premium Burgers</p></div>
            <div className="menu-item"><img src={MenuItem13} alt="menu-item"/><p>Kids Friendly Menu</p></div>
            <div className="menu-item"><img src={MenuItem14} alt="menu-item"/><p>Desserts</p></div>
            <div className="menu-item"><img src={MenuItem15} alt="menu-item"/><p>Snacks</p></div>
        </div>
        </>
    );
}