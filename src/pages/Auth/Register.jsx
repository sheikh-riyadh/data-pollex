import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../../components/common/Input";
import SubmitButton from "../../components/common/SubmitButton";
import { useRegisterMutation } from "../../store/services/auth/authApi";
import toast from "react-hot-toast";
import auth from "../../assets/register.svg";
import { smoothScroll } from "../../utils/smoothScroll";

const Register = () => {
  const { handleSubmit, register } = useForm({});
  const [userRegistration, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  smoothScroll();

  const handleRegister = async (data) => {
    if (data?.password != data?.confirmPassword) {
      toast.error("Password not match", { id: "password" });
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(data?.password)) {
      toast.error(
        "Password must be at least 8 characters,at least one letter, one number, and one special character",
        { id: "validation_error", duration: 7000 }
      );
      return;
    }

    try {
      const res = await userRegistration(data);
      if (res?.error) {
        toast.error(`${res?.error?.data?.message}`, { id: "error" });
      } else {
        toast.success("Registered successfull", { id: "success" });
        navigate("/");
      }
    } catch (error) {
      toast.success("Something went wrong", { id: error });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full my_container">
      <div className="md:w-4/5 lg:w-4/6 xl:w-7/12 bg-card border border-border-primary shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-2/5 lg:h-[420px] xl:h-4/6">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col justify-center gap-5 w-full p-7"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl capitalize text-primary">
              Create Account
            </h1>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Input
              {...register("email")}
              placeholder="Email *"
              type="email"
              required
            />
            <Input
              {...register("password")}
              placeholder="Password"
              type="password"
              required
            />
            <Input
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              type="password"
              required
            />
          </div>

          <div className="text-start text-xs">
            <span className="flex items-center gap-1">
              Already have an accout?
              <Link to="/login" className="underline">
                Login
              </Link>
            </span>
          </div>
          <span className="text-xs">
            Password must be at least 8 characters, one letter, one number, and
            one special character
          </span>
          <div className="flex flex-col items-center justify-center">
            <SubmitButton
              isLoading={isLoading}
              className="font-medium uppercase text-sm"
            >
              Sing Up
            </SubmitButton>
          </div>
        </form>

        <div className="flex flex-col gap-5 items-center justify-center p-7">
          <img src={auth} alt="auth" />
        </div>
      </div>
    </div>
  );
};

export default Register;
