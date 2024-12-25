import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import Button from "../../../common/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";
const Tutors = ({ data }) => {
  const swiperRef = useRef();
  return (
    <div className="container">
      <div className="py-8 md:py-28">
        <div className="pb-8 md:pb-16 text-center flex flex-col gap-5 text-primary">
          <h1 className="font-bold text-xl xl:text-5xl text-center  uppercase ">
            The Best Tutors in Town
          </h1>
          <span className="text-secondary text-xl">
            Learn from the most experienced and skilled instructors!
          </span>
        </div>

        <div className="relative">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
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
            pagination={{
              clickable: true,
            }}
            spaceBetween={15}
            slidesPerView={4}
            freeMode={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data?.hero?.map((course) => (
              <SwiperSlide key={course?.courseName}>
                <div
                  key={course?.courseName}
                  className="bg-card p-3 rounded-md border border-border-primary"
                >
                  <img
                    className="rounded-md w-full h-52"
                    src={course?.authorImage}
                    alt="course"
                  />
                  <div className="text-primary py-3">
                    <h2 className="font-medium text-xl">{course?.authorName}</h2>
                    <p className="text-secondary">{course?.authorDesignation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute -top-14 right-0 hidden lg:block">
            <div className="flex justify-between gap-5">
              <Button
                className="rounded-md"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <FaAngleLeft className="text-xl" />
              </Button>
              <Button
                className={"rounded-md"}
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaAngleRight className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Tutors.propTypes = {
  data: PropTypes.object,
};
export default Tutors;
