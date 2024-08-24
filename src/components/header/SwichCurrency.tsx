import React from 'react'
import SwitchAction from '../switch-action/SwitchAction'
import { RxDropdownMenu } from 'react-icons/rx'

const SwichCurrency = () => {
    return (
        <SwitchAction icon={<RxDropdownMenu className='text-2xl' />} label="USD" switchHandler={null} />    )
}

export default SwichCurrency
