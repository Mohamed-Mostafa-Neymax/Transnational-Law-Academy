

import { OFFICIAL_MEMBERS } from "@/constants/members";
import ContributorItem from "./contributor-item";

const People: React.FC = () => {
    return (
        <section className="px-5 py-12 md:px-10 lg:py-20 2xl:px-52 2xl:py-32 grid grid-cols-[minmax(200px,_555px)] lg:grid-cols-[minmax(200px,_555px)_minmax(200px,_555px)] justify-center gap-6">
            {
                OFFICIAL_MEMBERS.map(member => (
                    <ContributorItem
                        key={member.slug}
                        imagePath={member.imagePath}
                        titleShort={member.titleShort}
                        description={member.description}
                        slug={member.slug} />
                ))
            }
        </section>
    )
}

export default People;