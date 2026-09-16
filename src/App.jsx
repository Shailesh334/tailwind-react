import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { useState } from "react"

const App = () =>{

const [darkTheme , setDarkTheme] = useState("light")

return (

<div className={`${darkTheme} dark:text-black text-white`} >


<div className="min-h-screen bg-stone-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col justify-between transition-colors duration-300">  
  <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
  <Hero />
  <Footer/>   
</div>


</div>



)




}


export default App