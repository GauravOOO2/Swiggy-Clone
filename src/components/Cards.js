import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
    const {name, location,image,id} = props


  return (
    <div className='w-64 h-72 mx-5  my-8 bg-white shadow-md rounded-lg overflow-hidden ' >
        <div className='' >
          <Link to={'/CardData/'+id} >
            <img className=' h-48 w-full object-cover '
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
            alt='Restaurents'
            />
            </Link>
        </div>
        <div>
        <h2 className='text-xl font-semibold text-gray-800 hover:text-red-600 transition duration-300 cursor-pointer	pl-2 '>
          Name: {name}</h2>

        
        <p className='text-gray-600 mt-1 pl-2.5 ' >location: {location}</p>
        </div>
      
    </div>
  )
}

export const wowCard=(Cardlist)=>{
  return(props)=>{
    return(
      <div className='relative' >
        <label className='bg-red-600 text-white py-1 px-3 absolute top-2 left-2 z-10 rounded-md text-lg' >Hot</label>
        <Cardlist {...props} />
      </div>
    )
  }
}

export default Cards