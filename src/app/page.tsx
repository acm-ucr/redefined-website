import OurMissionComponent from "@/components/home/ourMission";
import Lander from "@/components/home/lander";

const Home = () => {
  return (
    <div className="className=flex w-screen items-center justify-center">
      <Lander />
      <OurMissionComponent />
    </div>
  );
};

export default Home;
