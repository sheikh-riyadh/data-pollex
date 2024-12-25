import Spinner from "../../components/common/Spinner";
import Choose from "../../components/pages/Home/Choose/Choose";
import Courses from "../../components/pages/Home/Courses/Courses";
import Hero from "../../components/pages/Home/Hero/Hero";
import RegisterCard from "../../components/pages/Home/RegisterCard/RegisterCard";
import Reviews from "../../components/pages/Home/Reviews/Reviews";
import Tutors from "../../components/pages/Home/Tutors/Tutors";
import { useGetDataQuery } from "../../store/services/home/homeApi";
import { smoothScroll } from "../../utils/smoothScroll";

const Home = () => {
  const { data, isLoading } = useGetDataQuery();
  smoothScroll();

  return (
    <>
      {!isLoading ? (
        <div>
          <Hero data={data?.[0]} />
          <Courses data={data?.[0]} />
          <Tutors data={data?.[0]} />
          <Choose />
          <Reviews data={data?.[0]} />
          <RegisterCard />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
