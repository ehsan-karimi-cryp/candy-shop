"use client";
import Link from "next/link";
import { useRef } from "react";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const headerLinks = useRef(null);
  const items = useRef(null);

  const headerLinksButton = () => {
    headerLinks.current.classList.toggle("hidden");
    items.current.style.alignSelf = "end";
    items.current.classList.toggle("mb-5");
  };

  return (
    <header className="bg-pink-300 p-5 lg:p-10 flex justify-between pt-5 items-center">
      <h1 className="font-bold text-2xl text-center lg:text-5xl">
        <Link href={"/"}>Candy Shop</Link>
      </h1>
      <div className="flex flex-col justify-center items-baseline">
        <button
          className="sm:hidden hover:rotate-90 transition-all duration-500"
          onClick={headerLinksButton}
          ref={items}
        >
          <RiMenuFill className="text-4xl" />
        </button>

        <ul ref={headerLinks} className="hidden sm:flex">
          <li>
            <button className="header-buttons">Login</button>
          </li>
          <li>
            <button className="header-buttons">Shop</button>
          </li>
          <li>
            <button className="header-buttons">Order Cake</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
