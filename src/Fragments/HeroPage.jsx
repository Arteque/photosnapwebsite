import CardContainer from "../Fragments/CardContainer";
import Card from "../Fragments/Card";
import HeaderBig from "../Fragments/HeaderBig";
import Paragraph from "../Fragments/Paragraph";
const HeroPage = ({
  text,
  title,
  imgurlmobile,
  imgurltablet,
  imgurldesktop,
}) => {
  return (
    <section id="hero">
      <CardContainer classname="bg-black-100">
        <Card
          classname="min-h-[294px] md:min-h-[490px] col-start-1 col-end-[-1] row-start-1  md:col-start-6 md:col-end-[-1]
            lg:col-start-6
            "
          bgmedia={true}
          imgurlmobile={imgurlmobile}
          imgurltablet={imgurltablet}
          imgurldesktop={imgurldesktop}
        />
        <Card
          dark={true}
          bgmedia={false}
          classname="col-start-1 col-end-[-1] md:col-end-6 lg:col-end-6 py-[0px!important] md:py-[96px!important] md:items-center"
        >
          <div className="md:pl-[7rem] lg:pl-[12svw] max-w-[80%] py-[96px] md:py-[0] smallgradient">
            <HeaderBig dark={false}>{title}</HeaderBig>
            <Paragraph dark={true}>{text}</Paragraph>
          </div>
        </Card>
      </CardContainer>
    </section>
  );
};

export default HeroPage;
