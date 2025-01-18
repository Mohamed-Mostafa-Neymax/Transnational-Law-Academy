'use client';

import Image from "next/image";
import { useRef } from "react";

const ContactUs: React.FC = () => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);

    function submitHandler(event: any) {
        event.preventDefault();
        if (nameInputRef.current && phoneInputRef.current && emailInputRef.current && messageInputRef.current) {
            const anchorTag = document.createElement('a');
            anchorTag.setAttribute('href', `mailto:dr.magedlawacademy@gmail.com?subject=A Website Visitor&body=Full Name%0D%0A${nameInputRef.current.value}%0D%0A%0D%0APhone%0D%0A${phoneInputRef.current.value}%0D%0A%0D%0AEmail%0D%0A${emailInputRef.current.value}%0D%0A%0D%0AMessage%0D%0A${messageInputRef.current.value}`);
            anchorTag.click();
            event.target.reset();
        }
    }

    return (
        <section className="px-5 py-12 md:px-10 lg:py-20 2xl:px-52 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative toLeft">
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Get in Touch</h1>
                <form onSubmit={submitHandler}>
                    <p className="mb-6 text-lg font-semibold">Fill up the form and we will get back to you within 24 Hours</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                        <div>
                            <label htmlFor="full-name" className="block text-lg">Full Name</label>
                            <input
                                type="text"
                                ref={nameInputRef}
                                id="full-name"
                                className="px-2 rounded-md border border-solid border-[#212529] outline-none w-full h-12 text-lg focus:border-[3px] focus:border-[#394ba7]" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-lg">Phone</label>
                            <input
                                type="text"
                                ref={phoneInputRef}
                                id="phone"
                                className="px-2 rounded-md border border-solid border-[#212529] outline-none w-full h-12 text-lg focus:border-[3px] focus:border-[#394ba7]" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-lg">Email</label>
                        <input
                            type="text"
                            ref={emailInputRef}
                            id="email"
                            className="px-2 rounded-md border border-solid border-[#212529] outline-none w-full h-12 text-lg focus:border-[3px] focus:border-[#394ba7]" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block text-lg">Message</label>
                        <textarea
                            id="message"
                            ref={messageInputRef}
                            cols={30}
                            rows={6}
                            className="resize-none p-2 rounded-md border border-solid border-[#212529] outline-none w-full text-lg focus:border-[3px] focus:border-[#394ba7]" />
                    </div>
                    <button
                        type="submit"
                        className={`hover:bg-[#6F85F6] text-nowrap hover:text-black transition-all duration-150 ease-in-out text-[#6F85F6] border-4 border-solid border-[#6F85F6] bg-black text-xs lg:text-lg font-bold rounded-[30px] p-5`}>Send Your Message</button>
                </form>
            </div>
            <div className="flex justify-center relative toRight">
                <div>
                    <Image src='/images/contact-us.jpg' width={600} height={600} alt="Transnational Law Academy Training" className="rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default ContactUs;