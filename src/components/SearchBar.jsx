import React from 'react'
import { SlidersHorizontal } from 'lucide-react'

function SearchBar({ showSidebar, handleShowSidebar }) {
    console.log("onclick showsidebar", showSidebar)
    return (
        <div className='flex items-center'>
            <div className='flex flex-row gap-4 mb-3 py-4 md:inline-block md:min-w-3xl md:mr-4 flex-1'>
                <button className='w-fit flex flex-row justify-center items-center border border-gray-300 p-2 rounded-xl bg-white font-normal md:hidden' onClick={handleShowSidebar} ><SlidersHorizontal className='inline-block w-5 h-5 mr-1' />Filters</button>
                <input className='w-full flex-1 outline-none border border-gray-300 rounded-xl px-2 focus:border-green-400 md:rounded-lg py-1.5' type="text" placeholder='Search products...' />
            </div>
            <select className='w-35 md:w-42 outline-none border border-gray-300 rounded-lg mb-3 px-4 py-2 focus:border-green-400 md:inline-block'>
                <option value="">Featured</option>
                <option value="">Featured</option>
                <option value="">Featured</option>
                <option value="">Featured</option>
            </select>
        </div>
    )
}

export default SearchBar
