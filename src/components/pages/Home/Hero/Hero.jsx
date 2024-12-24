import { useState } from "react";
import bg_hero from "../../../../assets/bg-hero.jpeg";
import Slider from "./Slider";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section
      className="relative pb-10"
      style={{
        background: `url(${bg_hero}) center/cover no-repeat`,
      }}
    >
      <div className="flex flex-col gap-10 xl:gap-20 container">
        <div className="flex flex-col gap-5 items-center h-full  z-20 pt-14">
          <h1 className="font-bold text-xl xl:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600">Study with experts</h1>

          <div className="w-full grid lg:grid-cols-2 gap-10 pt-10">
            <div className="relative bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] rounded-[34px] border border-[#253A71] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center pb-4 text-xl font-medium text-white capitalize">
                <h2 className="text-center pt-10 xl:p-0">
                  Enroll now in courses for Batch 2025!
                </h2>
              </div>
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex">
                <span className="bg-[#15275D] text-[#2B72FF] border border-[#2B72FF] px-5 py-1 rounded-full">
                  Course Overview
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-white w-full h-44 text-9xl rounded-md font-bold">
                <h1>{activeSlide}</h1>
              </div>
            </div>
            <div className="w-full hidden lg:block">
              <Slider setActiveSlide={setActiveSlide} />
            </div>
          </div>
        </div>

        <div className="w-full block lg:hidden">
          <Slider setActiveSlide={setActiveSlide} />
        </div>

        <div className="relative bg-[linear-gradient(180deg,rgba(123,21,21,0.40)_0%,rgba(59,6,6,0.40)_100%)] rounded-3xl border border-[#592327] text-center p-5">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex">
            <span className="text-[#E64040] border border-[#E64040] bg-[rgb(68,24,24)] px-5 py-1 rounded-full">
              Offline locations
            </span>
          </div>
          <div className="flex flex-col items-center py-4 text-xl font-medium text-white capitalize">
            <span>After teaching 500,000+ online, we’re now offline!</span>
          </div>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {[
              "Uttara",
              "Panthapath",
              "Mirpur",
              "Mogbazar",
              "Chawk Bazar",
              "Chattogram",
            ].map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 bg-white/10 p-2 rounded-md text-white"
              >
                <div className="clip-rhombus w-8 h-8 flex flex-col items-center justify-center bg-[#E64040] ">
                  <FaMapMarkerAlt />
                </div>
                <span>{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bg-black h-full top-0 w-full -z-10"></div>
    </section>
  );
};

export default Hero;
