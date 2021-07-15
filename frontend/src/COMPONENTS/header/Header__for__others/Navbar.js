import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
function Navbar() {



  const displayNavItems = ()=>{
    let x = document.getElementById("humBurger");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  




  return (
    <div >
      <nav className=" text-white fixed top-0 left-0 bg-black shadow-none z-50" style={{ padding:"2px"}}>
        <div className="flex">
          <div className="flex">
            {/* <img className="w-16 " src="logo.png"/> */}
            <Link to="/" className=" hover:text-blue-300 text-3xl px-3 pt-3 tracking-widest font-black text-center" style={{fontFamily:"Festive" ,letterSpacing:"4px" }}>Experten</Link>
          </div>
          <ul className="absolute hidden sm:flex right-0 sm:px-16 px-1 " style={{fontFamily:"Ubuntu"}}>
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
            <span onClick={displayNavItems} class="absolute sm:hidden pt-3 right-5 material-icons">drag_indicator</span>
        </div>

        <div id="humBurger" className="hidden">
        <ul  className="absolute sm:hidden h-screen rounded-lg font-bold tracking-wider text-center bg-blue-300  flex flex-col right-0 sm:px-16 mt-3 px-1" style={{fontFamily:"Ubuntu"}}>
            <li>
              <Link to="/signIn" className= " text-black ">
                   Sign In
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black " >
                 About
              </Link>
            </li>
            <li>
              <Link to="/watchList" className="text-black " >
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





