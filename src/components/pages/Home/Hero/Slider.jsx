import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "../../../common/Button";
import PropTypes from "prop-types";

const Slider = ({ setActiveSlide }) => {
  const swiperRef = useRef();

  return (
    <div className="relative bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] h-[300px] rounded-3xl p-10 border border-[#64523D]">
      <div className="flex flex-col items-center pb-4 text-xl font-medium text-white capitalize text-center">
        <h2>We provide many types of courses</h2>
      </div>
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex">
        <span className="text-[#F29D1F] border border-[#F29D1F] bg-[#583112] px-5 py-1 rounded-full">
          Popular Courses
        </span>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
        pagination={{
          clickable: true,
        }}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[...Array(20).keys()].map((singleReview) => (
          <SwiperSlide key={singleReview}>
            <div className="bg-white/10 flex flex-col items-center justify-center text-white h-36 rounded-md">
              <h1>{singleReview}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 right-5 px-5">
        <div className="flex justify-between gap-5">
          <Button
            className="p-1 bg-[#583112] rounded-md"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FaAngleLeft className="text-xl" />
          </Button>
          <Button
            className={"p-1 bg-[#583112] rounded-md"}
            onClick={() => swiperRef.current.slideNext()}
          >
            <FaAngleRight className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  setActiveSlide: PropTypes.func,
};
export default Slider;
