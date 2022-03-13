import React , {useState , useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import $ from 'jquery'
import logo from '../../../PHOTO/experten-logo.png'
import Cookies from 'universal-cookie';


function Navbar() {

  const [checkUser , setCheckUser] = useState(false);
  const [checkSuper , setCheckSuper] = useState(false);
  const [checkExpert , setCheckExpert] = useState(false);
  const cookies = new Cookies();
  const history = useHistory();


  //General users
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
    if(data.user[0].type ==="user")
    {setCheckUser(true)}
    
  }catch(err){
      console.log(err)
    }


    try{
      const res = await fetch("/expertAdminLogin" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
  
    const data = await res.json();
    if(data.user[0].type === "expert")
    {setCheckExpert(true)}
    
  }catch(err){
      console.log(err)
    }


    try{
      const res = await fetch("/superAdminLogin" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    if(data.user[0].type == "super")
    {setCheckSuper(true)}
    
  }catch(err){
      console.log(err)
    }


  },[])



  window.addEventListener('scroll' , function(){
    let res = window.scrollY;
    if(res >= 450)
      $("#navbar").css({'backgroundColor':'black' , 'padding':'2px' , 'transition':'all 1s' })  
    else
      $("#navbar").css({'backgroundColor':'transparent' , 'padding':'40px' })
    
  
  })


 //display the side window for the mobile view of navbar items  
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
    <div>
      <nav id="navbar" className=" text-white fixed top-0 left-0 shadow-none z-50" style={{background:"transparent" , padding:"40px"}}>
        <div className="flex">
          <Link to="/"><div className="flex">
            <img className="sm:w-16 w-14  m-3" src={logo}/>
            <Link to="/" className=" hover:text-blue-300 text-3xl px-3 pt-3 tracking-widest font-black text-center" style={{fontFamily:"Festive" ,letterSpacing:"4px" }}>Experten</Link>
          </div></Link>
          <ul className="absolute hidden sm:block right-0 sm:px-16 px-1" style={{fontFamily:"Ubuntu"}}>
            
            {checkSuper ? 
            <>
              <li><Link  to="/admin/superAdmin" className= "hover:text-blue-300">superAdmin</Link></li>
              <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
            :
            <></>
            }


          {
            checkExpert ? 
            <>
              <li><Link  to="/admin/expertAdmin" className= "hover:text-blue-300">expert Admin</Link></li>
              <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
            :
            <></>
          }


          {checkUser ? 
            <>
            <li><Link to="/account" className= "hover:text-blue-300">Account</Link></li>
            <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
           :
            <li><Link to="/signIn" className="hover:text-blue-300">Sign In</Link></li>

          }
            <li><Link to="/about" className="hover:text-blue-300" >About</Link></li>
            <li><Link to="/watchList" className="hover:text-blue-300" ><div className="material-icons align-middle">favorite_border</div>Watch List</Link></li>
          </ul>
            <span onClick={displayNavItems} class="absolute sm:hidden pt-3 right-5 material-icons cursor-pointer ">drag_indicator</span>
        </div>



        <div id="humBurger" className="hidden">
        <ul  className="absolute sm:hidden h-screen font-bold tracking-wider text-center rounded-lg bg-blue-300  flex flex-col right-0 sm:px-16  top-24 px-1" style={{fontFamily:"Ubuntu"}}>
        {checkSuper ? 
            <>
              <li><Link  to="/admin/superAdmin" className= "hover:text-blue-300">superAdmin</Link></li>
              <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
            :
            <></>
            }


          {
            checkExpert ? 
            <>
              <li><Link  to="/admin/expertAdmin" className= "hover:text-blue-300">expert Admin</Link></li>
              <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
            :
            <></>
          }


          {checkUser ? 
            <>
            <li><Link to="/account" className= "hover:text-blue-300">Account</Link></li>
            <li><Link to="/" onClick={logout}  className="hover:text-blue-300">Sign out</Link></li>
            </>
           :
            <li><Link to="/signIn" className="hover:text-blue-300">Sign In</Link></li>

          }
            <li><Link to="/about" className="hover:text-blue-300" >About</Link></li>
            <li><Link to="/watchList" className="hover:text-blue-300" ><div className="material-icons align-middle">favorite_border</div>Watch List</Link></li>
        </ul>
            </div>


      </nav>
    </div>

  )
}

export default Navbar




