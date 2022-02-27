import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import Navbar from '../header/Header__for__others/Navbar'
function Watch__List() {

    return (
        <div className="">
           
                <Navbar/>
            <nav></nav>
            <div className="bg-black">
            <h1 className="absolute text-blue-400 sm:text-6xl text-4xl tracking-widest font-black z-20 transform top-1/5  sm:mt-20 mt-28 left-1/2 -translate-x-1/2 border-b-4 border-blue-300 pb-3"> Watch List </h1>
                <img className="object-fill opacity-40 w-full h-80" src="https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"/>
            </div>
            </div>
    )
}

export default Watch__List
