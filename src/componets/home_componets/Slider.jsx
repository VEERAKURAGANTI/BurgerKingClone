import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import './Slider.css';

import 'swiper/css/navigation';   // optional: navigation arrows
import 'swiper/css/pagination';   // optional: pagination dots
 
import Slide1 from "../../assets/slides/banner1.png";
import Slide2 from "../../assets/slides/banner2.png";
import Slide3 from "../../assets/slides/banner3.png";
import Slide4 from "../../assets/slides/banner4.png";

export function Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                navigation={false} 
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
