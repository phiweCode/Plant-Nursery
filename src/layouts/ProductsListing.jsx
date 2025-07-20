import React, {useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart } from '../cartSlice'
import { Link } from 'react-router';

function ProductsListing() { 

  const plants = useSelector((state)=>state.plant);
  const itemsInCart = useSelector((state)=>state.cart)
  const dispatch = useDispatch();  

 
  const ref = useRef(null)

  const handleAddToCart = (cartItem, category) => { 
      const { plant, plant_index, cat_index } = cartItem;  

      console.log({ 
        Cart_item_name: plant.name, 
        item_description: plant.description, 
        item_cost: plant.cost, 
        plant_index, 
        cat_index, 
      })   

      cartItem = { ...cartItem, category}

      dispatch(addToCart(cartItem))


  }


  //console.log(plants)

  return (
 <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">    
    {plants.map((category, cat_index)=>
       <>
       <header key={`${cat_index}-header`} className="text-start mt-20">
          <h2 key={`${cat_index}-heading`} className="text-xl font-bold text-gray-900 sm:text-3xl">{category.category}</h2>
       </header> 
          <ul key={`${cat_index}-list`} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> 
       {
       category.plants.map((plant, plant_index)=>
        <li key={`${cat_index},${plant_index}`} className='h-[600px]'>
        <article className="group block overflow-hidden">
          <img
            src={plant.image}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-transparent min-h-[70px] pl-1.5 pt-3 ">
            <h3 className=" text-green-700 font-black text-l  group-hover:underline group-hover:underline-offset-4">
              {plant.name}
            </h3> 

            <p className="description"> 
              {plant.description}
            </p>

            <p className="mt-2 grid grid-cols-2 gap-8">
              <span className="sr-only text-black"> Regular Price </span>

              <span className="max-w-15 tracking-wider text-gray-900 bg-green-600 px-4 py-1 rounded text-white font-bold"> {plant.cost} </span>
              <button disabled = {itemsInCart.some(item=> item.cat_plant_index == `${cat_index}${plant_index}`)? true : false} 
              ref={ref} 
              className={`tracking-wider ${!itemsInCart.some(item=> item.cat_plant_index == `${cat_index}${plant_index}`)? "bg-green-600 px-4 py-1 text-white hover:bg-amber-300" : "bg-amber-200 text-gray-500"}  rounded  font-bold `}  onClick={()=>handleAddToCart({plant, cat_index, plant_index}, category.category)}> {!itemsInCart.some(item=> item.cat_plant_index == `${cat_index}${plant_index}`)? "Add to cart": "added"} </button>
            </p>
          </div>
        </article>
      </li>

       )
      
       } 
         </ul>

       </>  
    )}
  
  

  </div>
</section>
  )
}

export default ProductsListing
