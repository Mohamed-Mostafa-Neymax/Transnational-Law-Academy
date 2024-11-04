import { getMember } from "@/models/members";

const MemberDetails: React.FC<{ slug: string; }> = ({ slug }) => {
    const member = getMember(slug);

    return (
        <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32 bg-[#F7F7F7]">
            <h1>{ slug }member PAGE</h1>
        </section>
    )
}

export default MemberDetails;