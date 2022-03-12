import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './card-container.css'
import facebook from '../../../PHOTO/social icon/facebook.png'
import instagram from '../../../PHOTO/social icon/instagram.png'
import linkedin from '../../../PHOTO/social icon/linkedin.png'
import youtube from '../../../PHOTO/social icon/youtube.png'

function Container__for_Card() {

const [Experts, setExperts] = useState({});
const [loading, setloading] = useState(true);
const {profession} = useParams();
const {others_profession} = useParams();
const [location,setLocation] = useState("");
console.log(others_profession)

useEffect(async()=>{

  const res = await fetch("/GetExpert" , {

      method:"GET" ,
      headers:{
        "Content-Type":"application/json",
        "profession":profession
      }
  });

  const result = await res.json();
  setExperts(result);
  setloading(false)

},[])


if(loading) return <div  className="bg-green-500 text-6xl text-white font-black text-center relative top-1/2 left-1/2"> <span class="material-icons-outlined">
rotate_right
</span> </div>

    return (
        <div className='bg-gradient-to-b from-blue-200'>
            <nav></nav>
           <div className="  h-96 bg-black">
                <h1 className="absolute text-white text-3xl sm:text-6xl tracking-widest z-20 transform top-1/5 mt-24 sm:mt-20  left-1/2 -translate-x-1/2 border-b-2 pb-3">{profession} </h1>
                <span className="absolute text-white text-center z-20 sm:text-3xl mx-4 text-xl tracking-wider transform top-44  mt-20 sm:left-1/2 sm:-translate-x-1/2  ">Get your highly qualified professionals at your home</span>
                <img className="w-full h-96 opacity-30 object-cover" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </div>
            <div className="mt-16  absolute transform -translate-x-1/2  -translate-y-1/2   top-72 left-1/2  z-30 w-80 sm:w-1/3  ">
            <form>
                    <select onChange={(e)=>{setLocation(e.target.value)}} className="browser-default w-80 sm:w-full tracking-wider pl-16">
                    <option value="" selected disabled >search by your location</option>
                    <option value="Guwahati" >Guwahati</option>
                    <option value="Jorhat">Jorhat</option>
                    <option value="Hajo">Hajo</option>
                    <option value="Soalkuchi">Soalkuchi</option>
                </select>
               
            </form> </div>
            <div className="flex flex-wrap justify-center min-h-screen m-10">



              { Experts.expert.map(expt=>{
                return (
                  <div className='m-3'>
                
              <div className="card-prof shadow-2xl">
              <Link to={`/category/${profession}/${expt._id}`}><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="Person" class="card__image"/></Link>
              <p class="card__name">{expt.name}</p>
              <span className=" px-1 mt-1 mb-3 font-extralight text-xs">{expt.UGEducation}</span>
              
                <p className='text-center w-2/3 text-sm p-1'>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a 
                  type specimen book.</p>

              <ul class="social-icons">
              <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={facebook} /></li>
                                <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src = {instagram} /></li>
                                <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={linkedin}/></li>
                                <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={youtube}/></li>
              </ul>
              <ul className='flex'>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul>
              <Link to={`/category/${profession}/${expt._id}`}><button className="btn draw-border p-2">See More</button></Link>
            </div>
              
                    </div>
                )
              })
             }
     
            </div> 
        </div>
    )
}

export default Container__for_Card;


{/* <div className=" p-3 flex shadow-2xl bg-white" style={{height:"400px" , width:"600px"}}>   
                <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src={expt.image}/>
                </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">{expt.name}</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">{expt.UGEducation}</span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total {expt.experienceYear} years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div> */}