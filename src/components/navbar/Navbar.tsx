import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { LiaHeadphonesSolid } from 'react-icons/lia'
import { MdArrowDropDown, MdCompareArrows } from 'react-icons/md'
import { PiDeviceRotate, PiPhoneCallThin, PiWarningCircleLight } from 'react-icons/pi'
import { RxDropdownMenu } from 'react-icons/rx'

const Navbar = () => {


  return (
    <div className='bg-white h-[4.8rem] flex justify-center items-center border'>
      <div className='flex gap-4 w-[1550px] justify-between'>
      <div className='flex gap-8 text-slate-700'>
        <div className='flex gap-2 items-center border px-1.5 py-1'>
          <div>
            All Category
          </div>
          <MdArrowDropDown className='text-3xl text-slate-500'/>
        </div>
        <div className='flex gap-2 items-center'>
          <CiLocationOn className='text-2xl text-slate-500'/>
          <div>
            Track
          </div>
        </div>
        
        <div className='flex gap-2 items-center'>
        <MdCompareArrows  className='text-2xl text-slate-500'/>
          <div>
            Compare
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <LiaHeadphonesSolid className='text-2xl text-slate-500'/>
          <div>
            Customer Support
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <PiWarningCircleLight className='text-2xl text-slate-500'/>
          <div>
            Need Help?
          </div>
        </div>
      </div>
      <div className='gap-2 text-lg flex items-center text-slate-500'><PiPhoneCallThin className='text-2xl'/> +1-293-4556-85</div>
      </div>
    </div>
  )
}

export default Navbar
