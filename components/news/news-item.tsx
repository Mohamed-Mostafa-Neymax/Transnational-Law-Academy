'use client';
import Image from "next/image";

const NewsItem: React.FC<{ id: number; title: string; description: string; date: Date; imageSrc: string; selectedID: number; selectNews: (id: number) => void; }> = ({
    id, title, description, date, imageSrc, selectedID, selectNews
}) => {

    return (
        <li
            className={`flex items-center gap-2 cursor-pointer ${selectedID === id ? 'bg-[#d7ddfa]' : 'bg-white'} text-left p-4 rounded-lg`}
            style={{ boxShadow: '0px 0px 10px 0px #0000000F' }}
            onClick={() => selectNews(id)}>
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="font-semibold MontserratBold mb-2">{title}</h1>
                    <p>{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
                </div>
                    <p className="text-xs text-[#74777E]">{date.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
            <div>
                <Image src={imageSrc} width={300} height={200} alt={title} className="rounded-lg" />
            </div>
        </li>
    )
}

export default NewsItem;