import { ACTIVITY_CARDS } from "@/models/activities";

const Activities: React.FC = () => {
    return (
        <section className="px-80 py-32 bg-[#694a481a]">
            <h1 className="MontserratBold text-5xl mb-16 text-[#6F85F6]">Activities and Projects</h1>
            <ul className="flex justify-between gap-10">
                {
                    ACTIVITY_CARDS.map((activity, index) => (
                        <li
                            key={`activity_${index}`}
                            className="border border-solid border-[EAEAEA] p-6 rounded-3xl"
                            style={{boxShadow: '0 6px 24px #00000014'}}>
                            <h2 className="text-2xl font-bold text-[#6F85F6] mb-5 min-h-16">{activity.title}</h2>
                            <p className="text-xl">{activity.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Activities;