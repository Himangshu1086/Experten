import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../header/Header__for__others/Navbar'

function Account() {
    return (
        <div >
            <Navbar/>
            <nav></nav>
            <div className="min-h-screen flex">
                <div className="flex flex-col m-10 border-2">
                    <div className="m-10 border-2 p-10">
                        <h1>Hello , Himangshu </h1>
                    </div>
                    <div className="m-10 border-2 p-10">
                        <div className="p-10 border-2 my-4">
                            <Link to="/accountdetail"><h1>Account Detail</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/addaddress"> <h1>Add Address</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to="/placeorder"><h1>Orders</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <h1>Logout</h1>
                        </div>
                    </div>
                </div>
                <div className="m-10 px-96 py-10 border-2">
                   <h1>Details</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Account
