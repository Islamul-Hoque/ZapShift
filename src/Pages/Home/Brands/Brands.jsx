import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import randstad from '../../../assets/brands/randstad.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [ casio, amazon, moonstar, star,start_people, randstad,amazon_vector,star ]

const Brands = () => {
    return (
        <section>
            <h2 className='text-center mb-12 font-bold text-secondary text-[2rem]'>We've helped thousands of sales teams</h2>
            <Swiper 
            loop={true}  
            slidesPerView={4} 
            centeredSlides={true}   
            spaceBetween={30}  
            grabCursor={true}  
            autoplay={{   delay: 1000, disableOnInteraction: false,     }}  
            modules={[Autoplay]}  
            
            >
                {
                    brandLogos.map((logo, index )=> <SwiperSlide key={index}> <img src={logo} alt="" /> </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Brands;