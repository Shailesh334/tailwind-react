import { useState } from "react"

const Navbar = ()=>{

    const [open , setOpen] = useState(false);
    return (
    <>
    <div className="flex justify-between items-center bg-slate-800 text-white p-5 sticky z-10 top-0 ">
        <div className="text-xl ">
            Logo
        </div>

        {/* Desktop nav links */}
        <div className="hidden sm:flex gap-6">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button className="sm:hidden text-white text-xl cursor-pointer" onClick={()=> setOpen(!open)}>
           ☰
        </button>
        

    </div>
    
    {/* Mobile nav links */}
    {open && 
    <div className="sm:hidden flex flex-col items-center gap-3 p-3 bg-slate-800 text-white">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
    </div>
    }
    </>
    )

}

export default Navbar