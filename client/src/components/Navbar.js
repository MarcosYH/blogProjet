import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className=" border-b-4 border-green-900 fixed top-0 bg-green-600 font-bold w-full text-lg text-white text-center p-4">
      <ul>
        <li className=' inline-block '>
            <Link to='/' className='pl-6 pr-8'>
                Home
            </Link>
        </li>
      <li className=' inline-block '>
            <Link to='/about' className=' pl-6 pr-8'>
                About
            </Link>
        </li>
      <li className=' inline-block '>
            <Link to='/articles/:name' className=' pl-6 pr-8'>
                Articles
            </Link>
        </li>
      <li className=' inline-block '>
            <Link to='/articles-Liste' className=' pl-6 pr-8'>
                ArticlesListe
            </Link>
        </li>
      </ul>
    </nav>
  );
}
