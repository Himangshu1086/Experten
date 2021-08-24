import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function Addexperience() {
    return (
        <div>

<Navbar/>
            <nav></nav>
            <div className="flex">
                <SwitchComponent/>
            <div>
            
            <h1 className="p-10 text-4xl text-left mx-10">Add Experiences</h1>
            <form className="mx-20 mb-20 ">
                <input type="text" placeholder="Title ( also add duration )"></input>
                <textarea type="text" placeholder="Description"></textarea>
                <button className="bg-blue-300 w-full p-3 mt-4">Submit</button>
            </form>
            </div>
            </div>





        </div>
    )
}

export default Addexperience
