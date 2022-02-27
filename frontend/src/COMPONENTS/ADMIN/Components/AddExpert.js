import React , {useState , useEffect} from 'react'
import Navbar from '../../header/Header__for__others/Navbar'
import SwitchComponent from '../Routecomponent/SwitchComponent'

function AddExpert() {

    const [profession , setProfession] = useState("");
    const [name , setName] = useState("");
    const [experienceYear , setExperienceYear] =useState("");
    const [aboutMe , setAboutMe] =useState("");
    const [ProfilePic , setProfilePic] =useState("");



    // http request 

    const addExperttoDB = async(e)=>{

        e.preventDefault();
        console.log(profession , name , experienceYear ,aboutMe ,ProfilePic);
        const expt = await fetch("/addExperts" ,{
            method:"POST" ,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({profession , name , experienceYear ,aboutMe ,ProfilePic})
          });
        
          const data = await expt.json();
          
          if(data.status === 501 || !data)
          {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
            if(data.error){
              window.alert("Invalid Credentials")
            }
          else
          {
              console.log("login successful");
              //history.push("/");
             window.location.reload();
              
          }
    }


 

    return (
        <div>
        <Navbar/>
        <nav></nav>
        <div className="min-h-screen flex">
        <SwitchComponent/>
           <div><h1 className=" px-10 m-10 text-4xl mt-10">
                Add Profession To the Application.
            </h1>
             {/* expert basic details */}
            <form method="POST" className="mx-20">
                <input type="text" value={profession} 
                onChange={(e)=>{setProfession(e.target.value)}}
                placeholder="Profession"></input>
                <input type="text" placeholder="Name"
                value={name} 
                onChange={(e)=>{setName(e.target.value)}}
                ></input>
                <input type="text" placeholder="Year of Experience"
                value={experienceYear} 
                onChange={(e)=>{setExperienceYear(e.target.value)}}
                ></input>
                <input type="text" placeholder="About You"
                value={aboutMe} 
                onChange={(e)=>{setAboutMe(e.target.value)}}
                ></input>
                <input type="text" placeholder="Profile Pic"
                value={ProfilePic} 
                onChange={(e)=>{setProfilePic(e.target.value)}}
                ></input>
                <button className="bg-blue-300 w-full p-3 mt-4" 
                onClick = {addExperttoDB}
                >Submit</button>
            </form>
            </div> 

        </div>
        </div>

    )

}


export default AddExpert
