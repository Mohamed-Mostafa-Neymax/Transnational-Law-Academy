import Image from "next/image";

const Links = [
    { title: 'Home', path: '/'},
    { title: 'Our Founder', path: '/'},
    { title: 'Our People', path: '/'},
    { title: 'Law Courses', path: '/'},
    { title: 'News', path: '/'},
    { title: 'About Us', path: '/'},
    { title: 'Contact Us', path: '/'}
];

const Navbar: React.FC = () => {

    return (
        <nav className="flex justify-evenly items-center">
            <Image src='/images/logo.PNG' width={122} height={70} alt="Transnational Law Academy Logo" />
            <ul className="flex gap-8 ">
                {
                    Links.map((link, index) => (
                        <li key={`link_${index}`} className="text-nowrap">{ link.title }</li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;