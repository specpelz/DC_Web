
import MainLayout from "@layouts/MainLayout";
import { Typography } from "antd";

import { IoCalendarOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";


const AirReadingDetails = () => {
 




  const location = useLocation();
  const { item } = location.state || {};

  const { Title, Paragraph } = Typography;

  return (
    <MainLayout>
      <div className="flex justify-center mt-[60px]">
        <div className="w-[90%] md:flex md:gap-x-[20px] xl:gap-x-[40px] mb-[150px] md:mb-[280px]">
          <div className="w-full md:w-[70%]">
            <div key={item.id} className="w-full">
              <div className="w-full h-[400px] rounded-md mb-[16.5px]">
                <img
                  src={item.country}
                  alt="uploaded image"
                  className="w-full h-[400px] rounded-[14px] object-cover"
                />
              </div>
              <div className="flex items-center gap-x-[5px]">
                <IoCalendarOutline size={17.5} color="#757575" />
                <div className="text-[#757575] text-[12px]">
                  {item.country}
                </div>
              </div>
              <Title
                style={{
                  color: "#2C2C2C",
                }}
                ellipsis={{ rows: 1, expandable: false }}
                level={4}
              >
                {item.country}
              </Title>
              <Paragraph
                style={{
                  color: "#757575",
                }}
                ellipsis={{ rows: 2, expandable: false }}
              >
                {item.country}
              </Paragraph>
            </div>
          </div>
      
        </div>
      </div>
    </MainLayout>
  );
};

export default AirReadingDetails;
