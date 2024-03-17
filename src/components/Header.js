import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex shadow-xl justify-between' >
        <div>
            <Link to='/' >
            <img  className=' h-[3rem] m-3'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png'
            alt='Logo'
            />
            </Link>
        </div>
        <div className='m-2 p-2 ' >
        <button className=' text-lg font-serif text-amber-600 p-2' >  <Link to='/' > Home</Link> </button>
        <button className=' text-lg font-serif text-amber-600 p-2' > <Link to='/Signin'> Sign In </Link></button>
      <button className=' text-lg font-serif text-amber-600 p-2' >  <Link to='/Cart' > Cart</Link> </button>
   
        </div>
   
   
    </div>
  )
}

export default Header