import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { removeProductById , incrementQuantity , decrementQuantity } from '../features/ProductsSlice'



interface PropsProduct {
  id: string
  Image: string
  Title: string
  Price : string
  onClick?: (id:number) => void
}


const SingleProduct:React.FC<PropsProduct> = ({ id , Image , Title , Price , onClick}) => {


  const dispatch = useDispatch()

  const product = useSelector((state: RootState) => state.products.find((p) => p.id === id));

  // Define functions to handle quantity changes
  const handleIncrement = () => {
    if (product) {
      dispatch(incrementQuantity(product.id));
    }
  };

  const handleDecrement = () => {
    if (product) {
      dispatch(decrementQuantity(product.id));
    }
  };


  return (
       <div className="flex shadow-md px-2 py-2 my-3 justify-between items-center">
      <div className="flex">
        <img
          width={50}
          height={50}
          className="rounded-md mr-3"
          src={Image}
        />
        <div className="flex flex-col justify-start gap-1">
          <h1 className="font-bold">{Title}</h1>
          <p className="text-orange-500 text-xs">
            <span className="text-black">Price :</span> ${Price}
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-items-end mx-3">
        <span onClick={handleDecrement} className="border-orange-500 border-2  px-2   hover:cursor-pointer">
          -
        </span>
        <span className=" py-1">{product?.Quantity}</span>
        <span  onClick={handleIncrement} className="border-orange-500 border-2  px-2   hover:cursor-pointer">
          +
        </span>
      </div>
      <div>
        <span onClick={() => dispatch(removeProductById(id))} className="text-white font-light p-1 rounded-md text-xs  bg-red-500 hover:cursor-pointer  ">remove</span>
      </div>
    </div>
  );
};

export default SingleProduct;
