import Button from "./Button";

const CardFullImg = ({ imgdesktop, imgtablet, imgmobile, imgalt, btntext,imgtitle, imgautor,classname, ...props }) => {
  return (
    <figure className={`relative h-[375px] md:h-[500px] w-full overflow-clip ${classname}`}>
      <picture className="w-full h-full block object-cover">
        <source sizes="min-width: 1100px" srcset={imgdesktop} />
        <source sizes="min-width: 768" srcset={imgtablet} />
        <img src={imgmobile} alt={imgalt} className="w-full h-full object-cover"/>
      </picture>
      <figcaption className="absolute p-[40px] left-0 right-0 bottom-0 bg-linear-[to_top,#000000a8_20%,transparent_100%]">
        <h2 className=" heading-mid text-white-100 font-bold text-[18px]">{imgtitle}</h2>
        <p className="text-white-100 pb-[16px] mb-[16px] border-b-1 border-gray-500 text-[13px]">{imgautor}</p>
        <Button btntype="underline" dark={true} btntext={btntext} {...props.Link} classname="justify-between" />
      </figcaption>
    </figure>
  );
};

export default CardFullImg;
