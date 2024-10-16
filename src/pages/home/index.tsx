import MainLayout from "@layouts/MainLayout";
import AboutDataCasting from "./sections/aboutdatacasting";
import Hero from "./sections/hero";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutDataCasting />
    </MainLayout>
  );
};

export default Home;
