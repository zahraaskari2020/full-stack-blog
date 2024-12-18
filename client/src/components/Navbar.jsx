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
        <div className="cursor-pointer text-4xl" onClick={()=> setOpen(prev => !prev)}>
            {open ? "X" : "☰"}
        </div>
        <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out
        ${open ? "-right-0" : "-right-[100%]"}`}>
          menu
        </div>
      </div>
      <div className="hidden md:flex">
        <a href="/">Home</a>
      </div>
    </div>
  )
}

export default Navbar
