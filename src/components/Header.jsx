import { React, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { Leaf, User, ShoppingCart, Menu, X } from 'lucide-react';

function Header() {

    const [showMenu, setShowMenu] = useState(true)
    // const [closeMenu, setCloseMenu] = useState(false)

    const toggleMenu = (e) => {
        e.preventDefault()
        if (showMenu) {
            setShowMenu(false)
        }
        else{
            setShowMenu(true)
        }
        // setShowMenu(prevData=>!prevData)
        // setCloseMenu(true)
    }

    // = -> showMenuIcon=true(show) x -> closeMenuIcon=false(hide)
    // = ->showMenuIcon=false(hide) x -> closeMenuIcon=true(show)

    useEffect(() => {
        console.log("showMenu=", showMenu)
    }, [showMenu])

    return (
        <>

            <div>
                <p className="bg-green-700 text-white text-center pt-2 pb-1 font-medium">Free delivery on orders over $50 — Fresh produce delivered to your door</p>
            </div>
            <header className='sticky top-0 z-20 bg-white'>
                <div className='flex flex-row p-4 justify-between items-center'>
                    <div className="flex flex-row gap-1.5 items-center">
                        <div className="bg-green-700 rounded-xl px-2 py-2">
                            <Leaf color="#fff" strokeWidth={2.5} />
                        </div>
                        <div className='text-xl font-bold font-serif'>
                            Bazaar
                        </div>
                    </div>

                    <nav className='flex flex-row items-center text-sm text-gray-600 font-medium lg:gap-8'>
                            <ul className={`flex flex-col justify-start items-start gap-8 absolute top-20 left-0 right-0 pl-5 pb-5 lg:pb-0 lg:flex lg:flex-row 
                                lg:static z-1 bg-white w-full lg:justify-end lg:pl-0 ${showMenu ? 'hidden' : 'flex'}`}>
                                {/* 7th september w */}

                                <li>
                                    <NavLink to="">
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="">
                                        Shop All
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="">
                                        Fruits
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="">
                                        Vegetables
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="">
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                        <ul className="flex flex-row items-center justify-center gap-8">
                            <li>
                                <Link to="/signup" className='flex flex-row flex-nowrap gap-2'><User className='inline-block'/><span className='hidden whitespace-nowrap lg:block'>Sign In</span></Link>
                            </li>

                            <li>
                                <Link> <ShoppingCart /> </Link>
                            </li>

                            <li className={`pt-1.5`}>
                                <button className={`${showMenu ? 'inline-block' : 'hidden'} lg:hidden`} onClick={toggleMenu}><Menu /></button>
                                <button className={`${showMenu ? 'hidden' : 'inline-block'} lg:hidden`} onClick={toggleMenu}> <X /> </button>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header
