import { useState } from "react";

import InviteCall from "../Fragments/InviteCall";
import Paragraph from "../Fragments/Paragraph";
import HeroPage from "../Fragments/HeroPage";
import Container from "../Fragments/Container";
import Button from "../Fragments/Button";
import Currency from "../Tools/Currency";

import PlansData from "../Data/PLans.json";
import Advantages from "../Data/Compare.json";

const Pricing = () => {
  const [plans, setPlans] = useState(PlansData);
  const [compareData, setCompareData] = useState(Advantages);
  const [pricetype, setPriceType] = useState("month");

  const plantypeHandler = (e) => {
    e.target.checked
      ? (e.target.nextElementSibling.setAttribute(
          "class",
          "[&>span]:bg-black-100 [&>span]:[&::after]:bg-white-100 [&>span]:[&::after]:left-[calc(100%-16px)]"
        ),
        setPriceType("year"))
      : (e.target.nextElementSibling.setAttribute(
          "class",
          "[&>span]:[&::after]:left-[16px]"
        ),
        setPriceType("month"));
  };

  return (
    <>
      <HeroPage
        imgurlmobile="bg-[url(/pricing/mobile/hero.jpg)]"
        imgurltablet="md:bg-url[url(/pricing/tablet/hero.jpg)]"
        imgurldesktop="lg:bg-[url(/pricing/desktop/hero.jpg)]"
        title="Pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      />
      <section className="mt-[120px]">
        <header>
          <Container>
            <ul className="w-fit mx-auto flex gap-[10px] [&>li]:text-[18px] [&>li]:font-bold [&>li]:transition-all [&>li]:delay-100 [&>li]:duration-500">
              <li
                className={
                  pricetype == "year" ? "text-gray-100 scale-[0.7]" : "text-black-100"
                }
              >
                Month
              </li>
              <li>
                <input
                  type="checkbox"
                  name="plantype"
                  id="plantype"
                  onChange={plantypeHandler}
                  className="hidden"
                />
                <label htmlFor="plantype">
                  <span
                    className=" cursor-pointer w-[4rem] block bg-gray-100 h-[2rem] rounded-[100px] relative 
                  [&::after]:transition-all [&::after]:duration-[0.3s] [&::after]:w-[24px] [&::after]:h-[24px] [&::after]:content-[''] [&::after]:bg-black-100 [&::after]:absolute [&::after]:top-[50%] [&::after]:left-[16px] [&::after]:translate-y-[-50%] [&::after]:translate-x-[-50%] [&::after]:rounded-[100px]
                  "
                  ></span>
                </label>
              </li>
              <li
                className={
                  pricetype == "month" ? "text-gray-100 scale-[0.7]" : "text-black-100"
                }
              >
                Year
              </li>
            </ul>
          </Container>
        </header>
        <Container
          classname="my-[60px] lg:my-[80px] grid grid-cols-[1fr_repeat(1,_calc(_min(100%-40px,60rem)/1))1fr]  gap-y-[24px] 
      md:grid-cols-[1fr_repeat(4,_calc(min(100%-80px,1400px)/4))1fr] md:gap-[11px]
      lg:flex lg:gap-[30px] lg:justify-center"
        >
          {plans &&
            plans.length > 0 &&
            plans.map((plan, i) => (
              <div
                className={`${
                  i % 2 === 1
                    ? "bg-black-100 text-white-100 lg:scale-y-[1.1] topgradient"
                    : "text-black-100 bg-gray-100"
                }
           text-center px-[37px] py-[48px] 
           col-start-2 col-span-1
           
           md:col-start-2
           md:col-end-6
           md:col-row-${plan.id}
           md:grid
           md:grid-cols-2
           md:grid-rows-[0.2fr]
           md:text-left
           lg:grid-cols-1
           lg:text-center
           lg:items-center
           lg:justify-items-center
           `}
                key={`${plan.title}-${i}`}
              >
                <h2 className="text-[24px] mb-[18px] leading-[25px] font-[900]">
                  {plan.title}
                </h2>
                <Paragraph
                  dark={i % 2 === 1 ? true : false}
                  classname="text-[15px] leading-[25px] mb-[40px] 
                  md:col-start-1 md:row-start-2 
                  md:mb-[32px] md:pb-[0!Important]
                  "
                >
                  {plan.text}
                </Paragraph>
                <h3 className="mb-[40px] md:mb-0 md:ml-auto lg:mb-[40px] lg:mx-auto">
                  <span className="text-[40px] font-black tracking-[4.75px]">
                    {pricetype == "month"
                      ? Currency(plan.price.month)
                      : Currency(plan.price.year)}
                  </span>
                  <br />
                  <span
                    className={`text-[15px] ${
                      i % 2 === 1 ? "text-white-100" : "text-black-100"
                    } opacity-50`}
                  >
                    per {pricetype}
                  </span>
                </h3>
                <Button
                  btntype={"full"}
                  dark={i % 2 === 1 ? true : false}
                  btntext="Pick plan"
                  classname={`w-full block ${i % 2 === 1 && "text-black-100"}
                  md:row-start-3 md:col-start-1 lg:row-start-4
                  `}
                />
              </div>
            ))}
        </Container>
      </section>
      <section id="compare" className=" my-[160px]">
        <Container>
          <table className="pricing_table">
            <caption className="heading-xl">Compare</caption>
            <thead>
              <tr>
                <th>The features</th>
                <th>Basic</th>
                <th>Pro</th>
                <th>Business</th>
              </tr>
            </thead>
            <tbody>
              {compareData &&
                compareData.length > 0 &&
                compareData.map((data, index) => (
                  <tr key={index}>
                    <th data-cell="the features">{data.title}</th>
                    <td data-cell="Basic">
                      {data.available.basic && (
                        <img
                          src="/pricing/desktop/check.svg"
                          alt={`${data.title} basic check`}
                        />
                      )}
                    </td>
                    <td data-cell="Pro">
                      {data.available.pro && (
                        <img
                          src="/pricing/desktop/check.svg"
                          alt={`${data.title} basic check`}
                        />
                      )}
                    </td>
                    <td data-cell="Business">
                      {data.available.business && (
                        <img
                          src="/pricing/desktop/check.svg"
                          alt={`${data.title} basic check`}
                        />
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Container>
      </section>
      <InviteCall />
    </>
  );
};

export default Pricing;
