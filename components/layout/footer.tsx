import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="text-white bg-[#202942]">
            <div className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                <div>
                    <div className="flex justify-center mb-3 2xl:mb-6">
                        <Image src='/images/logo.PNG' width={180} height={80} alt="Transnational Law Academy Logo" />
                    </div>
                    <p className="text-lg xl:text-xl">
                        Join our program in International Law and the Settlement of Disputes, focusing on the role of international law in dispute resolution.
                    </p>
                </div>
                <div className="text-lg xl:text-xl">
                    <h1 className="text-3xl mb-3 2xl:mb-6 MontserratBold">Law Courses</h1>
                    <p>Contact Law</p>
                    <p>Construction Law</p>
                    <p>International Law</p>
                    <p>Human Rights Law</p>
                    <p>Islamic Finance Law</p>
                </div>
                <div className="text-lg xl:text-xl">
                    <h1 className="text-3xl mb-3 2xl:mb-6 MontserratBold">Head Quater</h1>
                    <p>Office Address: 26-28 Standard Road, Unit 6 First Floor, London, United Kingdom, NW10 6EU</p>
                </div>
                <div className="text-lg xl:text-xl">
                    <h1 className="text-3xl mb-3 2xl:mb-6 MontserratBold">Contact us</h1>
                    <p>+447466383242</p>
                </div>
            </div>
            <div className="border-t px-5 lg:px-10 2xl:px-80 py-5 border-solid border-white text-center text-lg xl:text-xl">
                &copy; 2024 Transnational Law Academy All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;