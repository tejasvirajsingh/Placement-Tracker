import {
    FaHome,
    FaBook,
    FaBrain,
    FaStickyNote,
    FaChartPie,
    FaUser
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar(){

    return(

        <div className="w-64 bg-slate-900 min-h-screen p-6">

            <h1 className="text-3xl font-bold text-indigo-400 mb-10">
                PlaceMentor
            </h1>

            <div className="space-y-6">

                <Link to="/dashboard" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaHome />
                    Dashboard
                </Link>

                <Link to="/dsa" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaBook />
                    DSA
                </Link>

                <Link to="/aptitude" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaBrain />
                    Aptitude
                </Link>

                <Link to="/words" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaBook />
                    Words
                </Link>

                <Link to="/notes" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaStickyNote />
                    Notes
                </Link>

                <Link to="/analytics" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaChartPie />
                    Analytics
                </Link>

                <Link to="/profile" className="flex items-center gap-3 hover:text-indigo-400">
                    <FaUser />
                    Profile
                </Link>

            </div>

        </div>

    );

}

export default Sidebar;