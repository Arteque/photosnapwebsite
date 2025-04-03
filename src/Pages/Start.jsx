import Card from "../Fragments/Card";
import CardContainer from "../Fragments/CardContainer";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
import { Link } from "react-router-dom";

const Start = () => {
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
          classname="col-start-1 col-end-[-1] md:col-start-2 md:col-end-6 lg:col-end-6"
        >
          <HeaderBig dark={false}>
            Create and share your photo stories.
          </HeaderBig>
          <Paragraph dark={true}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Paragraph>
          <Link to="#" className="button-underline button-underline-on-dark">
            <span className="text">Get an invite</span>
            <img src="/shared/desktop/arrow.svg" alt="Arrow to the right" />
          </Link>
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
          classname="col-start-1 col-end-[-1] md:col-start-4 md:col-end-[-2] lg:col-start-7 lg:col-end-11"
        >
          <HeaderBig dark={true}>Beautifull stories evry time</HeaderBig>
          <Paragraph dark={false}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Paragraph>
          <Link to="#" className="button-underline">
            <span className="text">View the stories</span>
            <img src="/shared/desktop/arrow.svg" alt="Arrow to the right" />
          </Link>
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
          classname="col-start-1 col-end-[-1] md:col-start-2 md:col-end-6"
        >
          <HeaderBig dark={false}>Designed for everyone</HeaderBig>
          <Paragraph dark={true}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </Paragraph>
          <Link className="button-underline button-underline-on-dark">
            <span className="text">View the stories</span>
            <img src="/shared/desktop/arrow.svg" alt="Arrow to the right" />
          </Link>
        </Card>
      </CardContainer>
    </div>
  );
};

export default Start;
