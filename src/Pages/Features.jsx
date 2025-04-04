import { useState } from "react";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
import CardContainer from "../Fragments/CardContainer";
import Card from "../Fragments/Card";
import CardIcon from "../Fragments/CardIcon";
import Container from "../Fragments/Container";
import CardFullImg from "../Fragments/CardFullImg";

import FeaturesData from "../Data/Features.json";
const Features = () => {
  const [featuresData, setFeaturesData] = useState(FeaturesData);

  return (
    <>
      <section id="hero">
        <CardContainer classname="bg-black-100">
          <Card
            classname="min-h-[375px] lg:min-h-[650px] col-start-1 col-end-[-1] row-start-1  md:col-start-6 md:col-end-[-1]
          lg:col-start-6
          "
            bgmedia={true}
            imgurlmobile="bg-[url(/features/mobile/hero.jpg)]"
            imgurltablet="md:bg-url[url(/features/tablet/hero.jpg)]"
            imgurldesktop="lg:bg-[url(/features/desktop/hero.jpg)]"
          />
          <Card
            dark={true}
            bgmedia={false}
            classname="col-start-1 col-end-[-1] md:col-start-2 md:col-end-6 lg:col-end-6  max-w-[450px]"
          >
            <HeaderBig dark={false}>FEATURES</HeaderBig>
            <Paragraph dark={true}>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </Paragraph>
          </Card>
        </CardContainer>
      </section>

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
      <section>
      <CardFullImg 
            ishero={true} 
            imgalt="Hazy full moon of appalachia"
            imgmobile="/shared/mobile/bg-beta.jpg"
            imgtablet="/shared/tablet/bg-beta.jpg"
            imgdesktop="/shared/desktop/bg-beta.jpg"
            imgtitle="We’re in beta. Get your invite today!"
            btntext="Get an invite"
            
          />    
      </section>
    </>
  );
};

export default Features;
