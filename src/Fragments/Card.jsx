const Card = ({
  dark,
  bgmedia,
  imgurldesktop,
  imgurltablet,
  imgurlmobile,
  children,
  classname,
}) => {
  return bgmedia ? (
    <div
      className={`${imgurlmobile} ${imgurltablet} ${imgurldesktop} bg-cover bg-no-repeat bg-center ${classname}`}
    ></div>
  ) : (
    <div
      className={`${
        dark ? "bg-black-100" : "bg-white-100"
      } px-[24px] py-[92px] flex flex-col justify-center ${
        classname ? classname : null
      }`}
    >
      {children}
    </div>
  );
};
export default Card;
