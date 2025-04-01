import { Link } from "react-router-dom";
import Burger from "../Fragments/Burger";
import { Nav } from "./Nav/Nav";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container mx-auto p-[1rem]">
        <div className="logo-burger flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="./shared/desktop/logo.svg" alt="Photosnap Logo" />
            </Link>
          </div>
          <Burger />
        </div>
        <div className="navs opacity-0 transition-all duration-500 pointer-events-none absolute left-0 right-0 bg-white-100 text-center px-10">
            <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
