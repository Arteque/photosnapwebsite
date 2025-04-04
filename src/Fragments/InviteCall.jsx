import Button from "./Button"
import Container from "./Container"
import HeaderBig from "./HeaderBig"

const InviteCall = () => {
  return (
    <section>
        <div className="prefooter bg-no-repeat bg-cover 
        bg-[url(/shared/mobile/bg-beta.jpg)] min-h-[288px] 
        md:bg-[url(/shared/tablet/bg-beta.jpg)]
        ">
        <Container classname="pt-[64px] px-[33px]
        md:flex md:justify-between md:items-center
        lg:px-[unset]
        ">
            <HeaderBig dark={false} classname="mb-[22px] max-w-[400px] tracking-[4.17px]">We're in beta. Get your invite today!</HeaderBig>
            <Button btntype="underline" dark={true} to="#"btntext="Get an invite" classname="text-[12px] tracking-[2px]"/>
            
        </Container> 
        </div>  
    </section>
  )
}

export default InviteCall
