'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

import { OFFICIAL_MEMBERS } from '@/models/members';

const OfficialMembers: React.FC = () => {
    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 bg-[#F7F7F7]">
            <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Official Members</h1>
            <Swiper
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    999: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {
                    OFFICIAL_MEMBERS.map(member => (
                        <SwiperSlide key={member.slug}>
                            <div className='mx-2 xl:mx-5'>
                                <div className='flex gap-5 border border-solid border-[#EAEAEA] p-6 rounded-3xl hover:shadow-lg hover:bg-[#ffffff80]'>
                                    <div>
                                        <Image
                                            src={member.imagePath}
                                            width={300}
                                            height={300}
                                            alt="A member of Transnational Law Academy"
                                            className='rounded-full' />
                                    </div>
                                    <div>
                                        <h1 className='text-lg 2xl:text-2xl font-bold text-[#6F85F6] mb-3 2xl:mb-5'>{member.titleShort}</h1>
                                        <p className='text-lg xl:text-xl mb-3 2xl:mb-5'>{member.description.substring(0, 100)}...</p>
                                        <Link href={`/about-us/${member.slug}`} className='text-lg xl:text-xl text-[#485fd3]'>
                                            <span>Read more</span> <FaArrowRightLong className='inline' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default OfficialMembers;