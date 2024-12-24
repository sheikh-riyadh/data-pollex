import Choose from "../../components/pages/Home/Choose/Choose";
import Courses from "../../components/pages/Home/Courses/Courses";
import Hero from "../../components/pages/Home/Hero/Hero";
import RegisterCard from "../../components/pages/Home/RegisterCard/RegisterCard";
import Reviews from "../../components/pages/Home/Reviews/Reviews";
import Tutors from "../../components/pages/Home/Tutors/Tutors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Tutors />
      <Choose />
      <Reviews/>
      <RegisterCard/>
    </div>
  );
};

export default Home;
