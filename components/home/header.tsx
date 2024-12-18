'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

import { SLIDES } from '@/constants/header';

const Header: React.FC = () => {
    return (
        <header>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    SLIDES.map((slide, index) => (
                        <SwiperSlide key={`slide${index}`}>
                            <div
                                className='w-full h-[500px] lg:h-[850px] text-white custom-bg'
                                style={{ backgroundImage: 'url(/images/slide.png)' }}>
                                <div className='h-full w-full flex items-center partnership-filter'>
                                    <div className='px-16 lg:pl-24 2xl:pl-80'>
                                        <h1 className='text-4xl 2xl:text-7xl leading-normal MontserratBold mb-5 xl:mb-8'>{slide.title}</h1>
                                        <p className='lg:text-lg 2xl:text-3xl leading-normal mb-3'>{slide.description}</p>
                                        <div className='flex gap-5'>
                                            <Link
                                                href='/about-us'
                                                className='text-black text-nowrap bg-[#6F85F6] text-xs lg:text-lg 2xl:text-2xl font-bold p-6 rounded-[30px]'>Learn more</Link>
                                            <button
                                                type='button'
                                                className='hover:bg-[#6F85F6] text-nowrap hover:text-black transition-all duration-150 ease-in-out text-[#6F85F6] border-4 border-solid border-[#6F85F6] bg-black text-xs lg:text-lg 2xl:text-2xl font-bold rounded-[30px] p-5'>Get in Touch</button>
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