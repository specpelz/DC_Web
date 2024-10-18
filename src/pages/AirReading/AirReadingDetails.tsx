import Container from "@components/container";
import MainLayout from "@layouts/MainLayout";
import { useLocation } from "react-router-dom";
import MapHighlights from "./map";

const AirReadingDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const colorRange = [
    {
      color: "/lemon.svg",
      text: "Good",
    },
    {
      color: "/yello.svg",
      text: "Moderate",
    },
    {
      color: "/brown.svg",
      text: "Unhealthy for sensitive groups",
    },
    {
      color: "/red.svg",
      text: "Unhealthy",
    },
    {
      color: "/purple.svg",
      text: "Very unhealthy",
    },
    {
      color: "/blood.svg",
      text: "Harzadous",
    },
  ];

  return (
    <MainLayout>
      <Container>
        <div className="text-[32px] font-[700] text-[#2C2C2C] mt-[60px]">
          Air Quality in {item.community}
        </div>
        <div className="text-[32px] font-[700] text-[#2C2C2C]">
          {item.lga}&nbsp;LGA,&nbsp; {item.state}
        </div>

        <div className="rounded-[20px] shadow-md w-full p-[40px] mt-[50px]">
          <div className="text-[16px] font-[700] text-[#2C2C2C]">
            Current reading
          </div>
          <div className="text-[18px] font-[500] text-[#757575]">
            Last Updated:{item.date}
          </div>

          <div className="flex w-full mt-[17px]">
            <div className="w-[50%] bg-[#FDFDFD] border-[0.5px] border-[#E6E6E6] rounded-[10px] px-[24px] py-[28px] text-[14px] flex">
              <div className="w-[70%] h-[150px]"></div>
              <div className="w-[30%]">
                {colorRange.map((item, index) => (
                  <div 
                  key={index.toString()}
                  className="flex gap-x-[16px] items-center mb-[12.5px] ">
                    <div className="w-[20%]">
                      <img
                       src={item.color} 
                      alt="lemon color"
                      width={20}
                      height={20}
                       />
                    </div>
                    <div className="w-[80%] font-[400] text-[18px] text-[#2C2C2C]">
                    {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[50%]"></div>
          </div>

          <div className="my-[40px]">
            <div className="font-[700] text-[24px] mb-[-20px]">Map</div>
            <MapHighlights />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AirReadingDetails;
