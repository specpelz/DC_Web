import MainLayout from "@layouts/MainLayout";
import AboutDataCasting from "./sections/aboutdatacasting";
import Hero from "./sections/hero";
import WhatWeDo from "./sections/whatwedo";
import MapHighlights from "./sections/map";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="w-[90%] mx-auto">
        <AboutDataCasting />
        <WhatWeDo />
        <MapHighlights />
      </div>
    </MainLayout>
  );
};

export default Home;
