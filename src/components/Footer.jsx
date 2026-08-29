import React from 'react'
import { Mail, Send, Leaf, MapPin, Phone, } from 'lucide-react'
import { SiFacebook, SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className='border-b border-gray-800 '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <div className="flex justify-between gap-10 flex-col md:flex-row font-serif md:items-center">
                        <div>
                            <h3 className='text-2xl text-white font-semibold pb-2'>
                                Stay fresh with our newsletter
                            </h3>

                            <p className='text-gray-400 font-extralight text-sm'>
                                Subscribe for seasonal deals, new arrivals, and exclusive discounts.
                            </p>
                        </div>

                        {/* newsletter */}
                        <div className='flex-1 max-w-lg w-full'>
                            <form className="flex gap-3 md:min-w-xs">
                                <div className="flex-1 relative max-w-xl">
                                    <Mail width="20" height="20" className="text-gray-400 absolute left-2 top-3.5" />
                                    <input type="email" placeholder="Enter your email" className="w-full bg-gray-800 text-sm font-sans border 
                            border-gray-700 placeholder-gray-500 pl-10 pt-3 pb-3 rounded-lg" />
                                </div>
                                <button className="bg-green-600 rounded-lg h-11.5 px-4 flex flex-nowrap items-center gap-2">Subscribe <Send size={18} className='inline-block' /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-b border-gray-800'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                        {/* col1 */}
                        <div className="col-span-2">
                            <div className="flex flex-row gap-1.5 items-center">
                                <div className="bg-green-700 rounded-xl px-2 py-2">
                                    <Leaf color="#fff" strokeWidth={2.5} />
                                </div>
                                <div className='text-xl font-bold font-serif'>
                                    Bazaar
                                </div>
                            </div>

                            <p className='py-2 text-gray-400 text-base max-w-md'>
                                Your trusted multi-vendor marketplace for fresh, organic produce. We connect you directly with local farms for the freshest food possible.
                            </p>

                            <div>
                                <div className='flex items-center gap-2 text-sm text-gray-400 pb-2'>
                                    <MapPin size={18} className='text-green-600' /> 123 Market Street, Fresh City, FC 12345
                                </div>

                                <div className='flex items-center gap-2 text-sm text-gray-400 pb-2'>
                                    <Phone size={18} className='text-green-600' /> +1 (555) 123-4567
                                </div>

                                <div className='flex items-center gap-2 text-base text-gray-400 pb-2'>
                                    <Mail size={18} className='text-green-600' /> hello@bazaar.market
                                </div>
                            </div>

                        </div>

                        {/* col2 */}
                        <div>
                            <h3 className='font-semibold text-sm pb-4'>SHOP</h3>
                            <ul className='text-gray-400 text-sm font-sans space-y-2.5'>
                                <li className='pb-2'>All Products</li>
                                <li className='pb-2'>Fruits</li>
                                <li className='pb-2'>Vegetables</li>
                                <li className='pb-2'>Herbs</li>
                                <li className='pb-2'>Berries</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold text-sm pb-4'>COMPANY</h3>
                            <ul className='text-gray-400 text-sm font-sans space-y-2.5'>
                                <li className='pb-2'>About Us</li>
                                <li className='pb-2'>Contact</li>
                                <li className='pb-2'>Carrers</li>
                                <li className='pb-2'>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold text-sm pb-4'>SUPPORT</h3>
                            <ul className='text-gray-400 text-sm font-sans space-y-2.5'>
                                <li className='pb-2'>Help Center</li>
                                <li className='pb-2'>Shipping</li>
                                <li className='pb-2'>Returns</li>
                                <li className='pb-2'>Privacy Policy</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between'>
                {/* company name */}
                <div>
                    &copy; Bazaar.All rights reserved.
                </div>
                
                {/* social links */}
                <div className='flex gap-4 items-center'>
                    <div>
                        {/* facebook */}
                        <SiFacebook title="Visit us on Facebook" size={24} />
                    </div>

                    <div>
                        <SiInstagram size={24} />
                    </div>

                    <div>
                         <SiX size={18}/>
                    </div>

                    <div>
                        <SiYoutube size={24} title="YouTube" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
