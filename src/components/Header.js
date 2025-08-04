import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/logo jc.png';
export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between px-5 py-1 bg-primary ">
        <a className="font-bold text-white" href="#"><img src={logo} width="60px" ></img></a>
        <nav className="hidden md:block">
            <ul className="flex text-white py-3 font-bold space-x-9 ">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
       {toggleMenu && (
                <nav className="absolute top-16 right-5 md:hidden bg-primary text-white rounded-lg p-4 shadow-lg">
                    <ul className="flex flex-col space-y-3 font-bold">
                        <li><a onClick={() => setToggleMenu(false)} href="#home">Home</a></li>
                        <li><a onClick={() => setToggleMenu(false)} href="#about">About</a></li>
                        <li><a onClick={() => setToggleMenu(false)} href="#projects">Projects</a></li>
                        <li><a onClick={() => setToggleMenu(false)} href="#resume">Resume</a></li>
                        <li><a onClick={() => setToggleMenu(false)} href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}