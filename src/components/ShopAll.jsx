import { React, useState } from 'react'
import Sidebar from './SideBar'
import SearchBar from './SearchBar';
import { Star, Plus } from 'lucide-react'

function ShopAll() {

    const [showSidebar, setShowSidebar] = useState(false)
    const handleShowSidebar = (e) => {
        e.preventDefault()
        console.log("show sidebar")
        setShowSidebar(prevShowSidebar => !prevShowSidebar)
    }

    return (
        <div className='mx-4 xl:px-30 py-5'>
            <div>
                <h1 className='text-3xl font-bold font-sans mb-3'>All Products</h1>
                <p className='text-gray-500 mb-5'>Browse our full selection of fresh, organic produce.</p>
            </div>
            <div className='flex flex-row md:gap-8'>
                <Sidebar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
                <div className='w-full'>
                    <SearchBar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-6'>
                        <div className='rounded-b-xl shadow-sm'>
                            <div className='w-full'>
                                <img className='w-full h-80 object-cover rounded-t-xl border border-gray-50' src="https://images.pexels.com/photos/35525568/pexels-photo-35525568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            </div>

                            <div className='px-3 pt-4'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between text-xs'>
                                        <span><Star color='#FB923C' className='inline-block w-4 h-4 fill-orange-400' /> 4.9 <span className='text-gray-400'>(203)</span></span>
                                        <span className='text-gray-400'>Sunny Orchards</span>
                                    </div>

                                    <p className='text-sm font-semibold py-0.5'>Vibrant Capsicums</p>
                                    <p className='text-xs text-gray-500 tracking-tighter'>Crisp and colorful bell peppers. Perfect for salads, fajitas, and stir-fry.</p>
                                </div>

                                <div className='grid grid-cols-2 pt-3 w-full h-full my-2'>
                                    <div>
                                        <span className='text-xl tracking-wide font-semibold'>$3.50</span>
                                        <span className='line-through text-gray-400 text-xs pl-2'>$4.25</span>
                                        <div className='text-xs text-gray-400'>per kg</div>
                                    </div>


                                    <div className='justify-self-end self-end'>
                                        <div className='w-fit bg-green-100 px-2 py-2 rounded-xl'>
                                            <Plus color="#16A34A" width='16' height='16' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='rounded-b-xl shadow-sm'>
                            <div className='w-full'>
                                <img className='w-full h-80 object-cover rounded-t-xl border border-gray-50' src="https://images.pexels.com/photos/35525568/pexels-photo-35525568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            </div>

                            <div className='px-3 pt-4'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between text-xs'>
                                        <span><Star color='#FB923C' className='inline-block w-4 h-4 fill-orange-400' /> 4.9 <span className='text-gray-400'>(203)</span></span>
                                        <span className='text-gray-400'>Sunny Orchards</span>
                                    </div>

                                    <p className='text-sm font-semibold py-0.5'>Vibrant Capsicums</p>
                                    <p className='text-xs text-gray-500 tracking-tighter'>Crisp and colorful bell peppers. Perfect for salads, fajitas, and stir-fry.</p>
                                </div>

                                <div className='grid grid-cols-2 pt-3 w-full h-full my-2'>
                                    <div>
                                        <span className='text-xl tracking-wide font-semibold'>$3.50</span>
                                        <span className='line-through text-gray-400 text-xs pl-2'>$4.25</span>
                                        <div className='text-xs text-gray-400'>per kg</div>
                                    </div>


                                    <div className='justify-self-end self-end'>
                                        <div className='w-fit bg-green-100 px-2 py-2 rounded-xl'>
                                            <Plus color="#16A34A" width='16' height='16' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='rounded-b-xl shadow-sm'>
                            <div className='w-full'>
                                <img className='w-full h-80 object-cover rounded-t-xl border border-gray-50' src="https://images.pexels.com/photos/35525568/pexels-photo-35525568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            </div>

                            <div className='px-3 pt-4'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between text-xs'>
                                        <span><Star color='#FB923C' className='inline-block w-4 h-4 fill-orange-400' /> 4.9 <span className='text-gray-400'>(203)</span></span>
                                        <span className='text-gray-400'>Sunny Orchards</span>
                                    </div>

                                    <p className='text-sm font-semibold py-0.5'>Vibrant Capsicums</p>
                                    <p className='text-xs text-gray-500 tracking-tighter'>Crisp and colorful bell peppers. Perfect for salads, fajitas, and stir-fry.</p>
                                </div>

                                <div className='grid grid-cols-2 pt-3 w-full h-full my-2'>
                                    <div>
                                        <span className='text-xl tracking-wide font-semibold'>$3.50</span>
                                        <span className='line-through text-gray-400 text-xs pl-2'>$4.25</span>
                                        <div className='text-xs text-gray-400'>per kg</div>
                                    </div>


                                    <div className='justify-self-end self-end'>
                                        <div className='w-fit bg-green-100 px-2 py-2 rounded-xl'>
                                            <Plus color="#16A34A" width='16' height='16' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='rounded-b-xl shadow-sm'>
                            <div className='w-full'>
                                <img className='w-full h-80 object-cover rounded-t-xl border border-gray-50' src="https://images.pexels.com/photos/35525568/pexels-photo-35525568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            </div>

                            <div className='px-3 pt-4'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between text-xs'>
                                        <span><Star color='#FB923C' className='inline-block w-4 h-4 fill-orange-400' /> 4.9 <span className='text-gray-400'>(203)</span></span>
                                        <span className='text-gray-400'>Sunny Orchards</span>
                                    </div>

                                    <p className='text-sm font-semibold py-0.5'>Vibrant Capsicums</p>
                                    <p className='text-xs text-gray-500 tracking-tighter'>Crisp and colorful bell peppers. Perfect for salads, fajitas, and stir-fry.</p>
                                </div>

                                <div className='grid grid-cols-2 pt-3 w-full h-full my-2'>
                                    <div>
                                        <span className='text-xl tracking-wide font-semibold'>$3.50</span>
                                        <span className='line-through text-gray-400 text-xs pl-2'>$4.25</span>
                                        <div className='text-xs text-gray-400'>per kg</div>
                                    </div>


                                    <div className='justify-self-end self-end'>
                                        <div className='w-fit bg-green-100 px-2 py-2 rounded-xl'>
                                            <Plus color="#16A34A" width='16' height='16' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopAll;