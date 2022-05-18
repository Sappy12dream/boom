import { Link } from "react-router-dom";
import logoImg from "../Boom/logo.png";

function Footer() {
  return (
    <div className=" px-2 md:px-3 lg:px-0 grid md:grid-cols-4 grid-cols-1 justify-between my-5 w-full h-full">
      <div className="mt-5 md:mt-0">
        <img src={logoImg} className="" alt="" width="100" height="100" />
      </div>
      <div className="mt-5 md:mt-0">
        <h1 className="font-bold">Categories</h1>
        <div className="flex flex-col mt-5">
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            World
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Politics
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Health
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Science
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Business
          </Link>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <h1 className="font-bold">Helpful Links</h1>
        <div className="flex flex-col mt-5">
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Home
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            About
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Pricing
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Style Guide
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Licensing
          </Link>
          <Link to="/" className="font-bold text-sm mb-3 hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-5 md:mt-0 w-full">
        <h1 className="font-bold">Subscribe</h1>
        <div className="flex bg-slate-200 p-2 rounded-lg mt-5 w-full">
          <input
            type="email"
            placeholder="Enter your email..."
            className="bg-slate-200 w-full"
          />
          <button className="bg-black text-white p-2 rounded-lg">
            Subscribe
          </button>
        </div>
        <div className="text-xs flex mt-4">
          <input type="checkbox" className="mr-2" />
          By subscribing you agree to our Terms & Conditions.
        </div>
      </div>
    </div>
  );
}

export default Footer;
