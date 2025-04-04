
const Container = ({classname, children}) => {
  return (
    <div className={`container max-w-[1110px] mx-auto ${classname}`}>
      {children}
    </div>
  )
}

export default Container
