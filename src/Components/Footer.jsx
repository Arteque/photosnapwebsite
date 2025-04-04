import Logo from "../Fragments/Logo";
import Social from "../Fragments/Social";
import Container from "../Fragments/Container";
import { Nav } from "./Nav/Nav";
import Paragraph from "../Fragments/Paragraph";
import Button from "../Fragments/Button";
const Footer = () => {
  return (
    <footer className="bg-black-100 text-white-100 py-[56px]">
      <Container
        classname="flex flex-col items-center gap-[49px]
      md:grid md:grid-cols-[0.2fr_repeat(2,1fr)0.2fr] md:grid-rows-[repeat(3,0.2fr)] md:gap-0
      lg:grid-cols-[0.2fr_repeat(3,1fr)0.2fr] lg:grid-rows-[repeat(3,1fr)]
      "
      >
        <Logo classname="invert md:col-start-2 md:col-span-1 
        lg:self-start
        " />
        <Social classname="md:col-start-2 md:row-start-3 md:col-span-1 md:self-baseline
        lg:self-end
        " />
        <Nav
          location="footer"
          classname="text-center 
          md:col-start-2 md:col-span-1 md:row-start-2 md:self-end md:text-left md:mt-[32px] md:mb-[72px]
          md:[&>ul]:flex md:[&>ul]:gap-[26px]
          lg:col-start-3 lg:row-start-1 lg:row-end-[-1] lg:m-[unset!important]
          lg:[&>ul]:flex-col lg:[&>ul]:gap-[unset!important]
        "
        />
        <Button
          btntext="Get an invite"
          btntype="underline"
          dark={true}
          classname="w-fit mx-auto mb-[2rem] text-[12px] tracking-[2px]
          md:justify-self-end md:mb-[0] md:mx-[unset]
          lg:self-start
          "
        />

        <Paragraph dark={true} classname="pb-[0!important] font-normal
        md:row-start-3 md:col-start-3 md:justify-self-end
        lg:col-start-4
        ">
          Copyright 2025. All Rights Reserved
        </Paragraph>
      </Container>
    </footer>
  );
};

export default Footer;
