import React from 'react'

function PopUpServices() {
    return (
        <div>
            <div id="pop" className=" bg-blue-300 h-96 w-96 absolute items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 hidden flex-col">
            <h1 className="rounded-xl bg-green-300 w-40 text-center p-2 mt-2 " >Book Free Trail</h1>
                <h1 className=" text-white font-bold text-center text-2xl" >Select Services : </h1>
                <div className="h-40 bg-blue-500 w-full " >
                    <h1 className="p-1 px-4">HOME CLASSES</h1>
                    <h2 className="p-1 px-4" >GROUP CLASSES</h2>
                    <h3 className="p-1 px-4">ONLINE CLASSES</h3>
                </div>
                
            </div>
        </div>
    )
}

export default PopUpServices
