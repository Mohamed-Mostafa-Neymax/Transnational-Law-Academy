import Image from "next/image";

import { EVENTS_POINTS } from "@/models/events";

const Events: React.FC = () => {
    return (
        <section className="px-80 py-32">
            <h1 className="MontserratBold text-5xl mb-16 text-[#6F85F6]">Activities and Projects</h1>
            <ul className="grid grid-cols-3 gap-10">
                {
                    EVENTS_POINTS.map((event, index) => (
                        <li key={`event_${index}`} className="relative">
                            <Image src={event.image} width={300} height={100} alt="Transnational Law Academy Event" className="mb-3" />
                            <h2 className="text-2xl font-bold text-[#6F85F6] mb-5 min-h-16">{event.title}</h2>
                            <p className="text-xl">{event.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Events;