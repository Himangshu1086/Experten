import React, {useEffect , useState} from 'react'
import $ from 'jquery'

function Slide__show() {
   
    const [location , setLocation] = useState("");

    let idx =2;
    useEffect(()=>{

        $("#img-1").css('display', 'flex');
        setInterval(function(){
            
            switch(idx){
                case 1:{
                    $("#img-1").css('display', 'flex');
                    $("#img-2").css('display', 'none');
                    $("#img-3").css('display', 'none');
                    idx=2;
                    break;
                }
                case 2:{
                    $("#img-1").css('display', 'none');
                    $("#img-2").css('display', 'flex');
                    $("#img-3").css('display', 'none');
                    idx=3;
                    break;
                }
                case 3:{
                    $("#img-1").css('display', 'none');
                    $("#img-2").css('display', 'none');
                    $("#img-3").css('display', 'flex');
                    idx=1;
                    break;
                }
            }
        } , 5000);

        

    },[])

console.log(location);


    return (
        <>
        <span className="material-icons text-white z-30 absolute transform -translate-x-0  -translate-y-1/2 top-1/2 left-0 text-xl sm:text-6xl pl-2 sm:pl-16 opacity-40">
                        arrow_back_ios
                </span>
                <span className="material-icons text-white z-30 absolute transform -translate-x-full  -translate-y-1/2 top-1/2 left-full text-xl sm:text-6xl pl-2 sm:pl-16 opacity-40">
                        arrow_forward_ios
        </span>
            <div className="absolute transform text-white text-center -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 z-30 sm:mt-0 mt-20 flex flex-col w-72 sm:w-auto" style={{fontFamily:"Festive"}}>  
                <h1 className="text-white  sm:text-6xl  text-4xl text-center font-bold leading-10 sm:leading-loose " style={{fontFamily:"Festive" , letterSpacing:"8px" }}>Get Professionals of your choice</h1>
                <br/><p className='text-3xl leading-loose' style={{letterSpacing:"3px"}}>Are you tired of calling your electrician, plumber, carpenter ?</p>
                <p className='text-3xl leading-loose' style={{letterSpacing:"3px"}}>Don't worry, we are here.</p>
                <p className='text-3xl leading-loose' style={{letterSpacing:"3px"}}>Experten connects you with the best Professionals across the country.</p>
            </div>
            <form className="flex mt-8 absolute transform -translate-x-1/2  -translate-y-1/2 top-40 left-1/2 z-30 w-80 sm:w-1/3 ">
                    <input type="text" className=" text-center bg-black text-white" placeholder="search for a profesional" ></input>
                    <span class="material-icons text-white mt-3 ">search</span>
            </form>
            <div className=" h-screen bg-black">
                <img id="img-1" style={{display:"none"}} className="  bg-cover h-screen w-screen   opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1625190273603-0f5814961433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                <img id="img-2" style={{display:"none"}} className="  bg-cover h-screen w-screen   opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1612831661881-dd08451593ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                <img id="img-3" style={{display:"none"}} className="  bg-cover h-screen w-screen   opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1617540702506-89475a91c171?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
                
            </div>
        </>
    )
}

export default Slide__show;
