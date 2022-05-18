import { useState } from "react";
import { MdMenu, MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar() {
  const [Toggle, setToggle] = useState(false);
  window.addEventListener("click", function () {});
  return (
    <div className="px-2 md:px-3 lg:px-0  my-2 md:my-3 flex justify-between  items-center w-full h-10 ">
      <div>
        <MdMenu
          style={{ fontSize: "28px" }}
          onClick={() => setToggle(!Toggle)}
          className="md:hidden"
        />
        <div
          className={
            Toggle
              ? `absolute bg-white z-50 p-5 flex flex-col`
              : `hidden  lg:flex  flex-row gap-2`
          }
        >
          <Link
            to="/"
            className="font-semibold	text-sm mb-2 hover:text-neutral-400 "
            onClick={() => setToggle(!Toggle)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="font-semibold 	text-sm mb-2 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            About
          </Link>
          <Link
            to="/"
            className="font-semibold	text-sm mb-2 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            World
          </Link>
          <Link
            to="/"
            className="font-semibold	text-sm mb-2 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            Business
          </Link>
          <Link
            to="/"
            className="font-semibold	text-sm mb-2 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            Health
          </Link>
          <Link
            to="/"
            className="font-semibold	text-sm mb-2 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            Politics
          </Link>
          <Link
            to="/"
            className="font-semibold	text-sm mb-1 hover:text-neutral-400"
            onClick={() => setToggle(!Toggle)}
          >
            Science
          </Link>
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <div className="flex items-center gap-1">
          <MdSearch style={{ fontSize: "24px" }} />
          <input
            type="text"
            placeholder="Search..."
            className="w-16 placeholder:text-black placeholder:text-sm outline-none"
          />
        </div>
        <MdOutlineShoppingCart style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
}

export default Navbar;
