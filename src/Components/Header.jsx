import { Link } from "react-router-dom";
import Burger from "../Fragments/Burger";
import { Nav } from "./Nav/Nav";
import { useState } from "react";

const Header = () => {

   // State to track whether the menu is open or closed
    const [menuStatus, setMenuStatus] = useState(false);
  
    // Function to toggle the menu state
    const burgerHandler = () => {
      setMenuStatus((prev) => !prev);
    };

  return (
    <header className="main-header relative z-[999] bg-white-100">
      <div className="container mx-auto py-[28px] px-[26px] md:flex md:justify-between md:items-center md:py-[1rem]">
        <div className="logo-burger flex justify-between items-center md:w-fit">
          <div className="logo">
            <Link to="/">
              <img src="./shared/desktop/logo.svg" alt="Photosnap Logo" />
            </Link>
          </div>
          <Burger menuState={menuStatus} burgerMenuHandler={burgerHandler}/>
        </div>
        <div className={`${menuStatus ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-3.5'} 
        py-[32px] absolute left-0 right-0 transition-all duration-500 bg-white-100 text-center px-[33px]
        md:py-0 md:relative md:translate-0 md:w-full md:bg-transparent md:text-left md:opacity-100 md:pointer-events-auto md:flex md:justify-between md:items-center
        `}>
            <Nav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
