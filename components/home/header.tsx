'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { SLIDES } from '@/models/header';

const Header: React.FC = () => {
    return (
        <header>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    SLIDES.map((slide, index) => (
                        <SwiperSlide key={`slide${index}`}>
                            <div
                                className='w-full h-[850px] text-white  custom-bg'
                                style={{ backgroundImage: 'url(/images/slide.PNG)' }}>
                                <div className='h-full w-full flex items-center partnership-filter'>
                                    <div className='pl-80'>
                                        <h1 className='text-8xl leading-normal MontserratBold mb-5'>{slide.title}</h1>
                                        <p className='text-3xl leading-normal mb-3'>{slide.description}</p>
                                        <div className='flex gap-5'>
                                            <button type='button' className='text-black bg-[#6F85F6] text-xl font-bold p-5 rounded-[30px]'>Learn more</button>
                                            <button type='button' className='hover:bg-[#6F85F6] hover:text-black transition-all duration-150 ease-in-out text-[#6F85F6] border-4 border-solid border-[#6F85F6] bg-black text-xl font-bold rounded-[30px] p-5'>Get in Touch</button>
                                        </div>
                                    </div>
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