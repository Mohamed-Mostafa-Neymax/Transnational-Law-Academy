'use client';
import { NEWS_List } from "@/constants/news";
import NewsDisplayed from "./news-displayed";
import NewsItem from "./news-item";
import { useState } from "react";

const News: React.FC = () => {
    const [selectedID, setSelectedID] = useState<number>(1);

    return (
        <section className="px-5 md:px-10 2xl:px-52 py-12 lg:py-20 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <NewsDisplayed id={selectedID} />
            <ul className="flex flex-col gap-2 max-h-[500px] overflow-x-auto">
                {
                    NEWS_List.map(item => (
                        <NewsItem
                            key={`news_${item.id}`}
                            {...item}
                            selectNews={id => setSelectedID(id)}
                            selectedID={selectedID} />
                    ))
                }
            </ul>
        </section>
    )
}

export default News;