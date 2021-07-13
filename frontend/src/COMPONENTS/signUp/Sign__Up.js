import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/header/Header__for__home__page/Navbar'
function Sign__Up() {
    return (
        <>
        <Navbar/>
        <div className="bg-black">
            <div className="absolute top-1/2 px-2  left-1/2 transform z-20  -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-4xl text-white text-center  tracking-widest font-bold ">Sign Up</h1><br/>
            <form method="POST" className="w-96 bg-transparent flex flex-col justify-center">
                 <input className="my-1 text-center text-white tracking-wider" type="text" placeholder="name"></input>
                 <input className="my-1 text-center text-white tracking-wider" type="text" placeholder="mobile number"></input>
                 <input className="my-1 text-center text-white tracking-wider" type="email" placeholder="email"></input>
                 <input className="my-1 text-center text-white tracking-wider" type="password" placeholder="password"></input>
                 <input className="my-1 text-center text-white tracking-wider" type="password" placeholder="confirm password"></input><br/>
                 <button className=" p-2 bg-blue-400 tracking-wider hover:bg-blue-500 font-bold rounded-sm" >Sign Up</button>
            </form>
                 <Link to="/signIn"><button className="mt-4 tracking-widest text-white font-bold text-xl border-2 border-white rounded-md p-1.5" >Sign In</button></Link>
        </div>  
            <img className="w-full h-screen object-cover opacity-20" src="https://images.unsplash.com/photo-1536560035542-1326fab3a507?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        </div> 
        
        </>
    )
}

export default Sign__Up
