import { Outlet } from "react-router";
import Header from "../components/common/Header";

const Main = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
