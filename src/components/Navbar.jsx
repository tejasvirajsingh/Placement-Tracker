function Navbar(){

    return(

        <div className="bg-slate-800 h-20 flex justify-between items-center px-8 shadow">

            <h2 className="text-2xl font-bold">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-slate-700 px-4 py-2 rounded-lg outline-none"
                />

                <img
                    src="https://i.pravatar.cc/40"
                    className="rounded-full"
                />

            </div>

        </div>

    )

}

export default Navbar;