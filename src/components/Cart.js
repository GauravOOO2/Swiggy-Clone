import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearitems } from '../utils/cartSlice'
import '../Style/style.css'

const Cart = () => {

  const menu = useSelector((store) => store.cart.items)
  console.log("menu", menu)
  const dispatch = useDispatch()
  const handleclearcart = () => {
    dispatch(clearitems())
  }

  return (
    <>
      <div className='parent_wrapper'>
        <div className='item1' ></div>
        <div className='item2'>

        </div>
        <div className='item3'>
          <div className='button_parent'>
            <p>Clear the Cart:</p>
            <div className='cart_clear_button' >
              <button className='mybutton' onClick={() => handleclearcart()} >Clear</button>
            </div>
          </div>
        </div>
        <div className='item4'></div>
        <div className='item5'>

        </div>
        <div className='item6'>
          
        </div>
        <div></div>
        <div className='item8' >
          <div className='' >
            {
              menu?.map((data) => (
                <div className='menu_item' >
                  <p className='' > Name: {data?.card?.info?.name} </p>
                  {/* <p className='' >Itme: {data?.card?.info?.itemAttribute?.vegClassifier} </p> */}
                  <p className='price_tag' >Price: {data?.card?.info?.price / 100}</p>
                  {/* <p className='' > Rating: {data?.card?.info?.ratings?.aggregatedRating?.rating} </p> */}

                  <img className='menu_image'
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.card?.info?.imageId}`}
                    alt='Menu pic'
                  />
                </div>
              )
              )
            }
          </div>
        </div>
        <div></div>
        <div></div>

      </div>
      <div className='cart_wrapper' >



      </div>
    </>
  )
}

export default Cart