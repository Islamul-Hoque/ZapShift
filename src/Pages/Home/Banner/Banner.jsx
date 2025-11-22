import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
        <Carousel
  autoPlay={true}
  infiniteLoop={true}
  showThumbs={false}
  showStatus={false}
  showIndicators={true}
  interval={2000}
  transitionTime={600}
  stopOnHover={true}
  swipeable={true}
  emulateTouch={true}
  dynamicHeight={false}
  useKeyboardArrows={true}
  className="rounded-3xl overflow-hidden"
>

                <div className="rounded-3xl overflow-hidden">
                    <img src={bannerImg1} className="w-full h-full object-cover" />
                </div>

                <div className="rounded-3xl overflow-hidden">
                    <img src={bannerImg2} className="w-full h-full object-cover"/>
                </div>
                <div className="rounded-3xl overflow-hidden">
                    <img src={bannerImg3} className="w-full h-full object-cover"/>
                </div>
            </Carousel>
    );
};

export default Banner;