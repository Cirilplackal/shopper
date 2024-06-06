import React from 'react'
import SubHeader from './SubHeader'
import MainHeader from './MainHeader'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='w-full bg-black flex justify-center items-center'>
        <div className='w-[1550px]'>
        <SubHeader/>
        <MainHeader/>
        </div>
    </div>
  )
}

export default Header
