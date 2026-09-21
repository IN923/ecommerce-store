import { React, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'

function SideBar({showSidebar,handleShowSidebar}) {
  console.log("show sidebar",showSidebar)
  console.log("show sidebar prop",handleShowSidebar)
  return (
    <>
      <div>
        {/* overlay */}
        <div className={`fixed inset-0 bg-black/25 z-30 ${showSidebar ? 'block' : 'hidden'}`}></div>


        <div className={`fixed top-0 bottom-0 left-0 z-40 bg-white w-4/5 md:w-5/10 py-8 px-6 lg:block lg:static lg:min-w-3xs overflow-y-auto lg:h-7/10 text-gray-800 ${showSidebar ? 'block' : 'hidden'}`}>

          <div className='flex justify-between'>
            <h5 className='font-semibold font-serif text-lg mb-5 lg:hidden'>Filters</h5>
            <X className='w-4 h-4 inline-block lg:hidden' onClick={handleShowSidebar} />
          </div>

          <h6 className='font-semibold text-sm tracking-wide mb-4'>CATEGORIES</h6>
          <ul className='text-sm px-3'>
            <li className='mb-4'>All Products</li>
            <li className='mb-4'>Fruits</li>
            <li className='mb-4'>Vegetables</li>
            <li className='mb-4'>Herbs</li>
            <li className='mb-4'>Berries</li>
            <li className='mb-4'>Tropical</li>
          </ul>

          <h6 className='font-medium text-sm tracking-wide mb-4'>PRICE RANGE</h6>
          <div className='px-3 mb-4'>
            <div className='mb-2'>
              <div>
                <input className='w-full' type="range" />
              </div>
              <div className='flex text-sm justify-between'>
                <span>$0.00</span>
                <span>Up to $10.00</span>
              </div>
            </div>

            <div className='mb-2'>
              <div>
                <input className='w-full' type="range" />
              </div>
              <div className='flex text-sm justify-between'>
                <span>$0.00</span>
                <span>Up to $10.00</span>
              </div>
            </div>

            <div className='mb-2'>
              <div>
                <input className='w-full' type="range" />
              </div>
              <div className='flex text-sm justify-between'>
                <span>$0.00</span>
                <span>Up to $10.00</span>
              </div>
            </div>

          </div>

          <h6 className='font-medium text-sm tracking-wide mb-4'>Preferences</h6>
          <div className='px-3 text-sm'>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>
            <div className='flex items-center mb-3'>
              <input type="checkbox" className='size-4' />
              <label className='ml-2'>Organic Only</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
