import OfficialMembers from "@/components/about-us/officials";
import OurValues from "@/components/about-us/Our Values";
import OurApproach from "@/components/about-us/our-approach";
import OurLegacy from "@/components/about-us/our-legacy";
import OurMission from "@/components/about-us/our-mission";
import OurVision from "@/components/about-us/our-vision";

const AboutUsPage: React.FC = () => {
    return (
        <section className="py-5 lg:py-14 2xl:py-20">
            <OfficialMembers />
            <OurValues />
            <OurApproach />
            <OurLegacy />
            <OurMission />
            <OurVision />
        </section>
    );
}

export default AboutUsPage;