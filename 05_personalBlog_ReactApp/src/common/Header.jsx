import '../index.css'

import { NavLink } from 'react-router-dom'

// max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"


export default function Navbar() {
    return (
        <header className='bg-blue-600 text-white shadow-md'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                <h2 className='text-2xl font-bold'> Logo </h2>

                {/* Navigation */}
                <nav>
                    <ul className='flex space-x-6'>
                        <li>
                            <NavLink to=''>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='blog'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='newsletter'>Newsletter</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}