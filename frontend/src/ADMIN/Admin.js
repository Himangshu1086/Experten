import React , {useState , useEffect} from 'react'
import Navbar from '../COMPONENTS/header/Header__for__others/Navbar'
import {Link, Route, Router, Switch} from 'react-router-dom'
import ExpertAdmin from './2__EXPERT ADMIN/ExpertAdmin'
import SuperAdmin from './1__SUPER ADMIN/SuperAdmin'
function Admin() {
    return (
        <div>        
            <Navbar/>  
            <div className="h-screen">
                <div className=" m-10 border-2">
                    <div className="m-10 border-2 p-10">
                        <h1>Hello , Himangshu </h1>
                    </div>
                    <div className="m-10 border-2 p-10 flex">
                        <div className="p-10 border-2 my-4">
                            <Link to="/admin/expertAdmin"><h1>EXPERT ADMIN</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/admin/superAdmin"> <h1>SUPER ADMIN</h1></Link>
                        </div>
                    </div>
                </div>
                <div className=''>
            <Switch>
            <Route path="/admin/expertAdmin">
                <ExpertAdmin/>
            </Route>
            <Route path="/admin/superAdmin">
                <SuperAdmin/>
            </Route>
            </Switch>
            </div>    
            </div>
            
        </div>
    )
}

export default Admin
