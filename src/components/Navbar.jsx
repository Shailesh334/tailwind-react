import { useState } from "react"

const Navbar = ({darkTheme , setDarkTheme})=>{

    const [open , setOpen] = useState(false);
    return (
    <>
    <div className="flex justify-between items-center bg-white text-black dark:bg-slate-800 dark:text-white p-5 sticky z-10 top-0 ">
        <div className="text-xl ">
            Logo
        </div>

        {/* Desktop nav links */}
        <div className="hidden sm:flex gap-6 sm:justify-center sm:items-center">
            <button className=" w-9 h-8 text-white text-xl cursor-pointer" onClick={()=> darkTheme == "dark" ? setDarkTheme("light") : setDarkTheme("dark")}>
            {darkTheme == "dark" ?   <img src="https://img.icons8.com/?size=100&id=BLH852a7CpTm&format=png&color=000000"></img> : <img src="https://img.icons8.com/?size=100&id=21419&format=png&color=000000"></img>  }
            </button>
            <p clas>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
       
        <div className="sm:hidden flex items-center gap-6">
         <button className="sm:hidden w-9 h-8.  mt-1 text-white text-xl cursor-pointer" onClick={()=> darkTheme == "dark" ? setDarkTheme("light") : setDarkTheme("dark")}>
          {darkTheme == "dark" ?   <img src="https://img.icons8.com/?size=100&id=BLH852a7CpTm&format=png&color=000000"></img> : <img src="https://img.icons8.com/?size=100&id=21419&format=png&color=000000"></img>  }
        </button>
        {/* Mobile Hamburger Button */}
        <button className="sm:hidden dark:text-white text-xl cursor-pointer" onClick={()=> setOpen(!open)}>
           ☰
        </button>
        </div>

    </div>
    
    {/* Mobile nav links */}
    {open &&
    <div className="sm:hidden sticky z-10 top-15 flex flex-col items-center gap-3 p-3  bg-white text-black dark:bg-slate-800 dark:text-white">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
    </div>
    }
    </>
    )

}

export default Navbar