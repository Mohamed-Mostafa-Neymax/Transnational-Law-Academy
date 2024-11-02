import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="text-white bg-[#202942]">
            <div className="px-80 py-32 grid grid-cols-4 gap-10">
                <div>
                    <div className="flex justify-center">
                        <Image src='/images/logo.PNG' width={180} height={80} alt="Transnational Law Academy Logo" />
                    </div>
                    <p>
                        We offer specialised training in transnational law and international relations. Join our program in International Law and the Settlement of Disputes, focusing on the role of international law in dispute resolution. Expand your knowledge in human rights, Islamic Finance, International Trade Law, and more. For inquiries, contact us today.
                    </p>
                </div>
                <div className="text-xl">
                    <h1 className="text-3xl mb-10">Contact us</h1>
                    <p>+447466383242</p>
                </div>
                <div className="text-xl">
                    <h1 className="text-3xl mb-10">Head Quater</h1>
                    <p>Office Address: 26-28 Standard Road, Unit 6 First Floor, London, United Kingdom, NW10 6EU</p>
                </div>
                <div className="text-xl">
                    <h1 className="text-3xl mb-10">Law Courses</h1>
                    <p>Contact Law</p>
                    <p>Construction Law</p>
                    <p>International Law</p>
                    <p>Human Rights Law</p>
                    <p>Islamic Finance Law</p>
                </div>
            </div>
            <div className="border-t px-80 py-5 border-solid border-white text-center">
                &copy; 2024 Transnational Law Academy All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;