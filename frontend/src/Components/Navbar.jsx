function Navbar(){
    return(
        <>
        <nav className="bg-surface-a10 border-b-1 border-primary-a0">
            <div className="px-5 flex flex-wrap items-center justify-between mx-auto h-12">
                <a href="#" className="flex">
                    <i className="fa-brands fa-github text-3xl text-white"></i>
                </a> 
                <form className="flex items-center max-w-sm w-80">   
                    <div className="relative w-full">
                        <input type="text" id="simple-search" style={{fontFamily:"Arial, FontAwesome"}} className="bg-surface-a20 h-8 text-white placeholder-neutral-400 rounded-full block w-full p-3  shadow-[0_0_1px_1px] shadow-primary-a0 hover:shadow-[0_0_4px_1px] focus:shadow-[0_0_4px_1px] duration-150 focus:outline-none" placeholder=" &#xF002; Search" />
                    </div>
                </form>
                <i className="fa-regular fa-user text-2xl text-white"></i>
            </div>
        </nav>
        </>
    );
}

export default Navbar
