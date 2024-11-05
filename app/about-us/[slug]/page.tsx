import MemberDetails from "@/components/about-us/member-details";

export default async function MemberDetailsPage({ params }: { params: Promise<{ slug: string; }>}) {
    const slug = (await params).slug;

    return (
        <section className="pt-5 lg:pt-14 2xl:pt-20">
            <MemberDetails slug={slug} />
        </section>
    )
}