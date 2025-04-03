import Paragraph from "./Paragraph"

const CardIcon = ({icon, title, text, ...props}) => {
  return (
    <div className="max-w-[350px] text-center" {...props}>
        <div className="header">
            <img src={icon} alt={title} className="mx-auto"/>
        </div>
        <div className="body">
            <h2 className="heading-md font-bold">{title}</h2>
            <Paragraph dark={false}>
              {text}
            </Paragraph>
        </div>
    </div>
  )
}

export default CardIcon