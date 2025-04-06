import Button from "./Button";
import Container from "./Container"
import Paragraph from "./Paragraph";

const CardFullImg = ({
  imgdesktop,
  imgtablet,
  imgmobile,
  imgalt,
  btntext,
  imgtitleover,
  imgtitle,
  imgdate,
  imgtext,
  imgautor,
  classname,
  ishero,
  to,
  ...props
}) => {
  return (
    <figure
      className={`relative w-full ${classname}`}
    >
      <picture className="w-full h-full block object-contain">
        <source sizes="min-width: 1100px" srcSet={imgdesktop} />
        <source sizes="min-width: 768" srcSet={imgtablet} />
        <img
          src={imgmobile}
          alt={imgalt}
          className="w-full h-full object-cover"
        />
      </picture>
      <figcaption className={`absolute p-[40px] left-0 right-0 bottom-0 bg-linear-[to_top,#000000a8_20%,transparent_100%] ${ishero ? 'p-[122px]' : null}`}>
          <div className="max-w-[387px]">
              {imgtitleover ? (
                <p className="text-white-100 font-bold text-[12px] tracking-[2px]">
                  {imgtitleover}
                </p>
              ) : null}
              <h2 className={`heading-mid text-white-100 font-bold text-[18px] ${ishero ? 'text-[40px] tracking-[4.17px] leading-[48px] uppercase':null}`}>
                {imgtitle}
              </h2>
              <p className="text-white-100 pb-[16px] mb-[16px] border-b-1 border-gray-500 text-[13px] date-autor-container">
              {imgdate && (
                    imgdate && <span className="date">{imgdate} </span>
              )}
              {imgautor && (
                    imgautor && <span className="autor">by {imgautor}</span>
              )}
              </p>
              {imgtext ? (
                <Paragraph classname="text-white-100 pb-[16px] text-[15px]">
                  {imgtext}
                </Paragraph>
              ) : null}
              {
                btntext && (
                    <Button
                    btntype="underline"
                    dark={true}
                    btntext={btntext}
                    to={to}
                    {...props.Link}
                    classname="justify-between"
                  />
                )
              }
          </div>
      </figcaption>
    </figure>
  );
};

export default CardFullImg;
