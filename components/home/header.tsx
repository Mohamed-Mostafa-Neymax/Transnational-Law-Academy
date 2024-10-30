'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { SLIDES } from '@/models/header';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    SLIDES.map((slide, index) => (
                        <SwiperSlide key={`slide${index}`}>
                            <div className='w-full flex justify-between items-center h-[680px] bg-slate-700 text-white text-center MontserratBold custom-gradient'>
                                <div className='pl-80'>
                                    <p className='max-w-[900px] text-4xl leading-normal'>{slide.title}</p>
                                </div>
                                <div>
                                    <Image src={slide.image} width={500} height={500} alt='Transnational Law Academy Slide.' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </header>
    )
}

export default Header;