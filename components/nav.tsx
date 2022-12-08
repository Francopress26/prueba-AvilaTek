/* eslint-disable prettier/prettier */

import Link from 'next/link';
import { BiLogIn } from 'react-icons/bi';
import { IoMdCart } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../public/logo.png';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-2  h-20 ">
      <img src={logo.src} alt="logo" className="w-40 h-full" />
      <div className=" flex w-2/5 ">
        <input
          type="text"
          className=" border-0 border-b border-gray-300 w-full"
        />
        <AiOutlineSearch size={25} className="text-gray-400" />
      </div>

      <div className="flex justify-between w-1/4">
        <Link href="/products" className=" text-xl text-gray-400 m-1">
          Productos
        </Link>
        <Link href="/" className="text-xl text-gray-400 m-1">
          Inicio
        </Link>
        <Link href="/">
          <IoMdCart size={30} className="text-gray-400 m-1" />
        </Link>
        <Link href="/">
          <BiLogIn size={30} className="text-gray-400 m-1" />
        </Link>
      </div>
    </nav>
  );
}
