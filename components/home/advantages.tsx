import Image from "next/image";

const ADVANTAGES_POINTS = [
    'Contract Law',
    'Construction Law',
    'International Law',
    'Human Rights Law',
    'Islamic Finance Law',
    'International Trade Law',
    'Intellectual Property Rights',
    'Alternative Dispute Resolution'
];

const Advantages: React.FC = () => {

    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
                <div>
                    <Image src='/images/about-us.png' width={600} height={600} alt="About Transnational Law Academy" />
                </div>
            </div>
            <div>
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">We Are Ready To Help You To Get a Solution.</h1>
                <p className="text-base 2xl:text-xl mb-4 2xl:mb-6">
                    With our rigorous curriculum, experienced faculty, and strong network of alumni, you’ll be prepared to tackle complex legal issues in various jurisdictions. Join us at Transnational Law Advisory Group Academy and elevate your legal studies to new heights.
                </p>
                <ul className="text-base 2xl:text-xl">
                    {
                        ADVANTAGES_POINTS.map((point, index) => (
                            <li key={`point_${index}`} className="mb-3">
                                <span className="text-white text-xs 2xl:text-lg font-bold bg-[#6F85F6] px-1 2xl:px-2 2xl:py-1 rounded-full">&#10003;</span> {point}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Advantages;