import React, { useState } from 'react'
import logo from '/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false)
  return (
    

<nav class="bg-white border-gray-200 shadow-xl text-[#4A5568] flex items-center justify-between w-full relative">
    
<div className=" flex items-center gap-0">
        <img src={logo} alt="logo image" width={100} height={100}/>
        <div className=' font-bold text-[24px] flex items-center gap-0 ml-[-15px]'> <span className=' text-[#46A1DA]'>Snow</span><span className=' text-black'>Panda</span></div>
                  </div>

                  <div className="ham">
                    <h2 className='flex lg:hidden cursor-pointer mr-10' onClick={()=>setOpenNavbar(true)}><GiHamburgerMenu style={{fontSize:'32px'}}/></h2>

                {openNavbar? <ul className='  items-center gap-9 w-full justify-center text-center flex-col font-bold flex fixed top-0 left-0 bg-white z-50 p-10 min-w-full lg:hidden'>
                    <div className=' absolute right-4 top-2 cursor-pointer text-black' onClick={()=>setOpenNavbar(false)}><RxCross2 style={{fontSize:'32px'}}/></div>
        <li className=' cursor-pointer px-3 py-3 bg-black text-white rounded-lg hover:bg-slate-300 w-full hover:text-black'>Find an Opportunity</li>
        <li className=' cursor-pointer hover:bg-slate-300 w-full py-3'>Employer</li>
        <li className=' cursor-pointer hover:bg-slate-300 w-full py-3'>About</li>
        <li className=' cursor-pointer  hover:bg-slate-300 w-full py-3'>Contact</li>
        </ul>:''}
                  </div>

        <ul className='  items-center gap-9 mr-14 font-bold hidden lg:flex'>
        <li className=' cursor-pointer px-3 py-2 bg-black text-white rounded-lg'>Find an Opportunity</li>
        <li className=' cursor-pointer'>Employer</li>
        <li className=' cursor-pointer'>About</li>
        <li className=' cursor-pointer'>Contact</li>
        </ul> 
   
</nav>

  )
}

export default Navbar