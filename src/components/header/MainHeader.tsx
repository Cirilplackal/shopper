import React from 'react'
import { FaRocket } from 'react-icons/fa'
import Searchbar from '../searchbar/Searchbar'
import { BsCart3 } from 'react-icons/bs'
import { GoHeart } from 'react-icons/go'
import { PiUser } from 'react-icons/pi'

const MainHeader = () => {
    return (
        <div className='py-2 border border-b-0 border-l-0 border-r-0 border-t-0.5 border-slate-700 flex justify-between items-center'>
            <div className='text-4xl text-white flex gap-2'>
                <FaRocket /> FlyKart
            </div>
            <Searchbar />
            <div className='text-white flex gap-4 text-2xl'>
                <BsCart3 />
                <GoHeart />
                <PiUser />
            </div>
        </div>
    )
}

export default MainHeader
