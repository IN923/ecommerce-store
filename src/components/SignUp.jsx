import React from 'react'
import { Leaf, Mail, Lock, Eye, MoveRight } from 'lucide-react'

function SignUp() {
    return (
        <>
            <div className='flex flex-col items-center gap-8'>
                <div className="flex flex-row gap-1.5 items-center">
                    <div className="bg-green-700 rounded-xl px-2 py-2">
                        <Leaf color="#fff" strokeWidth={2.5} />
                    </div>
                    <div className='text-xl font-bold font-serif'>
                        Bazaar
                    </div>
                </div>

                <div>
                    <h1 className='font-display font-bold font-serif tracking-tight text-center text-3xl'>Welcome back</h1>
                    <p className='text-sm mt-2 text-gray-500 text-center'>Sign in to your account to continue shopping.</p>
                </div>

                <div className='bg-white border border-gray-200 min-w-xs md:min-w-sm px-6 py-6 rounded-2xl'>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor="email" className='text-gray-800 text-sm  font-normal'>Email</label>
                            <div className='relative '>
                                <Mail color="#C0C4CB" className='absolute top-5 left-3 w-4 h-4' />
                                <input type="email" placeholder='you@example.com' className='w-full border border-gray-300 px-10 py-3 text-sm rounded-lg min-w-2xs bg-gray-50 font-medium focus:border-green-500 outline-none mt-1' />
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="email" className='text-gray-800 text-sm font-normal'>Password</label>
                            <div className='relative '>
                                <Lock color="#C0C4CB" className='absolute top-5 left-3 w-4 h-4' />
                                <input type="password" placeholder='Your password' className='w-full border border-gray-300 px-10 py-3 text-sm rounded-lg min-w-2xs bg-gray-50 font-medium focus:border-green-500 outline-none mt-1' />
                                <Eye color="#C0C4CB" className='absolute top-5 right-3 w-4 h-4' />
                            </div>
                        </div>

                        <div className='mb-4'>
                            <button className='text-white font-semibold w-full py-2 bg-green-600 rounded-lg mb-4'>Sign In <MoveRight className='inline-block w-5 h-5' /></button>

                            <p className='text-sm text-center'>Don't have an account? <span className='text-green-600 font-semibold'>Sign up</span></p>
                        </div>
                    </form>
                </div>

                <p className='text-xs text-center text-gray-500 tracking-tighter mx-4 md:mx-0'>By continuing, you agree to our Terms of Service and Privacy Policy.</p>

            </div>
        </>
    )
}

export default SignUp
