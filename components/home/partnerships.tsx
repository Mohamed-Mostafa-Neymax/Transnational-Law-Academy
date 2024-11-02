import { PARTNERSHIP_POINTS } from "@/models/partnerships";


const Partnerships: React.FC = () => {
    return (
        <section className="custom-bg" style={{backgroundImage: 'url(/images/partnership-bg.PNG)'}}>
            <div className="px-80 py-32 partnership-filter text-white">
                <h1 className="MontserratBold text-5xl mb-16">Partnerships and Collaborations</h1>
                <ul className="text-xl grid grid-cols-4 gap-10">
                    {
                        PARTNERSHIP_POINTS.map((point, index) => (
                            <li key={`point_${index}`}>
                                <div className="mb-3">{point.icon}</div>
                                <h2 className="text-2xl font-bold mb-6">{point.title}</h2>
                                <p>{point.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Partnerships;