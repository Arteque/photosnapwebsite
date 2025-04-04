import Paragraph from "./Paragraph"

const CardIcon = ({icon, title, text, classname, ...props}) => {
  return (
    <div className={`max-w-[360px] text-center ${classname}`} {...props}>
        <div className="header mb-[48px]">
            <img src={icon} alt={title} className="mx-auto h-[72px] w-[72px] object-contain"/>
        </div>
        <div className="body">
            <h2 className="heading-md font-bold mb-[16px]">{title}</h2>
            <Paragraph dark={false}>
              {text}
            </Paragraph>
        </div>
    </div>
  )
}

export default CardIcon