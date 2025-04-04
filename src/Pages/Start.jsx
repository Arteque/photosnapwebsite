import { useState } from "react";

import Button from "../Fragments/Button";
import Card from "../Fragments/Card";
import CardContainer from "../Fragments/CardContainer";
import CardFullImg from "../Fragments/CardFullImg";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
import CardIcon from "../Fragments/CardIcon";

import Stories from "../Data/Stories.json";
import Features from "../Data/Features.json";

const Start = () => {
  const [stories, setstories] = useState(Stories);
  const [features, setFeatures] = useState(Features);
  const maxData = 4;
  return (
    <div>
      <CardContainer classname="bg-black-100">
        <Card
          classname="min-h-[375px] lg:min-h-screen col-start-1 col-end-[-1] row-start-1  md:col-start-6 md:col-end-[-1]"
          bgmedia={true}
          imgurlmobile="bg-[url(./home/mobile/create-and-share.jpg)]"
          imgurltablet="md:bg-url[url(./home/tablet/create-and-share.jpg)]"
          imgurldesktop="lg:bg-[url(./home/desktop/create-and-share.jpg)]"
        />
        <Card
          dark={true}
          bgmedia={false}
          classname="col-start-1 col-end-[-1] md:col-start-2 md:col-end-6 lg:col-end-6  max-w-[450px]"
        >
          <HeaderBig dark={false}>
            Create and share your photo stories.
          </HeaderBig>
          <Paragraph dark={true}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Paragraph>
          <Button
            btntype="underline"
            to="#"
            btntext="Get an invite"
            dark={true}
          />
        </Card>
      </CardContainer>

      <CardContainer>
        <Card
          classname="min-h-[375px] lg:min-h-screen col-start-1 col-end-[-1] row-start-1 md:col-start-1 md:col-end-4 lg:col-end-6"
          bgmedia={true}
          imgurlmobile="bg-[url(./home/mobile/beautiful-stories.jpg)]"
          imgurltablet="md:bg-[url(./home/tablet/beautiful-stories.jpg)]"
          imgurldesktop="lg:bg-[url(./home/desktop/beautiful-stories.jpg)]"
        />
        <Card
          dark={false}
          bgmedia={false}
          classname="col-start-1 col-end-[-1] md:col-start-4 md:col-end-[-2] lg:col-start-7 lg:col-end-11 max-w-[350px]"
        >
          <HeaderBig dark={true}>Beautifull stories evry time</HeaderBig>
          <Paragraph dark={false}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Paragraph>
          <Button
            btntype="underline"
            to="#"
            btntext="View the stories"
            dark={false}
          />
        </Card>
      </CardContainer>

      <CardContainer classname="bg-black-100">
        <Card
          classname="min-h-[375px] lg:min-h-screen col-start-1 col-end-[-1] row-start-1  md:col-start-6 md:col-end-[-1]"
          bgmedia={true}
          imgurlmobile="bg-[url(./home/mobile/designed-for-everyone.jpg)]"
          imgurltablet="md:bg-[url(/home/tablet/designed-for-everyone.jpg)]"
          imgurldesktop="lg:bg-[url(./home/desktop/designed-for-everyone.jpg)]"
        />
        <Card
          dark={true}
          bgmedia={false}
          classname="col-start-1 col-end-[-1] md:col-start-2 md:col-end-6  max-w-[387px]"
        >
          <HeaderBig dark={false}>Designed for everyone</HeaderBig>
          <Paragraph dark={true}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </Paragraph>
          <Button
            dark={true}
            btntext="View the stories"
            to="#"
            btntype="underline"
            title="View the stories"
          />
        </Card>
      </CardContainer>
      <div className="grid grid-cols-[1fr_repeat(2,calc(min(100%-40px,60rem)/2))1fr] lg:grid-cols-[repeat(12,1fr)]">
        {stories &&
          stories.length > 0 &&
          stories.map((story, index) => (
            <CardFullImg
              imgmobile={story.imgs.mobile}
              imgtablet={story.imgs.tablet}
              imgdesktop={story.imgs.desktop}
              imgalt={story.title}
              btntext="Read Story"
              imgtitle={story.title}
              imgautor={story.autor}
              to={story.url}
              key={story.id}
              classname={`col-start-1 col-end-[-1] ${
                index % 2 !== 1
                  ? "md:col-start-1 md:col-end-3"
                  : "md:col-start-3 md:col-end-[-1]"
              }
              lg:col-start-auto lg:col-span-3
              `}
            />
          ))}
      </div>
      <div className="my-[80px] grid grid-cols-[1fr_repeat(1,_calc(_min(100%-40px,60rem)/1))1fr] justify-items-center gap-y-[50px] 
      md:grid-cols-[1fr_repeat(4,_calc(min(100%-80px,1400px)/4))1fr] md:gap-[11px]
      lg:flex lg:gap-[1rem] lg:justify-center
      ">
        {features &&
          features.map((feature, index) => (
            <CardIcon
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              key={feature.id}
              classname={`col-start-2 col-span-1 ${(index%2===0)?'md:col-start-2 md:col-span-2':'md:col-start-4 md:col-span-2'}
               ${index>2?'lg:hidden':null}
              `}
            />
          ))}
      </div>
    </div>
  );
};

export default Start;
