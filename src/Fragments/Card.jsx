const Card = ({
  dark,
  bgmedia,
  imgurldesktop,
  imgurltablet,
  imgurlmobile,
  children,
  classname,
  ...props
}) => {
  return bgmedia ? (
    <div
      className={`${imgurlmobile} ${imgurltablet} ${imgurldesktop} bg-cover bg-no-repeat bg-center ${classname}`}
    ></div>
  ) : (
    <div
      className={`${
        dark ? "bg-black-100" : "bg-white-100"
      } py-[96px] flex flex-column items-center ${classname}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
