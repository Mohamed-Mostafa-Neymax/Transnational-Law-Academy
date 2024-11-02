import Image from "next/image";

import { TRAININGS_POINTS } from "@/models/trainings";

const Trainings: React.FC = () => {
    return (
        <section className="px-80 py-32 grid grid-cols-2">
            <div>
                <Image src='/images/home-trainings.png' width={600} height={600} alt="Transnational Law Academy Training" />
            </div>
            <div>
                <h1 className="MontserratBold text-5xl mb-16 text-[#6F85F6]">Trainings</h1>
                <ul className="text-xl flex flex-col gap-5">
                    {
                        TRAININGS_POINTS.map((point, index) => (
                            <li
                                key={`point_${index}`}
                                className={`p-5 rounded-2xl border-2 border-solid ${index === 1 ? 'border-[#018CE1]' : index === 2 ? 'border-[#DA33BF]' : 'border-[#2D4DF2]'}`}>
                                <h2 className="text-2xl font-bold text-[#6F85F6] mb-5">{point.title}</h2>
                                <p>{point.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Trainings;