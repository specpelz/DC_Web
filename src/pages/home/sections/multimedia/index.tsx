import { IoIosArrowRoundForward } from "react-icons/io"

const Multimedia = () => {
  return (
    <div className="pt-[0px] pb-[40px] lg:pb-[80px]">
    <div className="flex items-center justify-between">
      <h2
        style={{
          fontFamily: "Merriweather",
          fontWeight: 700,
        }}
        className="text-[24px] lg:text-[32px]  lg:leading-[38px] "
      >
       Multimedia
      </h2>
      <p className="flex items-center gap-2 text-[16px] font-[600] cursor-pointer">
        See all
        <IoIosArrowRoundForward />
      </p>
    </div>
  </div>
  )
}

export default Multimedia