const CardContainer = ({ children, classname}) => {
  

  return (
    <div
      className={`
        grid 
        grid-cols-[1fr_repeat(2,_calc((min(100%-40px,_60rem)-1*20px)/2))_1fr]
        md:grid-cols-[1fr_repeat(6,_calc((min(100%-80px,_60rem)-5*30px)/6))_1fr]
        lg:grid-cols-[1fr_repeat(9,_calc(min(100%-80px,1400px)/9))_1fr]
        ${classname}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
