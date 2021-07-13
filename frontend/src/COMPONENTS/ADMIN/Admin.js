import React from 'react'
import Navbar from '../header/Header__for__home__page/Navbar'

function Admin() {
    return (
        <div>
            <Navbar/>
            <div className="h-screen pt-96 bg-black">
                <h1 className="text-6xl text-center text-blue-300 font-bold tracking-widest ">ADMIN PANEL</h1>
            </div>
        </div>
    )
}

export default Admin
