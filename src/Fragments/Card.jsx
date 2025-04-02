const Card = ({dark, bgmedia, imgurldesktop, imgurltablet, imgurlmobile, children, classname}) => {
  return (
     bgmedia ? (
            <picture className={classname}>
                <source media="(min-width: 64rem)" srcSet={imgurldesktop} />
                <source media="(min-width: 48rem)" srcSet={imgurltablet} />
                <img src={imgurlmobile} className="block w-full h-full max-h-[650px] object-cover"/>
            </picture>
        ) : (
            <div 
        className={`${dark ? 'bg-black-100' : 'bg-white-100'} px-[24px] py-[72px] ${classname ? classname : null}`}
    >{children}</div>
        )
  )
}
 
export default Card