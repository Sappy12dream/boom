import { Link } from "react-router-dom";
import logoImg from "../Boom/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMediumM,
  FaYoutube,
} from "react-icons/fa";
function Header() {
  return (
    <div className=" px-2 md:px-3 lg:px-0 my-2 md:my-5 flex justify-between items-center w-full h-10 ">
      <Link to="/">
        <img src={logoImg} width="100" height="100" alt="" />
      </Link>
      <div className="flex items-center gap-4 md:gap-0 md:justify-between md:w-64">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-400 text-lg"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-400 text-lg"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-400 text-lg"
        >
          <FaMediumM />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-400 text-lg"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-400 text-lg"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default Header;
