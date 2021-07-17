import React , {useState} from 'react'
import Close from  '../../../PHOTO/social icon/close.png'
import { useParams , useHistory} from 'react-router-dom';

function PopUpServices() {
    const history = useHistory();
    const {id } = useParams();
    const {url} = useParams();
    console.log(url)
    console.log(id)
    const [val , setVal ] = useState(""); 

    const closeThePopUp = ()=>{
        document.getElementById("pop").style.display = "none";
    }

    const orderConfirm = () =>{

        window.alert("Your ordered is confirmed 💞  ")
        history.push("/");

    }

    console.log(val);
    return (
        <div >
            <div id="pop" className="absolute w-full h-screen bg-black z-30 blur-3xl opacity-60"  ></div>
            <div  className=" bg-white h-96 w-96 sm:h-2/3 sm:w-1/3 absolute items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40  flex-col rounded-xl p-3">
            <img onClick={closeThePopUp} className="absolute w-4 right-0 m-3 " src={Close} alt="close" />
            <button onClick={orderConfirm} className="rounded-xl bg-green-300 w-full text-center p-2  mt-10 mb-2 ">Book Free Trail</button>
            <h1 className="text-center mt-3">select the service that suits for you </h1>
                <div className="relative h-52  w-full overflow-y-auto justify-center mt-5" >     
                    <select onChange={(e)=>{setVal(e.target.value)}} className="browser-default  sm:w-full appearance-none tracking-wider pl-16 text-2xl bg-gray-200 text-blue-400 h-40 rounded-lg ">
                    <option value="" selected disabled >select service : </option>
                    <option value="HOME CLASSES" >HOME CLASSES</option>
                    <option value="GROUP CLASSES">GROUP CLASSES</option>
                    <option value="ONLINE CLASSES">ONLINE CLASSES</option>
                    <option value="PERSONAL MENTOR">PERSONAL MENTOR</option>
                    </select>
               
                </div>
                
            </div>
        </div>
    )
}

export default PopUpServices
