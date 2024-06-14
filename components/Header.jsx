import Link from "next/link";

const Header = () => {
  return (
      <header className="bg-pink-300 p-5 lg:p-10 flex justify-between pt-5 items-center">
        <h1 className="font-bold text-2xl text-center lg:text-5xl"><Link href={"/"}>Candy Shop</Link></h1>
        <div className="flex justify-center">
          <button className="header-buttons">Login</button>
          <button className="header-buttons">Shop</button>
        </div>
      </header>
  );
};

export default Header;
