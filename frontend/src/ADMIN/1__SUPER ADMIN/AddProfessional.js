import React , {useState , useEffect} from 'react'

function AddProfessional() {

    const [profession , setProfession] = useState("");
    const [name , setName] = useState("");
    const [experienceYear , setExperienceYear] =useState("");
    const [aboutMe , setAboutMe] =useState("");
    const [ProfilePic , setProfilePic] =useState("");



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
        <div className='p-5'>
        <div className="h-100 flex m-auto w-3/5 p-5 rounded-xl shadow-2xl">
           <div><h1 className=" border-b-2 pb-4 border-blue-400 px-10 m-10 text-4xl mt-10 text-black text-center">
                Add Profession To the Application
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
                <button className="bg-green-300 rounded-md w-full p-3 mt-4 hover:bg-black hover:text-white" 
                onClick = {addExperttoDB}
                >Submit</button>
            </form>
            </div> 

        </div>
        </div>

    )

}


export default AddProfessional
