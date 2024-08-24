import React from 'react'

const Searchbar = ({ onSearch = null }) => {
    return (
        <input type="text" className='w-[500px] text-lg  px-2 py-1 rounded text-slate-700' placeholder='Search anything...' />
    )
}

export default Searchbar
