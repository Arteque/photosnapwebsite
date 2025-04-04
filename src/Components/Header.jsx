import { Link } from "react-router-dom";
import Burger from "../Fragments/Burger";
import { Nav } from "./Nav/Nav";
import { useState } from "react";
import Logo from "../Fragments/Logo";
import Container from "../Fragments/Container";
const Header = () => {

   // State to track whether the menu is open or closed
    const [menuStatus, setMenuStatus] = useState(false);
  
    // Function to toggle the menu state
    const burgerHandler = () => {
      setMenuStatus((prev) => !prev);
    };

  return (
    <header className="main-header sticky top-0 z-[999] bg-white-100">
      <Container classname="py-[0.688rem] px-[26px] md:flex md:justify-between md:items-center md:py-[1rem]">
        <div className="logo-burger flex justify-between items-center md:w-fit">
          <Logo />
          <Burger menuState={menuStatus} burgerMenuHandler={burgerHandler}/>
        </div>
        <div className={`${menuStatus ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-3.5'} 
        py-[32px] absolute left-0 right-0 transition-all duration-500 bg-white-100 text-center px-[33px]
        md:py-0 md:relative md:translate-0 md:w-full md:bg-transparent md:text-left md:opacity-100 md:pointer-events-auto md:flex md:justify-between md:items-center
        `} >
            <Nav location="header" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
