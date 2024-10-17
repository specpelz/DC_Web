import { IoIosArrowRoundForward } from "react-icons/io";

const EnvironmentalBlog = () => {
  return (
    <div className=" py-[40px] lg:py-[80px]">
      <div className="flex items-center justify-between">
        <h2
          style={{
            fontFamily: "Merriweather",
            fontWeight: 700,
          }}
          className="text-[24px] lg:text-[32px]  lg:leading-[38px] "
        >
          Environmental Blog
        </h2>
        <p className="flex items-center gap-2 text-[16px] font-[600] cursor-pointer">
          See all
          <IoIosArrowRoundForward />
        </p>
      </div>
    </div>
  );
};

export default EnvironmentalBlog;
