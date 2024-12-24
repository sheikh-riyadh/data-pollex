import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviews } from "../../../../data/reviews";
import quate from "../../../../assets/drop-red-bc80918e.svg";

const Reviews = () => {
  return (
    <div className="py-8 md:py-28 container">
      <div className="pb-8 md:pb-16 text-center flex flex-col gap-5 text-primary">
        <h1 className="font-bold text-xl xl:text-5xl text-center  uppercase ">
          Students Love
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div>
          {reviews?.map(({ name, designation, reviewMessage }) => (
            <SwiperSlide key={name}>
              <div className="flex flex-col gap-5 border border-border-primary p-5 rounded-md h-full bg-card text-primary">
                <img className="w-8" src={quate} alt="drop_red" />
                <span>{reviewMessage}</span>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col text-primary">
                    <span className="font-bold text-lg">{name}</span>
                    <span className="text-lg italic font-medium">
                      {designation}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
