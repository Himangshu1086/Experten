import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function Addcontact() {
    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div className="flex">
                <SwitchComponent/>
            <div>
            <h1 className="p-10 text-4xl text-left mx-10">Add Contact</h1>
            <form className="mx-20">
                <textarea type="text" placeholder="Address"></textarea>
                <input type="text" placeholder="Pincode"></input>
                <input type="text" placeholder="District"></input>
                <input type="text" placeholder="state"></input>
                <input type="text" placeholder="Mobile Number"></input>
                <input type="text" placeholder="Email"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Addcontact
