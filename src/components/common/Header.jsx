import { FaBars } from "react-icons/fa";
import person from "../../assets/pd-person.jpg";

const Header = () => {
  return (
    <header className="w-full bg-card sticky top-0 flex items-center justify-between p-3.5  z-30 border-b border-border-primary">
      <div className="cursor-pointer">
        <FaBars className="text-2xl text-primary" />
      </div>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <div>
              <img className="w-8 h-8 rounded-full" src={person} alt="user" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
