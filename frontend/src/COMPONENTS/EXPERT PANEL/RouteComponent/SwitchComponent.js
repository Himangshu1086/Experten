import React from 'react'
import { Link } from 'react-router-dom'

function SwitchComponent() {
    return (
        <div>
            <div className="flex flex-col m-10 border-2">
                    <div className="m-10 border-2 p-10">
                        <h1>Hello , Expert</h1>
                    </div>
                    <div className="m-10 border-2 p-10">
                        <div className="p-10 border-2 my-4">
                            <Link to="/addservice"> <h1>Add Service</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addeducation"><h1>Add Education</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addexperience"><h1>Add Experience</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addphoto"><h1>Add Photo</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addcontact"><h1>Add Contact</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addpin"><h1>Add Add Available Pin</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addplace"><h1>Add Add Available Place</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <h1>Logout</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SwitchComponent
