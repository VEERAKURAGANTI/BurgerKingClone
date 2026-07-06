import MenuItem1 from "../../assets/menu-items/menu-item1.jpg";
import MenuItem2 from "../../assets/menu-items/menu-item2.jpg";
import MenuItem3 from "../../assets/menu-items/menu-item2.jpg";
import MenuItem4 from "../../assets/menu-items/menu-item3.jpg";
import MenuItem5 from "../../assets/menu-items/menu-item4.jpg";
import MenuItem6 from "../../assets/menu-items/menu-item5.jpg";
import MenuItem7 from "../../assets/menu-items/menu-item6.jpg";
import MenuItem8 from "../../assets/menu-items/menu-item7.jpg";
import MenuItem9 from "../../assets/menu-items/menu-item8.jpg";
import MenuItem10 from "../../assets/menu-items/menu-item9.jpg";
import MenuItem11 from "../../assets/menu-items/menu-item10.jpg";
import MenuItem12 from "../../assets/menu-items/menu-item11.jpg";
import MenuItem13 from "../../assets/menu-items/menu-item12.jpg";
import MenuItem14 from "../../assets/menu-items/menu-item13.jpg";
import MenuItem15 from "../../assets/menu-items/menu-item14.jpg";


import './SlideContainer.css';
import { useRef, useState, useEffect } from "react";

const menuItems = [
    { image: MenuItem1, title: "Korean Spicy Fest S2" },
    { image: MenuItem2, title: "INDULGENT MEAL FOR 1" },
    { image: MenuItem3, title: "INDULGENT MEAL FOR 2" },
    { image: MenuItem4, title: "Whopper Deluxe (Reg. Size Bun)" },
    { image: MenuItem5, title: "Value Meals" },
    { image: MenuItem6, title: "Original Whopper (XL Size Bun)" },
    { image: MenuItem7, title: "Burgers & Wraps" },
    { image: MenuItem8, title: "Beverages" },
    { image: MenuItem9, title: "Crazy App Deals" },
    { image: MenuItem10, title: "2 for Offers" },
    { image: MenuItem11, title: "BK Cafe" },
    { image: MenuItem12, title: "New Premium Burgers" },
    { image: MenuItem13, title: "Kids Friendly Menu" },
    { image: MenuItem14, title: "Desserts" },
    { image: MenuItem15, title: "Snacks" }
];

export function SlideContainer() {

    const sliderRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        const slider = sliderRef.current;

        if (!slider) return;
        setIsAtStart(slider.scrollLeft <= 0);

        setIsAtEnd(
            slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1
        );

    };

    useEffect(() => {
        checkScrollPosition();
    }, []);


    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -700,
            behavior: 'smooth'
        });
        setTimeout(checkScrollPosition, 350);
    }
    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 700,
            behavior: 'smooth'
        });
        setTimeout(checkScrollPosition, 350);
    }

    return (

        <>
        <div className="menu-section">
            <div className="menu-wrapper">
                <button className="left-arrow" className={`left-arrow ${isAtStart ? "disabled" : ""}`}
                    onClick={scrollLeft}
                    disabled={isAtStart}>&#10094;</button>
                <div className="menu-container" ref={sliderRef} onScroll={checkScrollPosition}>
                    {menuItems.map((item, index) => (
                        <div className="menu-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <button className="right-arrow" className={`right-arrow ${isAtEnd ? "disabled" : ""}`}
                    onClick={scrollRight}
                    disabled={isAtEnd}>&#10095;</button>
            </div>
            </div>
        </>
    );
}