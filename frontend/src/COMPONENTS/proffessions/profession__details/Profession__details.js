import React ,{useEffect , useState} from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import $ from 'jquery'
import { useParams } from 'react-router-dom';

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
        $("#pop").css('display' ,'flex');
        }


        if(loading) return <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2  text-6xl text-center">loading...</div>


    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div id="pop" className=" bg-blue-300 h-96 w-96 absolute items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 hidden flex-col">
            <h1 className="rounded-xl bg-green-300 w-40 text-center p-2 mt-2 " >Book Free Trail</h1>
                <h1 className=" text-white font-bold text-center text-2xl" >Select Services : </h1>
                <div className="h-40 bg-blue-500 w-full " >
                    <h1 className="p-1 px-4">HOME</h1>
                    <h2 className="p-1 px-4" >HOME</h2>
                    <h3 className="p-1 px-4">HOME</h3>
                </div>
                
            </div>
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
               <div className=" shadow-2xl h-96 w-full bg-blue-200 container my-10">
               </div>
               <h1 className="text-center text-2xl text-black">My Service </h1>
               <div className="h-96 w-full bg-green-200 my-10"></div>
               <div className=""></div>
               <h1 className="text-center text-2xl text-black">Blog in Igni-Us </h1>
               <div className="h-96 w-full bg-green-200 my-10"></div>
               <div className=""></div>
               <h1 className="text-center text-2xl text-black">Reviews</h1>
               <div className="h-96 w-full bg-green-200 my-10"></div>
               <div className=""></div>
               <h1 className="text-center text-2xl text-black">Social Media Handles</h1>
               <div className="flex text-xs text-black font-bold opacity-60 justify-center">
                   <ul className="flex p-4">
                       <li className="border-2 sm:p-10 p-2 border-b-2 border-blue-400 mx-2 sm:mx-3">facebook</li>
                       <li className="border-2 sm:p-10 p-2 border-b-2 border-blue-400 mx-2 sm:mx-3">instagram</li>
                       <li className="border-2 sm:p-10 p-2 border-b-2 border-blue-400 mx-2 sm:mx-3">whatsapp</li>
                       <li className="border-2 sm:p-10 p-2 border-b-2 border-blue-400 mx-2 sm:mx-3">linkedin</li>
                   </ul>
               </div>

               <div className=""></div>

           </div>
        </div>
    )
}

export default Profession__details
