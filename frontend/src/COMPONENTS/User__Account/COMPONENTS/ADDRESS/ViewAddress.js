import React , {useState , useEffect} from 'react'
import SwitchComponent from '../../RouteComponent/SwitchComponent';
import Navbar from '../../../header/Header__for__others/Navbar'

function ViewAddress() {


    const [getaddress , setGetaddress ] = useState({   user:"",name:"" , town:"" , address:"" , houseNo:"" ,phNumber:"" , pin:"" ,  landmark:""  });
    const [loading , setLoading ] =useState(true);
    

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





if (loading) return <><div className="absolute m-auto text-4xl top-1/2 left-1/2">Loading...</div></>


console.log(getaddress)
    return (
        <div className="min-h-screen">
            <Navbar/>
            <nav></nav>
            <div className="flex">
              <SwitchComponent/>
              <div className="w-full">
                    <h1 className="text-3xl m-5 text-left"> Addresses : </h1>
              <div className="flex flex-wrap">
                {
                     getaddress.map(ads =>{
                        return (
                            <div className="m-4 w-2/5">
                            <div className=" flex flex-col border-2 p-5 m-3 w-full">
                                <h1 className="text-center text-xl text-black">{ads.name}</h1>
                                <h1 className="text-center text-xl text-black">{ads.town}</h1>
                                <h1 className="text-center text-xl text-black">{ads.address}</h1>
                                <h1 className="text-center text-xl text-black">{ads.houseNo}</h1>
                                <h1 className="text-center text-xl text-black">{ads.phNumber}</h1>
                                <h1 className="text-center text-xl text-black">{ads.pin}</h1>
                                <h1 className="text-center text-xl text-black">{ads.landmark}</h1>
                            </div>
                            </div>
                            
                        )
                    })
                }
              </div>
              </div>
                
            </div>
        </div>
    )
}

export default ViewAddress
