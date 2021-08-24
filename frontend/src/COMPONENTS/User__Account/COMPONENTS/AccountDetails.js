import React from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../RouteComponent/SwitchComponent'

function AccountDetails() {
    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div className="flex">
               <SwitchComponent/>
               <div className="m-10 w-full h-96 border-2 ">
                    <h1 className="text-center">Details</h1>
                </div>

            </div>
        </div>
    )
}

export default AccountDetails
