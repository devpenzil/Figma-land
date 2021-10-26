import React from "react";
type pr = {
    price: string,
    desc: string,
    dollar: string,
    f1: string,
    f2: string,
    f3: string,
    f4: string,
    f5:string
}
interface price { 
  prices: pr;
}
const PriceCard: React.FC<price> = ({ prices }) => {
  return (
    <div className="w-20.938 group hover:bg-blue-400 hover:text-white bg-white px-4 py-12 rounded-xl">
      <div className="text-center text-xl font-bold">{prices.price}</div>
        <div className="w-32 text-center mx-auto">{prices.desc}</div>
        <div className="w-max mx-auto flex items-center my-6">
            <div className="text-7xl font-extrabold group-hover:text-white text-pricing">{prices.dollar}</div>
            <div >
                <div className="font-bold">$</div> 
                <div>Per month</div>
            </div>
        </div>
          <div className="my-4 space-y-4">
                <div className="text-center text-base font-normal">{prices.f1}</div>
                <div className="text-center text-base font-normal">{prices.f2}</div>
                <div className="text-center text-base font-normal">{prices.f3}</div>
                <div className="text-center text-base font-normal">{prices.f4}</div>
                <div className="text-center text-base font-normal">{prices.f5}</div>
          </div>
         <div className="w-max mx-auto mt-8">
         <button className="bg-blue-400 group-hover:bg-white group-hover:text-blue-400  px-8 py-2 mx-auto rounded-3xl text-white font-semibold">Order now</button>
         </div>
    </div>
  );
};
 
export default PriceCard;
