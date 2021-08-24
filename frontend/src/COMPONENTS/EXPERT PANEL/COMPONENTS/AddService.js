import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function AddService() {
    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div className="min-h-screen flex">
            <SwitchComponent/>
            <div>
                <h1 className=" px-10 m-10 text-3xl mt-10">
                Add Services For the Experten : 
            </h1>
             {/* expert basic details */}
            <form className="mx-20">
                <input type="text" placeholder="Profession"></input>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Year of Experience"></input>
                <input type="text" placeholder="About You"></input>
                <input type="text" placeholder="Profile Pic"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default AddService
