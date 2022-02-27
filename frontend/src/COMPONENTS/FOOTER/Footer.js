import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
        <div className="relative bottom-0 left-0 h-30 w-full z-50 bg-black ">   
                 <Link to="/admin"><h1 className="p-10 bottom-0 text-white text-center">© Experten | Designed by HJB@1086</h1></Link>   
        </div>
        </div>
    )
}

export default Footer
