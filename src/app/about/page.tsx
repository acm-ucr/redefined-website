// const AboutPage = () => {
//   return <div>About</div>;
// };

// export default AboutPage;
// const AboutPage = () => {
//   return <div>About</div>;
// };

// export default AboutPage;

// import Card from "@/components/about/card";

// const AboutPage = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// };

// export default AboutPage;

import Card from "@/components/about/card";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#BDB39F]">
      {/* If you have a header component, keep it here */}
      {/* <Header /> */}

      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <Card />
      </main>

      {/* If you have a footer component, keep it here */}
      {/* <Footer /> */}
    </div>
  );
}
