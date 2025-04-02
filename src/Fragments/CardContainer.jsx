const CardContainer = ({children, reverse}) => {
  return (
    <div className={`card-2-cols md:flex md:justify-between ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {children}
    </div>
  )
}

export default CardContainer