import React from 'react'
import SocialLinks from './SocialLinks'
import SwitchLanguage from './SwitchLanguage'
import SwichCurrency from './SwichCurrency'

const SubHeader = () => {
    return (
        <div className='h-[3.25rem] bg-black  w-full flex justify-between items-center  text-white'>
            <div>Welcome to online ecommerce store</div>
            <div className='flex gap-6'>
                <SocialLinks />
                <SwitchLanguage />
                <SwichCurrency />
            </div>
        </div>
    )
}

export default SubHeader
