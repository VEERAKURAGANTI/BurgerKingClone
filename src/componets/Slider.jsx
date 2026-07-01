import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import './Slider.css';

import 'swiper/css/navigation';   // optional: navigation arrows
import 'swiper/css/pagination';   // optional: pagination dots

import Slide1 from "../assets/slides/banner2.png";
import Slide2 from "../assets/slides/slide2.jpg";
import Slide3 from "../assets/slides/slide3.jpg";
import Slide4 from "../assets/slides/slide4.jpg";

export function Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                navigation={false} // optional: enable navigation arrows
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide"><img src={Slide1} alt="slide1" className="slides"/></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img src={Slide2} alt="slide2"className="slides" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img src={Slide3} alt="slide3" className="slides"/></SwiperSlide>
                <SwiperSlide className="swiper-slide"><img src={Slide4} alt="slide4" className="slides"/></SwiperSlide>
            </Swiper>
        </>
    );
}