import { useGetTheme } from "../../../../hooks/useGetTheme";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { useHandleTheme } from "../../../../hooks/useHandleTheme";

const Theme = () => {
  const { theme } = useGetTheme();
  const handleTheme = useHandleTheme();

  return (
    <div className="fixed top-2/4 right-0 bg-card p-2 rounded-l-lg border border-border-primary z-30">
      <div>
        {theme === "light" ? (
          <FaMoon
            onClick={() => handleTheme("dark")}
            className="text-2xl text-primary cursor-pointer"
          />
        ) : (
          <IoMdSunny
            onClick={() => handleTheme("light")}
            className="text-2xl spin text-primary cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Theme;
