
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bannerImg1 from "../assets/Banner/banner7jpeg.jpeg"
import bannerImg2 from "../assets/Banner/banner6.jpg"
import bannerImg3 from "../assets/Banner/banner4.webp"





// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <>
            <Swiper className="my-5"
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={bannerImg1} 
                    text='Discover Your Dream Job'
                   
                    />

                  

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bannerImg2}
                    text='Elevate Your Career Path'
                    ></Slide>

                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bannerImg3}
                     text='Find Your Next Opportunity'
                    
                    ></Slide>

                </SwiperSlide>

            </Swiper>
        </>
    );
}
