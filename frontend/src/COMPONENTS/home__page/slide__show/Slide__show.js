import React, {useEffect} from 'react'
import $ from 'jquery'

function Slide__show() {
   
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




    return (
        <>
        <span className="material-icons text-white z-50 absolute transform -translate-x-0  -translate-y-1/2 top-1/2 left-0 text-6xl pl-16">
                        arrow_back_ios
                </span>
                <span className="material-icons text-white z-50 absolute transform -translate-x-full  -translate-y-1/2 top-1/2 left-full text-6xl pr-16">
                        arrow_forward_ios
        </span>
            <div className="absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 z-50  flex w-auto">  
                <h1 className="text-white text-6xl font-bold" style={{fontFamily:"Festive" , letterSpacing:"8px"}}>Welcome to My Website</h1>
            </div>
            <div className=" h-screen bg-black">
                <img id="img-1" style={{display:"none"}} className="  bg-cover h-screen w-screen z-30  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1625190273603-0f5814961433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                <img id="img-2" style={{display:"none"}} className="  bg-cover h-screen w-screen z-20  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1612831661881-dd08451593ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                <img id="img-3" style={{display:"none"}} className="  bg-cover h-screen w-screen z-10  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1617540702506-89475a91c171?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
                
            </div>
        </>
    )
}

export default Slide__show;
