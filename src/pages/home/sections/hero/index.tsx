import Container from "@components/container";

const Hero = () => {
  return (
    <div className="bg-brandLightBlue h-[500px]">
      <Container>
        <div className="flex justify-center items-center h-[80vh]">
          <p className="text-4xl text-primaryColor">Hero Section</p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
