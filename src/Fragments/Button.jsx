import { Link } from "react-router-dom"

const Button = ({btntype, dark, btntext, classname, ...props}) => {
  return (
    btntype === 'underline' ? (
        <Link {...props} className={`button-underline ${dark ? 'button-underline-on-dark' : null} ${classname}`}>
            <span className="text">{btntext}</span>
            <img src="/shared/desktop/arrow.svg" alt="arrow to the right" />
        </Link>
    ) : btntype === 'full' && (
        <Link {...props} className={`button-full ${dark ? 'button-on-dark' : null} ${classname}`}>
            <span className="text">{btntext}</span>
        </Link>
    )
  )
  
  
}

export default Button