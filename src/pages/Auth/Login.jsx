import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import Input from "../../components/common/Input";
import SubmitButton from "../../components/common/SubmitButton";
import { useLazyLoginQuery } from "../../store/services/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const { handleSubmit, register } = useForm({});
  const [loginUser, { isLoading }] = useLazyLoginQuery();
  const navigate = useNavigate();

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
        <div className="flex flex-col items-center justify-center bg-card border shadow-lg rounded-xl overflow-hidden w-[340px] h-[340px]">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center justify-center gap-5 w-full p-7"
          >
            <div className="w-16 h-16 border p-2 rounded-full flex flex-col items-center justify-center bg-red-600 text-white">
              <FaUserAlt className="text-4xl" />
            </div>
            <h1 className="font-bold text-3xl capitalize">Login</h1>
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

            <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
