import React from 'react'
import { Link } from 'react-router-dom'
import {AuthExpert} from '../../../src/COMPONENTS/OTHERS/AuthCheck'
function expertRoute() {

    const expertLog = AuthExpert();
    if(!expertLog) return <>loading...</>

  return (
      
    <div>
            <div className="shadow-xl">
                    <div className=" justify-center p-4 flex">
                    <div id="prof" className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/viewProfile"> <h1>View Profile</h1></Link>
                        </div>
                        <div id="prof" className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/addService"> <h1>Add Service</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link to="/admin/expertAdmin/addEducation"><h1>Add Education</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300 ">
                            <Link  to="/admin/expertAdmin/addPin"> <h1>Add Pin</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/addPlace"> <h1>Add Place</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/addPhoto"> <h1>Add Photo</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/addContact"> <h1>Add Contact</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/expertAdmin/AddExperience"> <h1>Add Experience</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link to="/admin/expertAdmin/viewOrders"><h1>View Orders</h1></Link>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default expertRoute