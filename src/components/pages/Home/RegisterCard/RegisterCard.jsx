import { Link } from "react-router";
import Button from "../../../common/Button";

const RegisterCard = () => {
  return (
    <div className="container bg-card py-8 md:py-28">
      <div className="p-10 bg-background rounded-xl">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="flex flex-wrap items-center gap-5 text-primary">
            <div>
              <h2 className="font-medium text-3xl leading-normal">
              Join us in just 2 minutes and start learning today!
              </h2>
            </div>
          </div>
          <Link to={"/sign-up"}>
            <Button className="px-10 py-4">Sign up now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
