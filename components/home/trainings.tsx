import Image from "next/image";

import { TRAININGS_POINTS } from "@/constants/trainings";

const Trainings: React.FC = () => {
    return (
        <section className="px-5 py-12 md:px-10 lg:py-20 2xl:px-52 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex justify-center">
                <div>
                    <Image src='/images/home-trainings.png' width={600} height={600} alt="Transnational Law Academy Training" />
                </div>
            </div>
            <div>
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Trainings</h1>
                <ul className="text-xl flex flex-col gap-5">
                    {
                        TRAININGS_POINTS.map((point, index) => (
                            <li
                                key={`point_${index}`}
                                className={`p-5 rounded-2xl border-2 border-solid ${index === 1 ? 'border-[#018CE1]' : index === 2 ? 'border-[#DA33BF]' : 'border-[#2D4DF2]'}`}>
                                <h2 className="text-xl 2xl:text-2xl font-bold text-[#6F85F6] mb-3 2xl:mb-5">{point.title}</h2>
                                <p className="text-lg xl:text-xl">{point.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Trainings;