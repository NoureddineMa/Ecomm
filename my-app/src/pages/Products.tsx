import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct , removeProductById } from "../features/ProductsSlice";

const Products = () => {
  // fetch Products :
  const [products, setProducts] = useState([])
  const [isError, setIsError] = useState(false)


  const dispatch = useDispatch()


  function GetDataProducts() {
    try {
      axios
        .get("https://api.escuelajs.co/api/v1/products")
        .then((res) => {
          console.log(res.data)
          setProducts(res.data)
        })
        .catch(() => {
          setIsError(true)
          setProducts([])
        });
    } catch (error) {
      setIsError(true)
      setProducts([])
    }
  }

  useEffect(() => {
    GetDataProducts();
  }, [])


  const handleCardClick = (id:number ,Image:string, Title:string, Price:number) => {
    const ObjectSingleProduct = {
      id: id,
      Image: Image,
      Title: Title,
      Price: Price
    }
    dispatch(addProduct(ObjectSingleProduct))
  };



  return (
    <div>
      <Header />
      <main className="flex flex-row flex-wrap ">
        {products.length > 0 ?  products.map((singleProduct, index) => (
          <Card
            id={singleProduct["id"]}
            key={index}
            Image={singleProduct["images"][0]}
            Title={singleProduct["title"]}
            Price={singleProduct["price"]}
            ButtonContent="Buy Now"
            onClick={handleCardClick}
          />
        )) : <>No Data Available</>}
      </main>
    </div>
  );
};

export default Products;
