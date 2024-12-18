import WhoWeAre from "@/components/about-us/who-we-are";
import OurMission from "@/components/about-us/our-mission";
import OurPrivileges from "@/components/about-us/our-privileges";

const AboutUsPage: React.FC = () => {
    return (
        <section className="pt-5 lg:pt-14 2xl:pt-20">
            <WhoWeAre />
            <OurPrivileges />
            <OurMission />
        </section>
    );
}

export default AboutUsPage;