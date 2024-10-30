'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "@/models/navbar";

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
                    Links.map((link, index) => (
                        <li
                            key={`link_${index}`}
                            className={`text-nowrap`}>
                            <Link href={link.path}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;