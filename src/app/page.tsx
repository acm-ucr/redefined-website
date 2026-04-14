import OurMissionComponent from "@/components/home/ourMission";
import ForOurMembersComponent from "@/components/home/forOurMembers";
import Lander from "@/components/home/lander";
import UpcomingEvents from "@/components/home/upcomingEventsCard";
const Home = () => {
  return (
    <div className="bg-redefined-taupe">
      <Lander />
      <OurMissionComponent />
      <ForOurMembersComponent />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
