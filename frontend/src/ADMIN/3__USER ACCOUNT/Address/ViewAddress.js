import React , {useState , useEffect} from 'react'

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
        <div>       
            <h1 className='text-center m-auto w-1/3 border-black shadow-2xl text-2xl border-b-2 pb-2'>Addresses</h1>
            <div className="flex flex-wrap justify-center mt-10 mb-10">
                {
                     getaddress.map(ads =>{
                        return (
                            <div className="m-2">
                            <div style={{borderRadius:"10px" ,width:"300px"}} className=" flex flex-col text-md text-left shadow-2xl bg-gradient from-green-700 to-red-400 p-4 m-1 w-full">
                                <h1 className="  text-black">Name : {ads.name}</h1>
                                <h1 className="text-black">Town : {ads.town}</h1>
                                <h1 className="text-black">Address : {ads.address}</h1>
                                <h1 className="text-black">{ads.houseNo}</h1>
                                <h1 className="  text-black">{ads.phNumber}</h1>
                                <h1 className=" text-black">{ads.pin}</h1>
                                <h1 className=" text-black">{ads.landmark}</h1>
                            </div>
                            </div>
                            
                        )
                    })
                }
              </div>
            
        </div>
    )
}

export default ViewAddress
