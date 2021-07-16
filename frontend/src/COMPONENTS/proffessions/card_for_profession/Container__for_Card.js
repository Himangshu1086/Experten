import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Container__for_Card() {

const [Experts, setExperts] = useState({});
const [loading, setloading] = useState(true);
const {profession} = useParams();


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
        <div>
            <nav></nav>
           <div className="  h-96 bg-black">
                <h1 className="absolute text-white text-3xl sm:text-6xl tracking-widest z-20 transform top-1/5 mt-24 sm:mt-20  left-1/2 -translate-x-1/2 border-b-2 pb-3">{profession} </h1>
                <span className="absolute text-white text-center z-20 sm:text-3xl mx-4 text-xl tracking-wider transform top-1/4  mt-20 sm:left-1/2 sm:-translate-x-1/2  ">Get your highly qualified professionals at your home</span>
                <img className="w-full h-96 opacity-30 object-cover" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </div>

            <div className="flex flex-wrap justify-center">



              { Experts.expert.map(expt=>{
                return (
                  <div>
                <Link to={`/category/teacher/${expt._id}`}><div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">   
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
              </div></Link>
                    </div>
                )
              })
              
              



              }


















            <Link to="/category/teacher/id1"><div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">   
                <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div></Link>

              <Link to="/category/teacher/id2"><div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div></Link>


              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>

              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>



              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>




              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>


              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>


              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>


              <div className=" p-3 h-56 w-96 flex shadow-2xl  m-3">
                  <div className="bg-black rounded-lg shadow-xl">
                    <img className="w-52 h-full rounded-lg opacity-60" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"/>
                  </div>
                <div className="flex flex-col w-auto ml-3" style={{fontFamily:"Ubuntu"}} >
                    <h1 className="font-black px-1  text-blue-400 tracking-widest leading-5 text-lg">Kate Georgecn</h1>
                    <span className=" px-1 mt-1 mb-3 font-extralight text-xs">M Sc ,Guwahati University </span>
                    <span className=" px-1 pb-1 font-bold text-blue-400  text-sm">For Class : 9 -12 </span>
                    <span className=" px-1 font-light text-xs">Got 91 % in HSLC SEBA <br/>Teaching experience of total 5 years</span>
                    <span className=" mx-1 mt-3 p-1 bg-blue-300 rounded-lg text-center font-bold hover:bg-blue-400  text-sm">See More</span>
                </div>
              </div>



            
            </div> 
        </div>
    )
}

export default Container__for_Card;
