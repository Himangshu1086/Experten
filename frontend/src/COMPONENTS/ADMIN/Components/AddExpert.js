import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../Routecomponent/SwitchComponent'

function AddExpert() {








    return (
        <div>
        <Navbar/>
        <nav></nav>
        <div className="min-h-screen flex">
        <SwitchComponent/>
           <div><h1 className=" px-10 m-10 text-4xl mt-10">
                Add Profession To the Application.
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
            {/* expert Education form */}
            <h1 className="p-10 text-4xl text-left mx-10">Add Education</h1>
            <form className="mx-20">
                <input type="text" placeholder="College"></input>
                <input type="text" placeholder="Course"></input>
                <input type="text" placeholder="Subject"></input>
                <input type="text" placeholder="percentage"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>

            {/* expert Experiences */}
            <h1 className="p-10 text-4xl text-left mx-10">Add Experiences</h1>
            <form className="mx-20 mb-20 ">
                <input type="text" placeholder="Title ( also add duration )"></input>
                <textarea type="text" placeholder="Description"></textarea>
                <button className="bg-blue-300 w-full p-3 mt-4">Submit</button>
            </form>

            {/* Expert contact */}

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

            <h1 className="p-10 text-4xl text-left mx-10">Add image to gallery</h1>
            <form className="mx-20">
                <input type="text" placeholder="Photo Url"></input>
                <input type="text" placeholder="Photo Description"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>

            <h1 className="p-10 text-4xl text-left mx-10">Add Available PIN </h1>
            <form className="mx-20">
                <input type="text" placeholder="Pincode "></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>

            <h1 className="p-10 text-4xl text-left mx-10">Add Available Places </h1>
            <form className="mx-20 ">
                <input type="text" placeholder="Place"></input>
                <button className="bg-blue-300 w-full p-3 mt-4">Add</button>
            </form>

            <h1 className=" px-10 m-10 text-3xl mt-10">
                Add Services For the Experten : 
            </h1>
             {/* expert basic details */}
            <form className="mx-20 mb-20">
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


export default AddExpert
