"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner_slider.css';

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 z-20 flex justify-center items-center'>
                <div className='px-4 space-y-4'>
                    <p className='text-[50px] md:text-[70px] leading-none xl:text-[100px] text-white text-center font-bold font-dancingscript'>
                        Florident
                    </p>
                    <p className='text-white text-center font-semibold text-[16px] md:text-xl  font-dancingscript'>
                        Maximize Performance, <br className='ml:hidden' /> Minimize Friction
                    </p>
                </div>
            </div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                loop={true}
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full h-[250px] lg:h-[400px] xl:h-[500px]">
                        <Image
                            src="https://i.ibb.co.com/g3n1DVw/slide-Img1.jpg"
                            alt="banner"
                            layout="fill"
                            objectFit="cover"
                            quality={90}
                            className='w-full h-full'
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-[250px] lg:h-[400px] xl:h-[500px]">
                        <Image
                            src="https://i.ibb.co.com/pzFV8Nf/slide-Img2.jpg"
                            alt="banner"
                            layout="fill"
                            objectFit="cover"
                            className='w-full h-full'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
