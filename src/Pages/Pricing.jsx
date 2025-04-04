import InviteCall from "../Fragments/InviteCall"
import HeaderBig from "../Fragments/HeaderBig"
import Paragraph from "../Fragments/Paragraph"
import HeroPage from "../Fragments/HeroPage"
import Container from "../Fragments/Container"
import Button from "../Fragments/Button"
const Pricing = () => {
  return (
    <>
      <HeroPage
       imgurlmobile="bg-[url(/pricing/mobile/hero.jpg)]"
       imgurltablet="md:bg-url[url(/pricing/tablet/hero.jpg)]"
       imgurldesktop="lg:bg-[url(/pricing/desktop/hero.jpg)]" 
        title="Pricing"      
      text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."/>
      <section>
        <Container>
           <div className="bg-black-100 text-white-100 text-center max-w-[407px] px-[37px] py-[48px] mx-auto">
               <h2 classname="text-[24px] leading-[25px] font-bold">
                Pro
               </h2>
               <Paragraph dark={true} classname="text-[15px] leading-[25px]">
                  More advanced features available. Recommended for photography veterans and professionals.
               </Paragraph>
               <h3><span className="text-[40px] font-black tracking-[4.75px]">$ 39.00</span><br />
               <span className="text-[15px] text-white-100 opacity-50">per month</span>
               </h3>
               <Button btntype={"full"} dark={true} btntext="Pick plan" classname="text-black-100 w-full block"/>
           </div>
        </Container>
      </section>
      <InviteCall />
    </>
  )
}

export default Pricing
