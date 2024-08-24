import React from 'react'
import SwitchAction from '../switch-action/SwitchAction'
import { RxDropdownMenu } from 'react-icons/rx'

const SwichLanguage = () => {
    return (
        <SwitchAction icon={<RxDropdownMenu className='text-2xl' />} label="English" switchHandler={null} />
    )
}

export default SwichLanguage