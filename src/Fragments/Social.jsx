import Socials from "../Data/Socials.json"
import { Link } from "react-router-dom"
import { useState } from "react"
const Social = ({classname}) => {

    const [socials, setSocials] = useState(Socials)
  return (
    <ul className={`flex gap-4 ${classname}`}>
        {
            socials && (
                socials.map((item, index) => (
                    <li key={item.id}>
                        <Link to={item.url} title={item.title} target="_blank" className={` brightness-[10] hover:brightness-[1]`}>
                            <img src={item.icon} alt={item.title} />
                        </Link>
                    </li>
                ))
            )
        }
    </ul>
  )
}

export default Social
