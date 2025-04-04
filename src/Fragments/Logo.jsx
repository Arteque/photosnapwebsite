import { Link } from "react-router-dom"
const Logo = ({classname}) => {
  return (
    <div className={`logo ${classname}`}>
        <Link to="/">
            <img src="./shared/desktop/logo.svg" alt="Photosnap Logo" />
        </Link>
    </div>
  )
}
export default Logo
