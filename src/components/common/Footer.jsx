import {
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/sheikhriyadhofficial/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sheikh-riyadh/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@codersheikh8040",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/sheikh-riyadh",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/01919195934",
    },
  ];

  return (
    <footer className="bg-background pt-10">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center  md:justify-between gap-5">
            <div className="flex flex-col lg:items-center gap-5">
              <img className="w-16" src="/logo.svg" alt="logo" />
              <div className="flex lg:items-center lg:justify-center gap-5 text-2xl text-primary">
                {links?.map(({ link, icon }) => (
                  <a target="_blank" href={link} key={link}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold underline text-primary">
                Site Links
              </h2>
              <div className="flex flex-col text-primary">
                <Link to="/">
                  <span>Free download</span>
                </Link>
                <Link to="/">
                  <span>Privacy policy</span>
                </Link>
                <Link to="/">
                  <span>Blogs</span>
                </Link>{" "}
                <a>
                  <span>Books store</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold underline text-primary">
                Contact
              </h2>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <FaMapMarkerAlt />
                  <span>Dhaka postogola 1204</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <FaEnvelope />
                  <span>sheikhriyadh934@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <FaPhoneAlt />
                  <span>+8801919195934</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex flex-wrap items-center justify-between py-2">
              <p className="text-primary text-sm py-1">
                {`Copyright ©${year} Educa | All Rights Reserved`}
              </p>
              <p className="text-primary text-sm py-1">
                Elite Author on Educa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
