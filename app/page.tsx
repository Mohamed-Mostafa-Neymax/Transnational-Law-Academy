import Header from "@/components/home/header";
import Advantages from "@/components/home/advantages";
import Activities from "@/components/home/activities";
import Trainings from "@/components/home/trainings";
import Partnerships from "@/components/home/partnerships";
import Events from "@/components/home/events";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Advantages />
      <Activities />
      <Trainings />
      <Partnerships />
      <Events />
    </>
  );
}

export default HomePage;