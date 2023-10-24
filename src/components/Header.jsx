import { ShoppingCartIcon } from '@heroicons/react/outline'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectItems } from '../app/slices/basketSlice';

const Header = () => {
    const items = useSelector(selectItems);

    console.log(items.length)
  return (
    <div className='flex justify-between items-center '>
        <h1 className='text-green-400 text-3xl'>Welcome to store</h1>
        <div className='relative'>
     <Link to='/cart'><ShoppingCartIcon className="h-10 self-end " />
     <span className="absolute -top-1 left-7 md:right-10 text-center bg-yellow-500 text-black rounded-full h-6 w-6 font-bold ">
                            {items.length}
                        </span>
     </Link></div>
    </div>
  )
}

export default Header