'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from 'react-icons/md';

import { LINKS } from "@/models/navbar";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [navHasBg, setNavHasBg] = useState<boolean>(false);
    const path = usePathname();

    function bgScrollHandler() {
        if (window.scrollY > 100)
            setNavHasBg(true);
        else
            setNavHasBg(false);
    };

    useEffect(() => {
        setIsMenuOpened(prevvState => false);
        if (path === '/')
            window.addEventListener('scroll', bgScrollHandler);
        return () => {
            window.removeEventListener('scroll', bgScrollHandler);
        };
    }, [path]);

    return (
        <>
            <nav className={
                `${navHasBg || path !== '/' ? 'bg-black' : 'bg-transparent'} 
            transition-all duration-500 ease-in-out w-full hidden lg:flex justify-between items-center font-bold px-5 lg:px-10 2xl:px-80 fixed top-0 z-10 py-2 text-white text-xs 2xl:text-lg`
            }>
                <div className={`flex flex-col items-center text-center`}>
                    <Image src='/images/logo.PNG' width={80} height={60} alt="Transnational Law Academy Logo" />
                    <p>Transnational Law Academy</p>
                </div>
                <ul className="flex gap-6">
                    {
                        LINKS.map((link, index) => (
                            <li
                                key={`link_${index}`}
                                className={`relative text-nowrap text-lg ${link.path === path && 'text-[#6F85F6]'}`}
                                style={{ textShadow: link.path === path ? '0px 0px 16px #6F85F6' : undefined }}>
                                <Link href={link.path}>{link.title}</Link>
                                {link.path === path && <div className={`absolute h-0.5 w-full bottom-0 animated-line bg-[#6F85F6]`}></div>}
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className={`flex lg:hidden bg-black text-white p-2 overflow-hidden ${isMenuOpened ? 'h-screen w-full' : 'h-14 w-14'} rounded-br-full fixed top-0 z-10 transition-all duration-300 ease-in-out`}>
                <MdOutlineMenu size={30} onClick={() => { setIsMenuOpened(prevState => !prevState) }} />
                <div className={`${isMenuOpened ? 'flex' : 'hidden'} flex-col items-center gap-10 w-full`}>
                    <div>
                        <Image src='/images/logo.PNG' width={80} height={60} alt="Transnational Law Academy Logo" />
                    </div>
                    <ul className={`flex flex-col items-center gap-3`}>
                        {
                            LINKS.map((link, index) => (
                                <li
                                    key={`mobile_link_${index}`}
                                    className={`relative text-nowrap text-lg ${link.path === path && 'text-[#6F85F6]'}`}
                                    style={{ textShadow: link.path === path ? '0px 0px 16px #6F85F6' : undefined }}>
                                    <Link href={link.path}>{link.title}</Link>
                                    {link.path === path && <div className={`absolute h-0.5 w-full bottom-0 animated-line bg-[#6F85F6]`}></div>}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;