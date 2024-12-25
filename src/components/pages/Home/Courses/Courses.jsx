import PropTypes from "prop-types";
import Button from "../../../common/Button";
import { useState } from "react";

const Courses = ({ data }) => {
  const [isExplore, setIsExplore] = useState(false);
  const value = {
    first: null,
    second: null,
  };
  if (!isExplore) {
    value.first = 23;
    value.second = 29;
  } else {
    value.first = 0;
    value.second = 29;
  }

  return (
    <div className="container py-8 md:py-28 bg-card">
      <div className="">
        <div className="pb-8 md:pb-16 text-center flex flex-col gap-5 text-primary">
          <h1 className="font-bold text-xl xl:text-5xl text-center  uppercase ">
            We provide alot of courses
          </h1>
          <span className="text-secondary text-xl">
            Explore a wide range of learning opportunities with us!
          </span>
        </div>

        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5 ">
          {data?.hero?.slice(value?.first, value.second)?.map((course) => (
            <div
              key={course?.courseName}
              className="bg-background p-3 rounded-md border border-border-primary"
            >
              <img
                className="rounded-md w-full h-52"
                src={course?.image}
                alt="course"
              />
              <div className="text-primary py-3">
                <h2 className="font-medium text-xl">{course?.courseName}</h2>
                <p className="text-secondary">{course?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
          <Button
            onClick={() => setIsExplore((prev) => !prev)}
            className="w-40"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.object,
};

export default Courses;
