import OurMissionComponent from "@/components/home/ourMission";
import ForOurMembersComponent from "@/components/home/forOurMembers";
import Lander from "@/components/home/lander";
import JoinUs from "@/components/home/joinUs";
const Home = () => {
  return (
    <>
      <Lander />
      <OurMissionComponent />
      <ForOurMembersComponent />
      <JoinUs />
    </>
  );
};

export default Home;
