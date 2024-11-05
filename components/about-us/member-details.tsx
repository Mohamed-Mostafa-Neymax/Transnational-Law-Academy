import Image from "next/image";

import { getMember } from "@/models/members";

const MemberDetails: React.FC<{ slug: string; }> = ({ slug }) => {
    const member = getMember(slug);

    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32">
            {
                member && (
                    <>
                        <h1 className="MontserratBold text-2xl lg:text-3xl 2xl:text-4xl mb-8 text-[#364383] text-center lg:text-start">{member.titleLong}</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex justify-center lg:justify-start">
                                <div>
                                    <Image src={member.imagePath} width={600} height={600} alt="Transnational Law Academy Training" className="rounded-lg" />
                                </div>
                            </div>
                            <div>
                                <p className="text-lg">{member.description}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default MemberDetails;