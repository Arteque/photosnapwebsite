const HeaderBig = ({children, dark, classname}) => {
  return (
    <h2 className={`heading-xl text-[32px] md:text-[40px] ${dark ? 'text-black-100' : 'text-white-100'} ${classname}`}>
        {children}
    </h2>
  )
}

export default HeaderBig
