'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LINKS } from "@/models/navbar";

const Navbar: React.FC = () => {
    const path = usePathname();
    console.log(path);

    return (
        <nav className="w-full flex justify-between items-center text-white font-bold px-80 fixed top-0 z-10 bg-transparent py-2">
            <div className="text-center flex flex-col items-center">
                <Image src='/images/logo.PNG' width={80} height={60} alt="Transnational Law Academy Logo" />
                <p>Transnational Law Academy</p>
            </div>
            <ul className="flex gap-8">
                {
                    LINKS.map((link, index) => (
                        <li
                            key={`link_${index}`}
                                className={`relative text-nowrap text-lg ${link.path === path ? 'text-[#6F85F6]' : 'text-white'}`}
                            style={{ textShadow: link.path === path ? '0px 0px 16px #6F85F6' : undefined }}>
                            <Link href={link.path}>{link.title}</Link>
                            {link.path === path && <div className={`absolute h-0.5 w-full bottom-0 animated-line bg-[#6F85F6]`}></div>}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;