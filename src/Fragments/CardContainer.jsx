const CardContainer = ({children, reverse}) => {
  return (
    <div className={`card-2-cols md:flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        {children}
    </div>
  )
}

export default CardContainer