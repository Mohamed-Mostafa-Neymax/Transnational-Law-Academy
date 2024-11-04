import MemberDetails from "@/components/about-us/member-details";

const MemberDetailsPage: React.FC<{params: { 'member-slug': string; }}> = ({ params }) => {

    return (
        <section className="pt-5 lg:pt-14 2xl:pt-20">
            <section className="px-5 py-12 lg:px-10 lg:py-20 2xl:px-80 2xl:py-32">
                <h1 className="text-center text-[#6F85F6] text-xl MontserratBold">This Page is under development</h1>
            </section>
        </section>
        // <section className="pt-5 lg:pt-14 2xl:pt-20">
        //     <MemberDetails slug={params['member-slug']} />
        // </section>
    )
}

export default MemberDetailsPage;