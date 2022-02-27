import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AddProfessional from './AddProfessional'

export default function SuperAdmin() {
  return (
    <div>
            <div className="h-100">
                <div className="m-10 border-2">
                    <div className="m-10 border-2 p-10 flex">
                        <div className="p-10 border-2 my-4">
                            <Link  to="/admin/superAdmin/addExpert"> <h1>Add Professionals</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to="/admin/superAdmin/addAdmin"><h1>Add Admin</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/admin/superAdmin/viewAdmin"> <h1>View Admin</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/admin/superAdmin/viewUser"> <h1>View User</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to="/admin/superAdmin/viewOrder/:expertid"><h1>View Orders</h1></Link>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/admin/superAdmin/addExpert"><AddProfessional/></Route>
                    </Switch>
                </div>
            </div>
     
        </div>
  )
}
