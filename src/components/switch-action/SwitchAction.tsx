import React from 'react'

const SwitchAction = ({label,switchHandler, icon}) => {
    return (
        <div className='flex gap-2'>
            {label} {icon}
        </div>
    )
}

export default SwitchAction
