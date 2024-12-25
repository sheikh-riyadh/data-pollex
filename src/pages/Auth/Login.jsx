import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import Input from "../../components/common/Input";
import SubmitButton from "../../components/common/SubmitButton";
import { useLazyLoginQuery } from "../../store/services/auth/authApi";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { smoothScroll } from "../../utils/smoothScroll";

const Login = () => {
  const { handleSubmit, register } = useForm({});
  const [loginUser, { isLoading }] = useLazyLoginQuery();
  const navigate = useNavigate();
  smoothScroll();

  /* Here we login the user */
  const handleLogin = async (data) => {
    const query = new URLSearchParams({
      ...data,
    }).toString();

    try {
      const res = await loginUser(query);
      if (res?.error) {
        toast.error(`${res?.error?.data?.message}`, { id: "error" });
      } else {
        toast.success("Login successfull", { id: "success" });
        navigate("/");
      }
    } catch (error) {
      toast.success("Something went wrong", { id: error });
    }
  };

  return (
    <div className="h-svh">
      <div className="flex flex-col  items-center justify-center h-screen w-full container">
        <div className="flex flex-col items-center justify-center bg-card border border-border-primary shadow-lg rounded-xl overflow-hidden w-[360px] h-[360px]">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col justify-center gap-4 w-full p-7"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 border p-2 rounded-full flex flex-col items-center justify-center bg-red-600 text-white">
                <FaUserAlt className="text-4xl" />
              </div>
              <h1 className="font-bold text-3xl capitalize">Login</h1>
            </div>
            <div className="w-full flex flex-col gap-5">
              <Input
                {...register("email")}
                placeholder="Email *"
                type="email"
                required
                className="w-full"
              />
              <Input
                {...register("password")}
                placeholder="*******"
                type="password"
                required
              />
            </div>

            <div className="text-start text-xs">
              <span className="flex items-center gap-1">
                New here?
                <Link to="/register" className="underline">
                  Register
                </Link>
              </span>
            </div>

            <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
