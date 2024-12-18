import { PARTNERSHIP_POINTS } from "@/constants/partnerships";


const Partnerships: React.FC = () => {
    return (
        <section className="custom-bg" style={{backgroundImage: 'url(/images/partnership-bg.png)'}}>
            <div className="px-5 py-12 md:px-10 lg:py-20 2xl:px-52 2xl:py-32 partnership-filter text-white">
                <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16">Partnerships and Collaborations</h1>
                <ul className="text-xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        PARTNERSHIP_POINTS.map((point, index) => (
                            <li key={`point_${index}`}>
                                <div className="mb-3">{point.icon}</div>
                                <h2 className="text-xl 2xl:text-2xl font-bold mb-3 2xl:mb-6">{point.title}</h2>
                                <p className="text-lg xl:text-xl">{point.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Partnerships;