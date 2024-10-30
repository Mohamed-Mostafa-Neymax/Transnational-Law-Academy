import { activityCards } from "@/models/activities";

const Activities: React.FC = () => {
    return (
        <section className="px-80 py-32 bg-[#694a481a]">
            <h1 className="text-4xl MontserratBold mb-10 text-[#694a48]">Activities and Projects</h1>
            <ul className="flex justify-between gap-10">
                {
                    activityCards.map((activity, index) => (
                        <li
                            key={`activity_${index}`}
                            className="border border-solid border-[EAEAEA] p-6 rounded-3xl"
                            style={{boxShadow: '0 6px 24px #00000014'}}>
                            <h2 className="text-lg font-bold text-[#583f3d] mb-3">{activity.title}</h2>
                            <p className="text-[#444444]">{activity.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Activities;