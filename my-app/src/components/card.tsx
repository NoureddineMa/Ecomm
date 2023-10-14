import React from "react";

interface PropsCard {
  id: number
  Image: string
  Title: string
  Price: number
  ButtonContent: string
  Quantity: number
  onClick: (id:number,Image: string, Title: string, Price: number , Quantity:number) => void
}



const Card: React.FC<PropsCard> = ({id , Image, Title, Price, Quantity ,  ButtonContent  , onClick }) => {


  const handleClick = () => {
    onClick(id, Image, Title, Price,Quantity);
  }

  return (
    <div className="w-96 md:w-3/6 lg:w-1/3 px-7 py-7 shadow-md ">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <img
        src={Image}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-orange-400 px-3 py-1.5 text-xs font-medium">
          New
        </span>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{Title}</h3>
        <p className="my-1.5 font-bold text-orange-500"><span className="text-black">Price :</span> ${Price}</p>
        <button onClick={handleClick} className="block w-full mt-3 rounded bg-orange-400 p-4 text-sm font-medium transition hover:scale-105">
          {ButtonContent}
        </button>
      </div>
    </div>
  );
};

export default Card;
