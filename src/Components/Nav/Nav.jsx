import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Fragments/Button";

export const Nav = () => {
  return (
    <>
      <nav className="main-nav border-b-1 border-gray-100 mb-[19px] md:mb-0 md:pt-0 md:relative md:visible md:border-0 md:mx-auto">
        <ul className="uppercase heading-sm font-bold md:flex gap-2 justify-between">
          <li>
            <Link to="/stories"className=" text-[15px] pb-[20px] block md:p-[12px] md:text-[12px]">Stories</Link>
          </li>
          <li>
            <Link to="/features"className=" text-[15px] pb-[20px] block md:p-[12px] md:text-[12px]">Features</Link>
          </li>
          <li>
            <Link to="/pricing"className=" text-[15px] pb-[20px] block md:p-[12px] md:text-[12px]">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="featured">
        <Button  classname="block w-full" btntype="full" btntext="Get an invite" to="#" title="Get an invite" />
      </div>
    </>
  );
};
