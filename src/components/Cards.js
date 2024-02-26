import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
    const {name, location,image,id} = props


  return (
    <div className=' w-40 h-60 m-5 bg-gray-200 hover:border-2 border-solid border-black-800 cursor-pointer ' >
        <div w-40 h-20 p-1 >
          <Link to={'/CardData/'+id} >
            <img className=''
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
            alt='Restaurents'
            />
            </Link>
        </div>
        <div>
        Name: {name}
    location: {location}
        </div>
      
    </div>
  )
}

export const wowCard=(Cardlist)=>{
  return(props)=>{
    return(
      <div className='relative' >
        <label className='bg-red-800 p-2 absolute z-9 ml-4 rounded-lg' >wow</label>
        <Cardlist {...props} />
      </div>
    )
  }
}

export default Cards