/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-xs'>
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