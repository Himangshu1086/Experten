import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AddProfessional from './AddProfessional'

export default function SuperAdmin() {

    

  return (
    <div>
            <div className="h-100">
                <div className="shadow-xl">
                    <div className=" justify-center p-4 flex">
                        <div id="prof" className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/superAdmin/addExpert"> <h1>Add Professionals</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link to="/admin/superAdmin/addAdmin"><h1>Add Admin</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300 ">
                            <Link  to="/admin/superAdmin/viewAdmin"> <h1>View Admin</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link  to="/admin/superAdmin/viewUser"> <h1>View User</h1></Link>
                        </div>
                        <div className="p-2 border-b-2 ml-4 mr-4 border-blue-300">
                            <Link to="/admin/superAdmin/viewOrder/:expertid"><h1>View Orders</h1></Link>
                        </div>
                    </div>
                </div>
                    <Switch>
                        <Route path="/admin/superAdmin/addExpert"><AddProfessional/></Route>
                    </Switch>
            </div>
     
        </div>
  )
}
