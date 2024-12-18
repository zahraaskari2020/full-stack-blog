import { useState } from "react";


const Navbar = () => {

    const [open, setOpen] =  useState(false);
    
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>Logo</span>
      </div>
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl">
            {open ? "X" : "☰"}
        </div>
      </div>
      <div className="hidden md:flex">D</div>
    </div>
  )
}

export default Navbar
