import Image from "next/image";
import { NEWS_List } from "@/constants/news";

const NewsDisplayed: React.FC<{ id: number; }> = ({ id }) => {
    const News = NEWS_List.filter(item => item.id === id)[0];

    return (
        <div>
            <h1 className="text-xl MontserratBold mb-3">{News.title}</h1>
            <p className="text-xs text-[#74777E] text-right">{News.date.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            <div className="flex justify-center">
                <div>
                    <Image src={News.imageSrc} width={800} height={600} alt={News.title} className="rounded-lg" />
                </div>
            </div>
            <p className="text-lg mt-3">{News.description}</p>
        </div>
    )
}

export default NewsDisplayed;