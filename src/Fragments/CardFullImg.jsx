import Button from "./Button";
import Container from "./Container"

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
  ...props
}) => {
  return (
    <figure
      className={`relative w-full ${classname}`}
    >
      <picture className="w-full h-full block object-contain">
        <source sizes="min-width: 1100px" srcset={imgdesktop} />
        <source sizes="min-width: 768" srcset={imgtablet} />
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
              {
                imgdate || imgautor && (
                  <p className="text-white-100 pb-[16px] mb-[16px] border-b-1 border-gray-500 text-[13px]">
                    {imgdate ? <span className="date">{imgdate} </span> : null}
                    <span className="autor">by {imgautor}</span>
                  </p>
                )
              }
              {imgtext ? (
                <p className="text-white-100 pb-[16px] mb-[16px] text-[13px]">
                  {imgtext}
                </p>
              ) : null}
              {
                btntext && (
                    <Button
                    btntype="underline"
                    dark={true}
                    btntext={btntext}
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
