import Logo from "../Fragments/Logo"
import Social from "../Fragments/Social"
import Container from "../Fragments/Container"
const Footer = () => {
  return (
    <footer className="bg-black-100 text-white-100 py-[100px]">
        <Container className="container mx-auto">
          <div className="col-1">
            <Logo classname="invert"/>
            <Social />
          </div>
          <div className="col-2"></div>
          <div className="col-3"></div>
        </Container>
    </footer>
  )
}

export default Footer
