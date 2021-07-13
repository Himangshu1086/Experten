import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/header/Header__for__home__page/Navbar'
function Sign__In() {
    return (
        <>
        <Navbar/>
        <div className="bg-black">
            <div className="absolute top-1/2 px-2  left-1/2 transform z-20  -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-4xl text-white text-center  tracking-widest font-bold ">Sign In</h1><br/>
            <form method="POST" className="w-96 bg-transparent flex flex-col justify-center">
                 <input className="my-1 text-center text-white tracking-wider" type="text" placeholder="mobile number"></input>
                 <input className="my-1 text-center text-white tracking-wider" type="password" placeholder="password"></input><br/>
                 <button className=" p-2 bg-blue-400 tracking-wider hover:bg-blue-500 font-bold rounded-sm" >Log In</button>
            </form>
                 <Link to="/signup"><h1 className="mt-4 tracking-widest text-white font-bold text-xl" > Create Account</h1></Link>
                 <h1 className=" tracking-widest text-sm text-blue-400 hover:text-blue-500" >Forgot password ?</h1>
        </div>  
            <img className="w-full h-screen object-cover opacity-20" src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div> 
        
        </>
    )
}

export default Sign__In
