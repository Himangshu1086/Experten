import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
function Navbar() {

  window.addEventListener('scroll' , function(){
    let res = window.scrollY;
    if(res >= 650)
      $("#navbar").css({'backgroundColor':'black' , 'padding':'2px' , 'transition':'all 1s' })  
    else
      $("#navbar").css({'backgroundColor':'transparent' , 'padding':'40px' })
    
  
  })


  return (
    <div>
      <nav id="navbar" className=" text-white fixed top-0 left-0 shadow-none z-50" style={{background:"transparent" , padding:"40px"}}>
        <div className="flex">
          <div className="flex">
            <img className="w-16 " src="logo.png"/>
            <Link to="/" className=" hover:text-blue-300 text-3xl px-3 pt-3 tracking-widest font-black text-center" style={{fontFamily:"Festive" ,letterSpacing:"4px" }}>Experten</Link>
          </div>
          <ul className="absolute right-0 px-16 " style={{fontFamily:"Ubuntu"}}>
            <li>
              <Link to="/signIn" className="hover:text-blue-300">
                   Sign In
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300" >
                 About
              </Link>
            </li>
            <li>
              <Link to="/watchList" className="hover:text-blue-300" >
                <div className="material-icons align-middle">favorite_border</div>
                  Watch List
               </Link>
            </li>
            </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar




