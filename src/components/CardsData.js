import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCaresData } from '../utils/resSlice'
import resSlice from '../utils/resSlice'
import { useParams } from 'react-router-dom'
import useFetchCardsData from '../hooks/useFetchCardsData'
import { additem } from '../utils/cartSlice'

const CardsData = () => {

  const dispatch = useDispatch()

  const resData = useSelector((store) => store?.res?.resData)
  console.log(resData);

  const resMenu = useSelector((store) => store.res.resMenu)
  console.log(resMenu)

  // const res = useSelector((store) => store?.res?.resList);
  // console.log(res)


  useFetchCardsData();

  const handleadditem = (data)=>{
    dispatch(additem(data))
  }

  return (
    <div>
      <div className='text-center' >
      <p className="text-xl font-semibold  " > {resData?.name} </p>
      <p className="text-gray-600" > {resData?.cuisines?.join(", ")} </p>
      
      <div>Recommended ({resMenu?.length}) </div>
      </div>
      <div className=' p-10 m-10  ' >
        {
          resMenu?.map((data, index) => (
            <div key={index} className=' rounded-lg p-4'>
              <div className='p-6 m-6 pb-10 bg-white shadow-lg rounded-lg '>
                <div className='flex justify-between' >
                <p className='text-lg font-semibold' > Name: {data?.card?.info?.name} </p>
                <p className='text-gray-600 text-sm' >Itme: {data?.card?.info?.itemAttribute?.vegClassifier} </p>
                <p className='text-gray-600 text-sm' >Price: {data?.card?.info?.price / 100}</p>
                <p className='text-gray-600 text-sm' > Rating: {data?.card?.info?.ratings?.aggregatedRating?.rating} </p>

                <img className='w-24 h-24 object-cover rounded-md'
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.card?.info?.imageId}`}
                  alt='Menu pic'
                />
                </div>
                <button onClick={()=>handleadditem(data)} className='mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600' > 
                +Add 
                </button>


              </div>


            </div>
          )
          )
        }
      </div>

      {/* <div>
        {
          resMenu.map((data)=>{
            <div>
       
        <p>Name: {data?.card?.info?.name} </p>
        
      </div>
          })
        }
      </div> */}
    </div>
  )
}

export default CardsData

// og code 
// <div className=' p-10 m-10  ' > 
//         {
//           resMenu.map((data)=>
//           <div className='bg-slate-400 border-8 '>
//             <p> Name: {data?.card?.info?.name} </p>
//             <p>Itme: {data?.card?.info?.itemAttribute?.vegClassifier} </p>
//               Price: {data?.card?.info?.price/100}
//               <p> Rating: {data?.card?.info?.ratings?.aggregatedRating?.rating} </p>

//             <img className='h-24 rounded-lg'
//             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.card?.info?.imageId}`}
//             alt='Menu pic'
//             /> 
//             <button className='' > +Add </button>


//             </div>



//           )
//         }
//       </div>




// chatgtp code 
{/* <div className='p-6 m-6 pb-10 bg-white shadow-lg rounded-lg'>
  {resMenu.map((data, index) => (
    <div key={index} className='border-4 border-gray-200 rounded-lg p-4'>
      <div className='flex justify-between'>
        <div>
          <p className='text-lg font-semibold'>{data?.card?.info?.name}</p>
          <p className='text-gray-600 text-sm'>Item: {data?.card?.info?.itemAttribute?.vegClassifier}</p>
          <p className='text-gray-600 text-sm'>Price: ${data?.card?.info?.price / 100}</p>
          <p className='text-gray-600 text-sm'>Rating: {data?.card?.info?.ratings?.aggregatedRating?.rating}</p>
        </div>
        <img
          className='w-24 h-24 object-cover rounded-md'
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data?.card?.info?.imageId}`}
          alt='Menu pic'
        />
      </div>
      <button className='mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600'>
        + Add
      </button>
    </div>
  ))}
</div>
 */ }