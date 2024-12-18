import ContributorDetails from "@/components/people/contributor-details";

export default async function ContributorDetailsPage({ params }: { params: Promise<{ slug: string; }>}) {
    const slug = (await params).slug;

    return (
        <section className="pt-5 lg:pt-14 2xl:pt-20">
            <ContributorDetails slug={slug} />
        </section>
    )
}