import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function AddEducation() {
    return (
        <div>

            <Navbar/>
            <nav></nav>
            <div className="flex">
                <SwitchComponent/>
            <div>
            <h1 className="p-10 text-4xl text-left mx-10">Add Education</h1>
            <form className="mx-20">
                <input type="text" placeholder="College"></input>
                <input type="text" placeholder="Course"></input>
                <input type="text" placeholder="Subject"></input>
                <input type="text" placeholder="percentage"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>
            </div>
            </div>



            
        </div>
    )
}

export default AddEducation
