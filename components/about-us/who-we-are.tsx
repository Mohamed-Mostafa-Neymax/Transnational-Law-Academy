import Image from "next/image";

const WhoWeAre: React.FC = () => {

    return (
        <section className="px-5 md:px-10 2xl:px-52 py-12 lg:py-20 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center relative toLeft">
                <div>
                    <Image src='/images/about-us.png' width={600} height={600} alt="About Transnational Law Academy" />
                </div>
            </div>
            <div className="relative toRight">
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Who we are?</h1>
                <p className="text-base 2xl:text-xl mb-4 2xl:mb-6">
                    Welcome to Transnational Law Academy, your trusted partner in transaction law. With a dedicated team of experienced legal professionals, we specialize in providing comprehensive legal services that cater to businesses and individuals.
                </p>
                <p className="text-base 2xl:text-xl mb-4 2xl:mb-6">
                    Our commitment to excellence, attention to detail, and proactive legal strategies set us apart in the legal landscape.
                </p>
                <p className="text-base 2xl:text-xl mb-4 2xl:mb-6">
                    Whether you are a multinational corporation, a small business, or an individual investor, Transnational Law Academy is here to provide the legal support you need to achieve your goals. Trust us to safeguard your interests and navigate the complexities of law with confidence and clarity.
                </p>
            </div>
        </section>
    )
}

export default WhoWeAre;