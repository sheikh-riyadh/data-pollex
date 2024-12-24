import { Outlet } from "react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Theme from "../components/pages/Home/Theme/Theme";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Theme/>
    </div>
  );
};

export default Main;
