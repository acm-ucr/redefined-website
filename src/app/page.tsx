import OurMissionComponent from "@/components/home/ourMission";
import ForOurMembersComponent from "@/components/home/forOurMembers";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <OurMissionComponent />
      <ForOurMembersComponent />
    </div>
  );
};

export default Home;
