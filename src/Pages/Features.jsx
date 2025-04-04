import { useState } from "react";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
import CardContainer from "../Fragments/CardContainer";
import Card from "../Fragments/Card";
import CardIcon from "../Fragments/CardIcon";
import Container from "../Fragments/Container";
import FeaturesData from "../Data/Features.json";

import InviteCall from "../Fragments/InviteCall";
import HeroPage from "../Fragments/HeroPage";

const Features = () => {
  const [featuresData, setFeaturesData] = useState(FeaturesData);
 
  return (
    <>
      <HeroPage
      imgurlmobile="bg-[url(/features/mobile/hero.jpg)]"
      imgurltablet="md:bg-url[url(/features/tablet/hero.jpg)]"
      imgurldesktop="lg:bg-[url(/features/desktop/hero.jpg)]"
      title="Features"
      text=" We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories."
      />

      <section className="cards">
        <Container
          classname="my-[80px] grid grid-cols-[1fr_repeat(1,_calc(_min(100%-40px,60rem)/1))1fr] justify-items-center gap-y-[50px] 
      md:grid-cols-[1fr_repeat(4,_calc(min(100%-80px,1400px)/4))1fr] md:gap-[11px]
      lg:grid-cols-3 lg:grid-rows-2
      "
        >
          {featuresData &&
            featuresData.map((feature, index) => (
              <CardIcon
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                key={feature.id}
                classname={`col-start-2 col-span-1 ${
                  index % 2 === 0
                    ? "md:col-start-2 md:col-span-2"
                    : "md:col-start-4 md:col-span-2"
                }
                  lg:col-start-auto lg:col-span-1
                `}
              />
            ))}
        </Container>
      </section>
     <InviteCall />
    </>
  );
};

export default Features;
