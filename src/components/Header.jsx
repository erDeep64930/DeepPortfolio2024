import { useState } from "react";
import { navMenu } from "../constant/constant"
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa"


export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl">

      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">

        {/* logo section */}

        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white ">
            Deep Portfolio
          </span>
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(prev => !prev)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        {/* navMenu */}

        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
            }`}>
          {
            navMenu.map(({ title, path }) => {
              return (

                <li className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer" key={title}>
                  <Link
                    to={path}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="text-white hover:text-primary duration-500"
                  >
                    {title}
                  </Link>
                </li>

              )
            })
          }
        </ul>

      </div>


    </div>
  )
}
