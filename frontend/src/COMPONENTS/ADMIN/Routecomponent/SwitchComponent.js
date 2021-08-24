import React from 'react'
import { Link } from 'react-router-dom'

function SwitchComponent() {
    return (
        <div>
            <div className="flex flex-col m-10 border-2">
                    <div className="m-10 border-2 p-10">
                        <h1>Hello , Admin</h1>
                    </div>
                    <div className="m-10 border-2 p-10">
                        <div className="p-10 border-2 my-4">
                            <Link to ="/addexpert"><h1>Add Expert</h1></Link>
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
