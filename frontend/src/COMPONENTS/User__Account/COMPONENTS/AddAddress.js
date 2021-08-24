import React , {useState , useEffect} from 'react'
import SwitchComponent from '../RouteComponent/SwitchComponent';
import Navbar from '../../header/Header__for__others/Navbar'

function AddAddress() {


const [getaddress , setGetaddress ] = useState({   user:"",name:"" , town:"" , address:"" , houseNo:"" ,phNumber:"" , pin:"" ,  landmark:""  });
const [loading , setLoading ] =useState(true);

const[Uname , setUname]=useState("");
const[Mobile , setMobile]=useState("");
const[Address , setAddress]=useState("");
const[Town , setTown]=useState("");
const[HouseNo, setHouseNo]=useState("");
const[pin , setPin]=useState("");
const[Landmark , setLandmark]=useState("");

useEffect( async()=>{

    try {
        
        const resAddres = await fetch("/address");
        const userAddress = await resAddres.json();
        setGetaddress(userAddress);
        setLoading(false);
        
      }catch(err){
        console.log(err);
      }



},[])


const addressAdd = async(e)=>{
    
    e.preventDefault(); 
  const fetAddress = await fetch("/userAddress" , {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({Uname,Mobile,Town,HouseNo,Address,pin,Landmark })
  });
  const resAddress = await fetAddress.json();
  if(resAddress.status === 501 || !resAddress){
    window.alert("Invalid Credentials");
    console.log("Invalid Registration");
}
else
{
    //window.alert("Address added");
    console.log("Registration successful");
    try {
        
        const resAddres = await fetch("/address");
        const userAddress = await resAddres.json();
        setGetaddress(userAddress);
        setLoading(false);
        
      }catch(err){
        console.log(err);
      }

}
}


if (loading) return <><div className="absolute m-auto text-4xl top-1/2 left-1/2">Loading...</div></>


console.log(getaddress)
    return (
        <div>
            <Navbar/>
            <nav></nav>
            <div className="flex">
              <SwitchComponent/>
                <div className=" p-10">

                <form >
                  <h1 className="text-left text-2xl">Add Address </h1>
                <input  value={Uname}  onChange={(e)=>setUname(e.target.value)} type="text" placeholder="Name"  />
                <input value={Mobile}  onChange={(e)=>setMobile(e.target.value)} type="number" placeholder="Mobile number"/>
                <input value={Town}  onChange={(e)=>setTown(e.target.value)} type="text" placeholder="Town/City"/>
                <input value={HouseNo}  onChange={(e)=>setHouseNo(e.target.value)} type="text" placeholder="House No."/>
                <textarea value={Address} style={{height:"100px" , textDecoration:"none"}}  onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Address"></textarea>
                <input value={pin} onChange={(e)=>setPin(e.target.value)}  name="PIN" id="pin" placeholder="Pin"/>
                <input value={Landmark} onChange={(e)=>setLandmark(e.target.value)} type="text" placeholder="Landmark"/>
                    <input type="submit" className="w-full mt-3 p-2 bg-blue-300 text-black" onClick={addressAdd} />
                </form>
                <h1 className="text-left text-3xl mt-5"> Address : </h1>
                {
                     getaddress.map(ads =>{
                        return (
                            <>
                                <h1 className="text-center text-xl text-black">{ads.name}</h1>
                            </>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default AddAddress
