import { OURS } from "@/models/ours";

const OurPrivileges: React.FC = () => {
    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 bg-[#F7F7F7]">
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-3 2xl:mb-10">
                {
                    OURS.map((event, index) => (
                        <li key={`our_${index}`}>
                            <h2 className="text-[#6F85F6] text-xl 2xl:text-2xl font-bold mb-3 2xl:mb-6">{event.title}</h2>
                            <p className="text-lg xl:text-xl">{event.description}</p>
                        </li>
                    ))
                }
            </ul>
            <div>
                <h2 className="text-[#6F85F6] text-xl 2xl:text-2xl font-bold mb-3 2xl:mb-6">Our Values</h2>
                <p className="text-lg xl:text-xl">
                    - Excellence: Committed to the highest standards in education and research.<br />
                    - Integrity: Uploading the principles of honesty, transparency, and ethical behavior.<br />
                    - Innovation: Continuously evolving to meet the changing needs of the legal profession.<br />
                    - Collaboration: Fostering a community of learning and cooperation among students, educators, and legal professionals.
                </p>
            </div>
        </section>
    )
}

export default OurPrivileges;