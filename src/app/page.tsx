import OurMissionComponent from "@/components/home/ourMission";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <OurMissionComponent>
        Our club is dedicated to educating students about street medicine and
        the needs of underserved communities. By working closely with our parent
        organization, we provide members not only with knowledge but also with
        hands-on fieldwork opportunities. Through service, learning, and
        real-world experience, we aim to help marginalized populations redefine
        their lives while inspiring students to grow in purpose and create a
        lasting impact.
      </OurMissionComponent>
    </div>
  );
};

export default Home;
