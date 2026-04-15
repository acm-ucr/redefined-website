import OurMissionComponent from "@/components/home/ourMission";
import ForOurMembersComponent from "@/components/home/forOurMembers";
import Lander from "@/components/home/lander";
import JoinUs from "@/components/home/joinUs";
import UpcomingEvents from "@/components/home/upcomingEventsCard";
const Home = () => {
  return (
    <div className="bg-redefined-taupe flex flex-col">
      <Lander />
      <OurMissionComponent />
      <ForOurMembersComponent />
      <JoinUs />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
