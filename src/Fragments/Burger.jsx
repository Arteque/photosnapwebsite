import { useEffect, useState } from "react";

const Burger = () => {
  // State to track whether the menu is open or closed
  const [menuState, setMenuState] = useState(false);

  // Function to toggle the menu state
  const burgerMenuHandler = () => {
    setMenuState((prev) => !prev);
  };

  // Effect to update the document body dataset when menu state changes
  useEffect(() => {
    menuState ? (document.body.dataset.menu = "open") : (document.body.dataset.menu = "close"); // Consider using delete document.body.dataset.menu instead of NULL
  }, [menuState]);

  return (
    <button onClick={burgerMenuHandler} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
      {/* Show the menu icon when menu is closed */}
      {!menuState && (
        <img src="./shared/mobile/menu.svg" alt="Open the Menu icon" />
      )}
      {/* Show the close icon when menu is open */}
      {menuState && (
        <img src="./shared/mobile/close.svg" alt="Close the Menu icon" />
      )}
    </button>
  );
};

export default Burger;
