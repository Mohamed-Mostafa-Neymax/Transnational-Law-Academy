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
        <section className="px-80 py-32 grid grid-cols-2">
            <div>
                <Image src='/images/about-us.png' width={600} height={600} alt="About Transnational Law Academy" />
            </div>
            <div>
                <h1 className="MontserratBold text-5xl mb-16 text-[#6F85F6]">We Are Ready To Help You To Get a Solution.</h1>
                <p className="text-xl mb-6">
                    With our rigorous curriculum, experienced faculty, and strong network of alumni, you’ll be prepared to tackle complex legal issues in various jurisdictions. Join us at Transnational Law Advisory Group Academy and elevate your legal studies to new heights.
                </p>
                <ul className="text-xl">
                    {
                        ADVANTAGES_POINTS.map((point, index) => (
                                <li key={`point_${index}`} className="mb-3">
                                    <span className="text-white text-lg font-bold bg-[#6F85F6] px-2 p-1 rounded-full">&#10003;</span> {point}</li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}

export default Advantages;