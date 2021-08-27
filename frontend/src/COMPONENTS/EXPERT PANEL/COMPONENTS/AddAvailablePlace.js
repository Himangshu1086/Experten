import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function AddAvailablePlace() {
    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div className="flex">
                <SwitchComponent/>
            <div>
            <h1 className="p-10 text-4xl text-left mx-10">Add Available Places </h1>
            <form className="mx-20 mb-20">
                <input type="text" placeholder="Place"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default AddAvailablePlace