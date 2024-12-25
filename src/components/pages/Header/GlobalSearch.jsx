import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaBoxOpen, FaFutbol } from "react-icons/fa";

const GlobalSearch = ({ isModalOpen, setIsModalOpen, data, isLoading }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsModalOpen, isModalOpen]);

  return (
    <div className="z-50" ref={modalRef}>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`bg-card rounded-md border border-border-primary absolute top-10 left-0 w-full`}
        >
          {data?.length ? (
            <div className="flex flex-col p-5 gap-5 max-h-[400px] overflow-y-auto custom-bar">
              {data?.map((course) => (
                <div
                  key={course?.courseName}
                  className="flex items-center gap-3"
                >
                  <div>
                    <img className="w-10 h-10" src={course?.image} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">
                      {course?.courseName?.length > 15
                        ? `${course?.courseName?.slice(0, 15)}..`
                        : course?.courseName}
                    </span>
                    <span className="text-xs">{course?.authorName}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[350px] w-full">
              {!isLoading ? (
                <FaBoxOpen className="text-7xl text-accent w-full" />
              ) : (
                <FaFutbol className="text-7xl text-widget animate-spin" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

GlobalSearch.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default GlobalSearch;
