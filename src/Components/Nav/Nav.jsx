import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav className="main-nav border-b-1 border-gray-100 mb-3 ">
        <ul className="uppercase heading-sm font-bold">
          <li>
            <Link to="/stories"className="py-3 block">Stories</Link>
          </li>
          <li>
            <Link to="/features"className="py-3 block">Features</Link>
          </li>
          <li>
            <Link to="/pricing"className="py-3 block">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="featured">
        <button className="button-full font-medium block w-full">Get an invite</button>
      </div>
    </>
  );
};
