import { ACTIVITY_CARDS } from "@/models/activities";

const Activities: React.FC = () => {
    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 bg-[#F7F7F7]">
            <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Activities and Projects</h1>
            <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    ACTIVITY_CARDS.map((activity, index) => (
                        <li
                            key={`activity_${index}`}
                            className="border border-solid border-[EAEAEA] p-6 rounded-3xl shadow-lg">
                            <h2 className="text-xl 2xl:text-2xl font-bold text-[#6F85F6] mb-3 2xl:mb-5 2xl:min-h-16">{activity.title}</h2>
                            <p className="text-lg xl:text-xl">{activity.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Activities;