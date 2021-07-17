import React ,{useEffect , useState} from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import $ from 'jquery'
import { useParams } from 'react-router-dom';
import facebook from '../../../PHOTO/social icon/facebook.png'
import instagram from '../../../PHOTO/social icon/instagram.png'
import linkedin from '../../../PHOTO/social icon/linkedin.png'
import youtube from '../../../PHOTO/social icon/youtube.png'
import PopUpServices from './PopUpServices';



function Profession__details() {
    const {id } = useParams();
    const [ expertPortfolio , setExpertPortfolio] = useState({});
    const [loading , setLoading] = useState(true);


    useEffect(async() => {
        
        const res = await fetch("/GetExpertDetails" , {
            method:"GET" ,
            headers:{
                "Content-Type":"application/json",
                "id":id
            }
        });

        const result = await  res.json();
        setExpertPortfolio(result);
        setLoading(false);

    }, [])


    const popUp = () =>{
        const x = document.getElementById("pop")
        if (x.style.display === "flex") {
            x.style.display = "none";
          } else {
            x.style.display = "flex";
          }
        }


        if(loading) return <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2  text-6xl text-center">loading...</div>


    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div id="pop" className="hidden" ><PopUpServices/></div>
            <div className=" bg-black" style={{fontFamily:"Ubuntu"}}>
            <h1 className="absolute text-white text-xl sm:text-5xl font-extralight tracking-widest z-10 transform top-10 sm:top-1/4 mt-20 left-1/2 -translate-x-1/2 opacity-50 ">Hello, I'm</h1>
                <h1 className="absolute text-center text-white font-black text-2xl sm:text-6xl tracking-widest z-10 transform top-16 sm:top-1/3 mt-24 left-1/2 -translate-x-1/2 border-b-2 pb-3 ">{expertPortfolio.expert.name}
                <span className="absolute text-white text-center z-10 text-sm sm:text-3xl tracking-wider mt-20 sm:top-1/2 transform  sm:mt-20 left-1/2 -translate-x-1/2 opacity-30">And This is My Portfolio</span></h1>
                <span onClick={popUp} className="absolute text-white text-center z-10 sm:text-3xl tracking-wider transform sm:top-96 top-80  sm:mt-64 left-1/2 -translate-x-1/2  border-2 sm:p-2 rounded-md px-3 hover:bg-blue-500 ">BOOK NOW</span>
                <img className="w-full h-96 sm:h-screen opacity-30 object-fit " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </div>
           <div className=" bg-white">
               <div className="flex text-xs sm:text-xl text-black font-bold opacity-60 justify-center">
                   <ul className="flex p-4">
                       <li className="sm:p-10 pb-2 border-b-2 border-blue-400 mx-2 sm:mx-3">Education</li>
                       <li className="sm:p-10 border-b-2 border-blue-400 mx-2 sm:mx-3">Experience</li>
                       <li className="sm:p-10 border-b-2 border-blue-400 mx-2 sm:mx-3">About Me</li>
                       <li className="sm:p-10 border-b-2 border-blue-400 mx-2 sm:mx-3">Contact</li>
                   </ul>
               </div>
               <div className=" shadow-2xl h-96 w-full bg-white container my-10">
               </div>
               <h1 className="text-center sm:text-2xl text-xl text-black">My Service ⤵  </h1>
               <div className="h-96 w-full bg-white shadow-2xl container my-10"></div>
               <div className=""></div>
               <h1 className="text-center sm:text-2xl text-xl text-black">Blog in Igni-Us ⤵  </h1>
               <div className="h-96 w-full bg-white shadow-2xl container my-10"></div>
               <div className=""></div>
               <h1 className="text-center sm:text-2xl text-xl text-black">Reviews ⤵  </h1>
               <div className="h-96 w-full bg-white shadow-2xl container my-10"></div>
               <div className=""></div>
               <h1 className="text-center sm:text-2xl  text-black">Social Media Handles</h1>
               <div className="flex text-xs text-black font-bold opacity-60 justify-center">
                   <ul className="flex p-4">
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={facebook} /></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src = {instagram} /></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={linkedin}/></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={youtube}/></li>
                   </ul>
               </div>

               <div className=""></div>

           </div>
        </div>
    )
}

export default Profession__details
