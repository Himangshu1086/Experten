import React , {useState , useEffect} from 'react'
import Navbar from '../COMPONENTS/header/Header__for__others/Navbar'
import {Link, Route, Router, Switch} from 'react-router-dom'
import ExpertAdmin from './2__EXPERT ADMIN/ExpertAdmin'
import SuperAdmin from './1__SUPER ADMIN/SuperAdmin'
function Admin() {

    return (
        <div>        
            <Navbar/>
            <nav></nav>  
            <div className="h-screen ">
                <div className="p-4">
                    <div className="m-auto">
                        <h1 className='text-center text-6xl p-4'>Hello Himangshu </h1>
                    </div>
                    <div className="justify-center flex">
                        <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  p-4 bg-blue-300 w-2/5 text-center rounded-md  m-2">
                        </div>
                        <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  p-4 bg-blue-300 w-2/5 rounded-md text-center m-2">
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
