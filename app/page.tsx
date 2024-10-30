import Activities from "@/components/home/activities";
import Events from "@/components/home/events";
import Header from "@/components/home/header";
import Partnerships from "@/components/home/partnerships";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Activities />
      <Partnerships />
      <Events />
    </>
  );
}

export default HomePage;