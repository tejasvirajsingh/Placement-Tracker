function Card({title,value}){

    return(

        <div className="bg-slate-800 p-6 rounded-xl shadow">

            <h3 className="text-gray-400">
                {title}
            </h3>

            <h1 className="text-4xl font-bold mt-4">
                {value}
            </h1>

        </div>

    )

}

export default Card;