import OurMissionComponent from "@/components/home/ourMission";
import Lander from "@/components/home/lander";
import JoinUs from "@/components/home/joinUs";

const Home = () => {
  return (
    <div className="h-screen w-screen grid-cols-1 grid-rows-3 flex-col items-center justify-center">
      <Lander />
      <JoinUs />
      <OurMissionComponent />
    </div>
  );
};

export default Home;
