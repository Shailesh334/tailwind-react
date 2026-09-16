const Hero = ()=>{

    const cards = Array.from({ length: 12 }, (_, i) => `Card ${i + 1}`);

    return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 grow gap-4 p-6 text-2xl text-white dark:text-black text-center ">
        {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white text-slate-800 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-md cursor-pointer transition-all duration-300 hover:scale-105 rounded-xl p-8"
        >
          {card}
        </div>
      ))}
    </div>


    )

}

export default Hero