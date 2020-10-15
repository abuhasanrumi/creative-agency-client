import React from 'react';

import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-4.png'
import carousel4 from '../../../images/carousel-5.png'
import carousel5 from '../../../images/carousel-1.png'
import './SliderArea.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const SliderArea = () => {

    return (

        <div className="container pt-5">
            <div className="pb-5">
                <h2 className="brand-text text-center py-5" style={{ color: 'white' }}>Here are some of <span className="brand-secondary">our works</span></h2>
                <div className="py-5">

                    <Swiper
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            992: {
                                width: 950,
                                slidesPerView: 3,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3,
                            },

                        }}
                        spaceBetween={35}

                        className="row"
                    >
                        <SwiperSlide><img className="d-block w-100 image-fluid" src={carousel1} alt="First slide" /></SwiperSlide>
                        <SwiperSlide><img className="d-block w-100 image-fluid" src={carousel2} alt="First slide" /></SwiperSlide>
                        <SwiperSlide><img className="d-block w-100 image-fluid" src={carousel3} alt="First slide" /></SwiperSlide>
                        <SwiperSlide><img className="d-block w-100 image-fluid" src={carousel4} alt="First slide" /></SwiperSlide>
                        <SwiperSlide><img className="d-block w-100 image-fluid" src={carousel5} alt="First slide" /></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default SliderArea;