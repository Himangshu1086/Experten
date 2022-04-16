
import React, { useState,useEffect } from 'react'

function AuthUser() {

const [auth ,setAuth] = useState(false);

  useEffect(async()=>{

    try{
      const res = await fetch("/userLoggedIn" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
  
    const data = await res.json();
    if(data.user[0].type ==="user")
    {
      setAuth(true)
    }
    
  }catch(err){
      console.log(err)
    }

  });

  return auth;
}


function AuthSuper() {

  const [auth ,setAuth] = useState(false);
  
    useEffect(async()=>{
  
      try{
        const res = await fetch("/userLoggedIn" , {
        method:"GET" ,
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        } , 
        credentials:"include"
      });
    
      const data = await res.json();
      if(data.user[0].type ==="super")
      {
        setAuth(true)
      }
      
    }catch(err){
        console.log(err)
      }
  
    });
    
    return auth;
  }


  function AuthExpert() {

    const [auth ,setAuth] = useState(false);
    
      useEffect(async()=>{
    
        try{
          const res = await fetch("/userLoggedIn" , {
          method:"GET" ,
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          } , 
          credentials:"include"
        });
      
        const data = await res.json();
        if(data.user[0].type ==="expert")
        {
          setAuth(true)
        }
        
      }catch(err){
          console.log(err)
        }
    
      });
    
      return auth
    }


export  {AuthUser , AuthExpert ,AuthSuper} 



// import React , { createContext , useEffect , useState  } from 'react';

// const AuthContext = createContext({});

// const AuthProvider =  props => {
  
//   const [auth ,setAuth] = useState(false);
//   useEffect(async()=>{

//     try{
//       const res = await fetch("/userLoggedIn" , {
//       method:"GET" ,
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json",
//       } , 
//       credentials:"include"
//     });
  
//     const data = await res.json();
//     if(data.user[0].type ==="user")
//     {
//       setAuth(true)
//     }
    
//   }catch(err){
//       console.log(err)
//     }

//   });


//   const authContextContent = {
//     auth
//   }

//   return <AuthContext.Provider value={authContextContent} {...props} />

// }



// const useAuth = ()=> React.useContext(AuthContext)

// export {AuthProvider , useAuth}
