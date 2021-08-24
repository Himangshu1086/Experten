import React , {useState , useEffect} from 'react'
import Navbar from '../header/Header__for__others/Navbar'
import {Link} from 'react-router-dom'
import AddExpert from './Components/AddExpert';
import SwitchComponent from './Routecomponent/SwitchComponent';

function Admin() {


const [loading , setLoading ] =useState(true);


useEffect( async()=>{

   

},[])


const addressAdd = async(e)=>{
    
    e.preventDefault(); 


}


// if (loading) return <>Loading...</>


    return (
        <div>
                <div>
                   <AddExpert/>
                </div>
        </div>
    )
}

export default Admin
