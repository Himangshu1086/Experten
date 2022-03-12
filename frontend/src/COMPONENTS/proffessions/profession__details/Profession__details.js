import React ,{useEffect , useState} from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import $ from 'jquery'
import { useParams } from 'react-router-dom';
import facebook from '../../../PHOTO/social icon/facebook.png'
import instagram from '../../../PHOTO/social icon/instagram.png'
import linkedin from '../../../PHOTO/social icon/linkedin.png'
import youtube from '../../../PHOTO/social icon/youtube.png'
import PopUpServices from './PopUpServices';
import Footer from '../../FOOTER/Footer'


function Profession__details() {
    const {id , others_profession} = useParams()
    // use this other_profession params to display the teacher detail along
    console.log(others_profession);
    const [ expertPortfolio , setExpertPortfolio] = useState({});
    const [loading , setLoading] = useState(true);
    const [Pin , setPin] = useState();
    const [check , setCheck] = useState(true)

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


    const showOverflow = ()=>{
        if(check)
        {
            document.getElementById("comment-box").style.height = "auto"
            document.getElementById("btn-seeMore").innerText = "See Less"
            setCheck(false)
        }
        else{
            document.getElementById("comment-box").style.height = "10rem"
            document.getElementById("btn-seeMore").innerText = "See More"
            setCheck(true)
        }
    }


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
            <div className=" bg-black h-96 overflow-hidden" style={{fontFamily:"Ubuntu"}}>
            <h1 className="absolute text-white text-xl sm:text-2xl font-extralight 
            tracking-widest z-10 transform sm:top-1/4 -mt-24 left-1/2 
            -translate-x-1/2 opacity-50 ">Hello, I'm</h1>
                <h1 className="absolute text-center 
                text-white font-black text-2xl sm:text-4xl 
                tracking-widest z-10 transform top-6 sm:top-1/3 -mt-20 left-1/2 
                -translate-x-1/2 border-b-2 pb-3 ">{expertPortfolio.expert.name}
                </h1>
                <div className="m-auto absolute transform -translate-x-1/2  -translate-y-1/2   top-96 left-1/2  z-30 w-80 sm:w-96 ">
                    <form>
                            <select onChange={(e)=>{setPin(e.target.value)}} className="browser-default w-80 sm:w-full  tracking-wider pl-16">
                            <option value="" selected disabled >Check if available in your Pincode</option>
                            <option value="781102" >781102</option>
                            <option value="781103">781103</option>
                            <option value="781001">781001</option>
                            <option value="575025">575025</option>
                        </select>
                    </form>
                </div>
                <img className="m-auto opacity-40" style={{width:"100%",height:"400px"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </div>

        {/* DIVIDE INTO THREE SECTION : 1) SERVICES , 2) DESCRIPTION , 3) REVIEWS  */}

        <div className='flex m-10 justify-center'>
            <section className='relative w-2/5 shadow-xl  h-auto m-2 border-t-2'>
                <h1 className='text-2xl text-center p-4 border-b-2 font-bold'>SELECT SERVICES</h1>
                <div className='flex flex-wrap  justify-center mt-4'>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                    <div className='w-2/5 m-2 h-56 bg-blue-300 rounded-xl'></div>
                </div>
            </section>

            <section className='w-3/5 h-screen m-2 shadow-2xl border-t-2'>
            <h1 className='text-2xl text-center p-4 border-b-2 font-bold'>OVERVIEW</h1>
            <div className="flex text-xs text-black font-bold justify-center">
                   <ul className="flex p-4">
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={facebook} /></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src = {instagram} /></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={linkedin}/></li>
                       <li className=" sm:p-10 p-2 w-10 border-blue-400 mx-2 sm:mx-3"><img src={youtube}/></li>
                   </ul>
               </div>

               <div>
                   <h1 className='text-xl font-bold p-2 border-blue-400 border-b-2 ml-5 w-1/3'>DESCRIPTION</h1>
                   <div className=' h-auto  m-4 mb-5 text-left w-4/5'>
                   About this item
Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz | 178° wide viewing angle
Connectivity: 2 HDMI ports to connect set top box, Blu-Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices | IR Port to control connected devices like Soundbars, Receivers and Set top boxes
Sound output: Inbuilt 20 Watts Powerful Speakers | Dolby Audio and DTS Tru Surround
Smart TV Features: Fire TV OS | Built in Alexa and Alexa voice controls | DTH Set-Top Box Integration to switch between DTH TV Channels and OTT apps from home screen | Supported Apps: Prime Video | Netflix | Disney + Hotstar | YouTube | Apple TV | 5000+ apps from Fire OS Store | Display Mirroring | 1.5GHz Quad core processor | 1GB RAM/DDR
Display: A+ Grade LED panel | Amlogic 7th Generation Imaging Engine | Ultra bright screen | Advance picture processing | Anti-aliasing | Dynamic contrast | Dynamic backlight
Warranty Information: 2 Year Comprehensive Warranty and 3 years warranty on panel for malfunction arising from manufacturing defects
Installation/Wall mounting/demo will be arranged by Amazon Home Services. For warranty and device related issues, go to Your Orders on Amazon.in or Amazon shopping app > Locate your TV order > Select ‘Get Product Support’ and schedule a service. For any other information, please contact Amazon customer support
                   </div>
               </div>

               <div className='flex justify-center m-4'>
               <div className='w-1/2'>
                   <h1 className='text-xl font-bold pb-2 border-blue-400 border-b-2 w-1/3'>CONTACT</h1>
                   <div className=' h-40  mt-2 mb-2'>
                    <p>Email : abc@gmail.com</p>
                    <p>Mobile Number : 8943872365 </p>
                    <p>Location : Mangalore, India</p>
                   </div>
               </div>
               <div className='w-1/2'>
                   <h1 className='text-xl font-bold pb-2 border-blue-400 border-b-2  w-1/3'>ABOUT ME</h1>
                   <div className=' h-40  mt-2 mb-2 '>
                   I am a self-starter with strong interpersonal skills. 
                   I work efficiently both as an individual contributor as 
                   well as along with a team. I seek new challenges and 
                   try to think out-of-the-box while looking for creative 
                   solutions to a given problem.
                   </div>
               </div>
               </div>

            </section>

            <section className='w-2/5 overflow-auto h-screen m-2 shadow-xl border-t-2'>
            <h1 className='text-2xl text-center p-4 border-b-2 font-bold '>REVIEWS</h1>
                <div>
                    <form className='m-4'>
                        <textarea className='p-4  h-40 shadow-sm overflow-hidden border-2'
                         placeholder='Are you happy with the service?'></textarea>
                         <button className='text-sm p-2 w-full bg-blue-300 rounded-sm'>Submit</button>
                    </form>
                </div>
                <div id="comment-box" className='border-b-2 p-4 h-40 w-3/3 flex flex-col m-4'>
                    <h1 className='font-bold'>HIMANGSHU BAISHYA | <span>22 May, 2022</span> 
                <ul className='flex'>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul></h1>
                    <span id="comment" className='pt-2 overflow-y-hidden font-light text-sm'>
                        Picture Quality is Average. Panel is too soft.
                         Will give you water color effect on human faces.
                        Sound quality becomes distorted after 80 level.
                        Picture Quality is Average. Panel is too soft.
                         Will give you water color effect on human faces.
                        Sound quality becomes distorted after 80 level.
                    </span>
                    <button id="btn-seeMore" onClick={showOverflow} className='relative right-0 bg-blue-300 rounded-sm  w-1/3 -bottom-2'>See More</button>
                </div>

                <div id="comment-box" className='border-b-2 p-4 h-40 w-3/3 flex flex-col m-4'>
                    <h1 className='font-bold'>HIMANGSHU BAISHYA | <span>22 May, 2022</span> 
                <ul className='flex'>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
                <li>⭐</li>
              </ul></h1>
                    <span id="comment" className='pt-2 overflow-y-hidden font-light text-sm'>
                        Picture Quality is Average. Panel is too soft.
                         Will give you water color effect on human faces.
                        Sound quality becomes distorted after 80 level.
                        Picture Quality is Average. Panel is too soft.
                         Will give you water color effect on human faces.
                        Sound quality becomes distorted after 80 level.
                    </span>
                    <button id="btn-seeMore" onClick={showOverflow} className='relative right-0 bg-blue-300 rounded-sm  w-1/3 -bottom-2'>See More</button>
                </div>

            </section>
        </div>

        <section className='m-20 mt-40 mb-40'>
        <h1 className='text-2xl text-center p-4 border-b-2 w-2/5 m-auto font-bold border-blue-300 '>IMAGE GALLERY</h1>
            <div className='image-gallery scroll-bar-design shadow-xl p-10 flex overflow-x-scroll'>
                <img src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                <img src="https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80"/>
                <img src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"/>
                <img src='https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Profession__details




           