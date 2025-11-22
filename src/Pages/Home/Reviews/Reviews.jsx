import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise).data

    return (
        <Swiper
            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                scale: 0.88,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{   delay: 1000, disableOnInteraction: false,   }}  
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
        {
            reviews.map(review => <SwiperSlide key={review.id}> <ReviewCard review={review}/> </SwiperSlide>)
        }
        
        
        </Swiper>
    );
};

export default Reviews;