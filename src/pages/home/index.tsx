import MainLayout from "@layouts/MainLayout";
import AboutDataCasting from "./sections/aboutdatacasting";
import Hero from "./sections/hero";
import WhatWeDo from "./sections/whatwedo";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="w-[90%] mx-auto">
        <AboutDataCasting />
        <WhatWeDo />
      </div>
    </MainLayout>
  );
};

export default Home;
