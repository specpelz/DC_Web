import MainLayout from "@layouts/MainLayout";
import AboutDataCasting from "./sections/aboutdatacasting";
import Hero from "./sections/hero";
import WhatWeDo from "./sections/whatwedo";
import MapHighlights from "./sections/map";
import Container from "@components/container";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Container>
        <AboutDataCasting />
        <WhatWeDo />
        <MapHighlights />
      </Container>
    </MainLayout>
  );
};

export default Home;
