const HeaderBig = ({children, dark}) => {
  return (
    <h2 className={`heading-xl text-[2rem] md:text-[40px] ${dark ? 'text-black-100' : 'text-white-100'}`}>
        {children}
    </h2>
  )
}

export default HeaderBig
