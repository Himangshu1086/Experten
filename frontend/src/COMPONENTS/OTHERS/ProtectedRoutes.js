import React from 'react'
import {Route , Redirect} from 'react-router-dom'
import Sign__In from '../signIn/Sign__In';


const ProtectedRoutes = ({auth , component:Component, ...rest}) => {
  return(
      <Route {...rest} render = {(props)=>{
          if(auth) 
                return <Component {...props}/>;
          if(!auth)
            return <Sign__In/>
      }} />
  );
}

export default ProtectedRoutes;


// <Redirect to={{path:"/signIn", state:{from:props.location}}} />