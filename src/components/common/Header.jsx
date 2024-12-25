import {
  FaAngleDown,
  FaBars,
  FaPhoneAlt,
  FaSchool,
  FaSearch,
} from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { header } from "../../data/header";
import { Link } from "react-router";
import { useState } from "react";
import GlobalSearch from "../pages/Header/GlobalSearch";
import { useGetDataQuery } from "../../store/services/home/homeApi";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: courses, isLoading } = useGetDataQuery();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };
  const results = courses?.[0]?.hero?.filter(
    (course) =>
      course.courseName.toLowerCase().includes(inputValue) ||
      course.authorName.toLowerCase().includes(inputValue)
  );

  return (
    <header className="w-full bg-card sticky top-0 p-3.5 z-30 border-b border-border-primary">
      <nav>
        <div className="flex items-center justify-between gap-5 container xl:hidden">
          <div>
            <Link to="/" className="cursor-pointer flex items-center gap-2">
              <img className="w-8" src="/logo.svg" alt="" />
              <span className="text-lg text-primary font-bold uppercase">
                educa
              </span>
            </Link>
          </div>
          <div>
            <FaBars className="text-primary text-2xl" />
          </div>
        </div>
        <div className="grid-cols-12 items-center px-[50px] hidden xl:grid">
          <div className="col-span-4 flex items-center gap-3 w-full">
            <Link to="/" className="cursor-pointer flex items-center gap-2">
              <img className="w-8" src="/logo.svg" alt="" />
              <span className="text-lg text-primary font-bold uppercase">
                educa
              </span>
            </Link>
            <div className="flex items-center bg-background px-4 text-primary rounded-full py-1.5 relative">
              <Input
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleChange(e)}
                placeholder="Search..."
                className="bg-transparent p-0"
              />
              <FaSearch />

              {isModalOpen && (
                <GlobalSearch
                  isLoading={isLoading}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  data={results}
                />
              )}
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <ul className="flex items-center gap-5 ">
                {/* Classes */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      Class 6-12
                    </span>
                    <span className="group-hover:rotate-180 duration-500">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="absolute bg-card hidden group-hover:block p-5 border border-border-primary rounded-md w-40 shadow-md">
                    <ul className="flex flex-col gap-4">
                      {header.clss.map(({ name, icon }) => (
                        <li
                          key={name}
                          className="flex items-center gap-3 capitalize text-primary cursor-pointer font-medium text-sm"
                        >
                          <span>{icon}</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Skills */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      Skills
                    </span>
                    <span className="group-hover:rotate-180 duration-500">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="absolute bg-card hidden group-hover:block p-5 border border-border-primary rounded-md w-48 shadow-md">
                    <ul className="flex flex-col gap-4">
                      {header.skills.map(({ name, icon }) => (
                        <li
                          key={name}
                          className="flex items-center gap-3 capitalize text-primary cursor-pointer font-medium text-sm"
                        >
                          <span>{icon}</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Admission test */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      Admission test
                    </span>
                  </div>
                </li>

                {/* Online batch */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      Online Batch
                    </span>
                    <span className="group-hover:rotate-180 duration-500">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="absolute bg-card hidden group-hover:block p-5 border border-border-primary rounded-md w-36 shadow-md">
                    <ul className="flex flex-col gap-4">
                      <li
                        key={name}
                        className="flex items-center gap-3 capitalize text-primary cursor-pointer font-medium text-sm"
                      >
                        <span>
                          <FaSchool />
                        </span>
                        <span>HSC</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Center */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      English Center
                    </span>
                    <span className="group-hover:rotate-180 duration-500">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="absolute bg-card hidden group-hover:block p-5 border border-border-primary rounded-md w-48 shadow-md">
                    <ul className="flex flex-col gap-4">
                      {header.center.map(({ name, icon }) => (
                        <li
                          key={name}
                          className="flex items-center gap-3 capitalize text-primary cursor-pointer font-medium text-sm"
                        >
                          <span>{icon}</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Center */}
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-medium text-primary">
                      More
                    </span>
                    <span className="group-hover:rotate-180 duration-500">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="absolute bg-card hidden group-hover:block p-5 border border-border-primary rounded-md w-48 shadow-md">
                    <ul className="flex flex-col gap-4">
                      {header.more.map(({ name, icon }) => (
                        <li
                          key={name}
                          className="flex items-center gap-3 capitalize text-primary cursor-pointer font-medium text-sm"
                        >
                          <span>{icon}</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-end gap-5">
              <div className="flex items-center font-bold text-btn gap-2">
                <FaPhoneAlt />
                <span>16910</span>
              </div>
              <Link to="login">
                <Button className="px-5 py-1 text-sm font-medium rounded-md">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
