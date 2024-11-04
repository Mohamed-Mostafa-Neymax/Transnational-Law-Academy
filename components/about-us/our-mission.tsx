import Image from "next/image";

import { MISSION } from "@/models/ours";

const OurMission: React.FC = () => {
    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Our Mission</h1>
                <ul className="text-xl flex flex-col gap-5">
                    {
                        MISSION.map((point, index) => (
                            <li
                                key={`point_${index}`}
                                className={`flex items-start gap-4`}>
                                <div className={`px-3 py-1 rounded-full border-2 border-solid ${index === 1 ? 'border-[#018CE1]' : index === 2 ? 'border-[#DA33BF]' : 'border-[#2D4DF2]'}`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h2 className="text-xl 2xl:text-2xl font-bold text-[#6F85F6] mb-3 2xl:mb-5">{point.title}</h2>
                                    <p className="text-lg xl:text-xl">{point.description}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex justify-center">
                <div>
                    <Image src='/images/mission.png' width={600} height={600} alt="Transnational Law Academy Training" />
                </div>
            </div>
        </section>
    )
}

export default OurMission;