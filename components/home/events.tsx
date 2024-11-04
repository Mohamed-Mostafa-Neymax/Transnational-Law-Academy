import Image from "next/image";

import { EVENTS_POINTS } from "@/models/events";

const Events: React.FC = () => {
    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32">
            <h1 className="MontserratBold text-xl lg:text-3xl 2xl:text-5xl mb-8 2xl:mb-16 text-[#6F85F6]">Events and Conferences</h1>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {
                    EVENTS_POINTS.map((event, index) => (
                        <li key={`event_${index}`}>
                            <Image src={event.image} width={300} height={100} alt="Transnational Law Academy Event" className="mb-3" />
                            <h2 className="text-[#6F85F6] text-xl 2xl:text-2xl font-bold mb-3 2xl:mb-6">{event.title}</h2>
                            <p className="text-lg xl:text-xl">{event.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Events;