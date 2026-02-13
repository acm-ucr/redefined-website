import OurMissionComponent from "@/components/home/ourMission";
import ForOurMembersComponent from "@/components/home/forOurMembers";
import Lander from "@/components/home/lander";
const Home = () => {
  return (
    <>
      <Lander />
      <OurMissionComponent />
      <ForOurMembersComponent />
    </>
  );
};

export default Home;
