import React from 'react'
import { Link } from 'react-router-dom'
function expertRoute() {
  return (
    <div>
            <div className="min-h-screen">
                <div className=" m-10 border-2">
                    <div className="m-10 border-2 p-10 flex">
                        <div className="p-10 border-2 my-4">
                            <Link to="/accountdetail"><h1>Account Detail</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/addaddress"> <h1>Add Address</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link  to="/viewAddress"> <h1>View Address</h1></Link>
                        </div>
                        <div className="p-10 border-2 my-4">
                            <Link to="/placeorder"><h1>Orders</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default expertRoute