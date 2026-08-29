import React from 'react'
import { Leaf, MoveRight, Plus, Truck, ShieldCheck, Star, TrendingUp } from 'lucide-react'

function Home() {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-2 md:gap-12 px-4 pt-2 lg:pt-8 lg:justify-center'>
                <div className='flex flex-col gap-8.5 pb-6 justify-center max-w-2xl xl:px-25'>
                    <div className='w-fit px-3 py-0.5 rounded-2xl bg-green-100'>
                        <Leaf className='w-4 h-4 inline-block text-green-800' />
                        <span className='ml-1 text-green-700 font-semibold text-sm'>100% Organic & Fresh</span>
                    </div>

                    <h1 className='text-4xl xl:text-6xl font-serif font-bold leading-tight text-balance'>
                        Fresh produce, delivered from local farms to your door
                    </h1>

                    <p className='text-lg'>
                        Shop the freshest fruits, vegetables, and herbs from trusted local vendors. Quality you can taste, prices you'll love.
                    </p>

                    <div className='flex gap-4 justify-start items-center'>
                        <button className='flex flex-row gap-2  flex-nowrap bg-green-500 px-5 py-4 border text-white font-semibold rounded-lg'>Shop Now <MoveRight /></button>

                        <button className='flex flex-row gap-2  flex-nowrap border border-gray-300 bg-white px-5 py-4 font-semibold rounded-lg'>Browse Fruits</button>
                    </div>

                    <div className='border-t border-gray-200 flex flex-row justify-between py-4'>
                        <p>
                            <span className='flex items-center'>
                                <span className='text-2xl font-semibold'>500</span>
                                <span><Plus className='inline-block' strokeWidth={2.25} width="20" height="20" /></span>
                            </span>
                            <span>Products</span>
                        </p>

                        <p>
                            <span className='flex items-center'>
                                <span className='text-2xl font-semibold'>500</span>
                                <span><Plus className='inline-block' strokeWidth={2.25} width="20" height="20" /></span>
                            </span>
                            <span>Products</span>
                        </p>

                        <p>
                            <span className='flex items-center'>
                                <span className='text-2xl font-semibold'>500</span>
                                <span><Plus className='inline-block' strokeWidth={2.25} width="20" height="20" /></span>
                            </span>
                            <span>Products</span>
                        </p>
                    </div>
                </div>

                <div className='w-full xl:max-w-xl'>
                    <img className='object-cover w-full h-full rounded-3xl' src="https://images.pexels.com/photos/28991058/pexels-photo-28991058.jpeg?auto=compress&cs=tinysrgb&h=900&w=700" alt="" />
                </div>
            </div>

            <section className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-around max-w-7xl mx-auto py-6 px-4 xl:px-20'>

                <div className='flex gap-2'>
                    <div className='p-2 rounded-xl bg-green-50 h-11'><Truck color="#16A34A" /></div>
                    <div>
                        <p className='font-bold text-sm'>Fast Delivery</p>
                        <p className='text-xs text-gray-500'>Same Day available</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className='p-2 rounded-xl bg-green-50 h-11'><Leaf color="#16A34A" /></div>
                    <div>
                        <p className='font-bold text-sm'>100% Organic</p>
                        <p className='text-xs text-gray-500'>Certified fresh</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className='p-2 rounded-xl bg-green-50 h-11'><ShieldCheck color="#16A34A" /></div>
                    <div>
                        <p className='font-bold text-sm'>Secure Payment</p>
                        <p className='text-xs text-gray-500'>Protected checkout</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className='p-2 rounded-xl bg-green-50 h-11'><Star color="#16A34A" /></div>
                    <div className='text-wrap'>
                        <p className='font-bold text-sm text-wrap'>Top Rated</p>
                        <p className='text-xs text-gray-500 text-wrap'>4.8/5 average rating</p>
                    </div>
                </div>

            </section>

            <section className='max-w-7xl mx-auto px-4 xl:pl-20 flex flex-col gap-2'>
                <span className='text-sm font-medium text-orange-600'><TrendingUp color="#EA580C" className='w-4 h-4 inline-block' /> FEATURED </span>
                <div className='flex justify-between'>
                    <h2 className='text-4xl font-bold font-serif'>Featured Products</h2>
                    <button className='text-base text-green-600 hidden md:block'>View All</button>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6'>
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

                    <div className='flex justify-center self-center md:hidden'>
                        <button className='bg-green-600 text-white text-sm px-3 py-1 rounded-lg'>View All</button>
                    </div>
                </div>
            </section>

            <div className='max-w-7xl mx-auto px-4 xl:px-0 xl:pl-20 xl:pr-4 relative mt-8 mb-2'>
                <div className='flex items-stretch bg-green-600 border-xl min-h-55 rounded-2xl'>
                    <div className='w-1/2 h-full border-l-xl'></div>
                    <div className='w-1/2'>
                        <img className='w-full h-full border-r-xl opacity-20 object-cover rounded-r-2xl' src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&h=600&w=600" />
                    </div>
                </div>

                <div className='max-w-2xl flex flex-col text-white bg-transparent absolute top-1/2 -translate-y-1/2 md:left-15 px-4 md:px-16'>
                    <p className='text-xl md:text-3xl font-bold font-serif mb-4'>Fresh deals every week</p>
                    <p className='text-lg mb-8'>Save up to 30% on seasonal produce. New deals drop every Monday.</p>
                    <div>
                        <button className='text-green-600 bg-white px-2 py-1 rounded-lg font-medium text-base'>Shop Deals <MoveRight className='inline-block w-4 h-4' /></button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
