import CardFullImg from "../Fragments/CardFullImg";
import Storiesdata from "../Data/Stories.json";
import { useState } from "react";
const Stories = () => {
  const [storiesData, setStoriesData] = useState(Storiesdata);

  return (
    <>
      <section id="hero">
        <CardFullImg
          ishero={true}
          btntext="Read the story"
          imgalt="Hazy full moon of appalachia"
          imgmobile="/stories/mobile/moon-of-appalacia.jpg"
          imgtablet="/stories/tablet/moon-of-appalacia.jpg"
          imgtitleover="LAST MONTH’S FEATURED STORY"
          imgtitle="Hazy full moon of appalachia"
          imgdesktop="/stories/desktop/moon-of-appalacia.jpg"
          imgautor="John Appleseed"
          imgdate="March 2nd 2020"
          imgtext='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
          classname="[&_picture_img]:min-h-[317px] [&_figcaption]:relative [&_figcaption]:bg-black-100 [&_figcaption]:py-[48px] [&_figcaption]:px-[28px] [&_figcaption_h2]:text-[32px] [&_figcaption_h2]:mb-[56px]
            [&_figcaption_p.date-autor-container]:border-[0px] [&_figcaption_p.date-autor-container]:pb-[16px] [&_figcaption_p.date-autor-container]:mb-[0]
            md:[&_picture_img]:min-h-[650px] md:[&_figcaption]:absolute md:[&_figcaption]:bg-transparent md:[&_figcaption]:bg-linear-[to_top,#000000a8_20%,#00000000_100%] md:[&_figcaption]:px-[39px] md:[&_figcaption]:py-[139px]
          "
        />
      </section>
      <section className="cards">
        <div className="grid grid-cols-[1fr_repeat(2,calc(min(100%-40px,60rem)/2))1fr] lg:grid-cols-[repeat(12,1fr)]">
          {storiesData &&
            storiesData.length > 0 &&
            storiesData.map((story, index) => (
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
      </section>
    </>
  );
};

export default Stories;
