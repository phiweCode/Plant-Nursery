import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeCartItem,
  selectCartTotal
} from "../cartSlice";

function Checkout() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch(); 

  const [vat, setVat] = useState(25); 
  // const [subtotal, setSubtotal] = useState(0) 


  const subtotal = useSelector(selectCartTotal) 

  console.log("cart total", subtotal)


  console.log(cartItems);
  const handleItemIncrement = (itemIndex) =>{ 
    dispatch(incrementItemQuantity(itemIndex));
  }

  const handleItemDecrement = (itemIndex) =>{ 
    dispatch(decrementItemQuantity(itemIndex));
  }
    
  const handleRemoveItem = (itemIndex) => dispatch(removeCartItem(itemIndex));



  return (
    <section>
      <div className="mt-[10vh] mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl text-start">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartItems.length == 0
                ? "You cart is current empty"
                : cartItems.map((cartItem) => (
                    <li className="flex items-center gap-4">
                      <img
                        src={cartItem.cartItemImageLink}
                        alt=""
                        className="size-16 rounded-sm object-cover min-w-20 h-auto"
                      />

                      <div>
                        <h3 className="text-green-700 font-black text-sm ">
                          {cartItem.cartItemName}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline text-lg">
                              {cartItem.cartItemDescription}
                            </dt>
                          </div>

                          <div>
                            <dd className="inline bg-green-600 rounded px-2 py-0.9 font-medium text-white">
                              {cartItem.category}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            handleItemDecrement(cartItem.plant_index)
                          }
                          className="itemIncrement bg-green-600 text-white font-black px-2 rounded"
                        >
                          -
                        </button>
                        <span className="itemQuantinty bg-white px-3 rounded">
                          {cartItem.cartItemQuantity}
                        </span>
                        <button
                          onClick={() =>
                            handleItemIncrement(cartItem.plant_index)
                          }
                          className="itemIncrement mr-4 bg-green-600 text-white font-black px-2 rounded cursor-pointer"
                        >
                          +
                        </button>

                        <span className="sub-total">
                          R{subtotal}
                        </span>

                        <button
                          onClick={() => handleRemoveItem(cartItem.plant_index)}
                          className="text-gray-600 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8 bg-white px-5 py-5">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>R{subtotal}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>R{vat}</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>R{subtotal === 0 ? 0 : subtotal - vat}</dd>
                  </div>
                </dl>

         

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded-sm bg-green-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
