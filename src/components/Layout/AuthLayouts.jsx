/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
const AuthLayouts = ({ children, title, type }) => {
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    {console.log(isDarkMode)}
    return (
        <div className={`flex justify-center items-center min-h-screen ${isDarkMode && "bg-slate-900"}`}>
            <div className='w-full max-w-xs'>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="absolute top-2 right-2 p-2 bg-blue-500 rounded-md text-white">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <h1 className='text-blue-500 font-bold text-3xl mb-2'>{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details
                </p>
                {children}
                <p className="text-center text-slate-500 mt-4">
                    {type === "login" ? "Don't have an account ? " : "Already have an account ? "}
                    {type === "login" ? (<Link className="text-blue-600 font-semibold" to="/register">Register</Link>) : (<Link className="text-blue-600 font-semibold" to="/login">Login</Link>)}
                </p>
            </div>
        </div>


    );
}

export default AuthLayouts