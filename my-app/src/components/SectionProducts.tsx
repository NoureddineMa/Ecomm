import React from 'react'
import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const SectionProducts = () => {

  const productsData = useSelector((state:RootState) => state.products)

  const filtredData = productsData.filter((product) => product.Title !== "")

  return (
    <div>
      {filtredData.length > 0 ? 
      filtredData.map((singleProduct) => (
      <SingleProduct Image={singleProduct.Image} id={singleProduct.id} Title={singleProduct.Title} Price={singleProduct.Price}   />
      ))
      : 
      <div className='flex justify-center items-center text-orange-400'>
        No Item Selectionned !
      </div>
      }
      
    </div>
  )
}

export default SectionProducts
