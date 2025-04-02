import Card from "../Fragments/Card";
import CardContainer from "../Fragments/CardContainer";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <CardContainer reverse={true}>
        <Card
          bgmedia={true}
          imgurlmobile="/home/mobile/create-and-share.jpg"
          imgurltablet="/home/tablet/create-and-share.jpg"
          imgurldesktop="/home/desktop/create-and-share.jpg"
        />
        <Card dark={true} bgmedia={false}>
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

      <CardContainer reverse={false}>
        <Card
          bgmedia={true}
          imgurlmobile="/home/mobile/beautiful-stories.jpg"
          imgurltablet="/home/tablet/beautiful-stories.jpg"
          imgurldesktop="/home/desktop/beautiful-stories.jpg"
        />
        <Card dark={false} bgmedia={false} classname="md:basis-2/1">
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

      <CardContainer reverse={true}>
        <Card
          bgmedia={true}
          imgurlmobile="/home/mobile/designed-for-everyone.jpg"
          imgurltablet="/home/tablet/designed-for-everyone.jpg"
          imgurldesktop="/home/desktop/designed-for-everyone.jpg"
        />
        <Card dark={true} bgmedia={false} classname="md:basis-2/1">
          <HeaderBig dark={false}>Designed for evryone</HeaderBig>
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
