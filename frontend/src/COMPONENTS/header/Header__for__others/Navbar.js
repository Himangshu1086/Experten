import React , {useEffect , useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import $ from 'jquery'
import logo from '../../../PHOTO/logo.png'
import Cookies from 'universal-cookie';
function Navbar() {


  const [checkUser , setCheckUser] = useState(false);
  const cookies = new Cookies();
  const history = useHistory();

  useEffect(async()=>{

    try{
      const res = await fetch("/userLoggedIn" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
  
    const data = await res.json();
    console.log(data);
    if(data)
    {setCheckUser(true)}
    
  }catch(err){
      console.log(err)
    }


  },[])



  const displayNavItems = ()=>{
    let x = document.getElementById("humBurger");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  
//logout function
const logout = ()=>{
  cookies.remove("token");
  history.push("/");
  window.location.reload();
}


  return (
    <div >
      <nav className=" text-white fixed top-0 left-0 bg-black shadow-none z-50" style={{ padding:"2px"}}>
        <div className="flex">
          <Link to="/"><div className="flex">
            <img className="sm:w-16 w-14 " src={logo} />
            <Link to="/" className=" hover:text-blue-300 text-3xl px-3 pt-3 tracking-widest font-black text-center" style={{fontFamily:"Festive" ,letterSpacing:"4px" }}>Experten</Link>
          </div></Link>
          <ul className="absolute hidden sm:block right-0 sm:px-16 px-1" style={{fontFamily:"Ubuntu"}}>
          {checkUser ? 
              <><li>
                <Link to="/account" className= "hover:text-blue-300">
                      Account
                  </Link>
              </li>
              <li>
                  <Link to="/" onClick={logout}  className="hover:text-blue-300">
                       Sign out
                  </Link>
              </li>
              </>
           :<>
           <li>
              <Link to="/signIn" className="hover:text-blue-300">
                   Sign In
              </Link>
              </li>
           </>
          }

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
            <span onClick={displayNavItems} class="absolute sm:hidden pt-3 right-5 material-icons cursor-pointer ">drag_indicator</span>
        </div>



        <div id="humBurger" className="hidden">
        <ul  className="absolute sm:hidden h-screen font-bold tracking-wider text-center rounded-lg bg-blue-300  flex flex-col right-0 sm:px-16 mt-3 px-1" style={{fontFamily:"Ubuntu"}}>
           {checkUser ? 
              <><li>
                <Link to="/account" className= "text-black ">
                      Account
                  </Link></li>
                 <li><Link to="/" onClick={logout} className= "text-black ">
                      Sign out
                  </Link>
              </li></>
           :<>
                  <li><Link to="/signIn" className= "text-black ">
                      Sign In
                  </Link></li>
           </>
            }
            <li>
              <Link to="/about" className="text-black " >
                 About
              </Link>
            </li>
            <li>
              <Link to="/watchList" className="text-black hover:text-blue-300" >
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





