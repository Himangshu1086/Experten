import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from '../../COMPONENTS/header/Header__for__others/Navbar'
import AddAddress from './Address/AddAddress'
import ViewAddress from './Address/ViewAddress'
import OrderList from './OrderList'
import PastOrders from './PastOrders'
function UserAccount() {
  return (
    <div>
      <Navbar/>
      <nav></nav>
      <div className='relative bg-black '>
        <div className='absolute w-full flex justify-center top-20' ><h1 className='text-center text-white text-6xl'>RADHIKA GOYAL</h1></div>
        <img src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='w-full opacity-30 rounded-lg h-72 shadow-xl bg-blend-soft-light' />
      </div>

      <div className='relative bg-gradient-to-br from-blue-300 to-pink-400 m-auto' style={{height:"1200px"}}>
          <div className='relative flex justify-center '>
            <img className='absolute -top-20 shadow-2xl transform transition-all hover:scale-90' style={{borderRadius:"100%" , width:"250px",border:"solid pink 6px" , height:"250px"}} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsZXMlMjBwZXJzb258ZW58MHx8MHx8&w=1000&q=80" placeholder='profile picture'/>
          </div>
          <div className=' relative w-full flex flex-col justify-center top-48' >
          <p className='text-center text-sm text-black m-auto p-2 w-1/5'><strong>baishyahimangshu501@gmail.com</strong></p>
          <p className='text-center text-black text-sm'><strong>8638281845</strong></p>
        </div>
          <div className=' relative top-52 flex justify-center'>
            <Link to="/account/orders"><h1 className='text-center rounded-xl p-4 w-48 bg-black text-white transform transition-all cursor-pointer hover:scale-90 m-2'>Orders</h1></Link>
            <Link to="/account/address"><h1 className='text-center rounded-xl p-4 w-48 bg-black text-white transform transition-all cursor-pointer hover:scale-90 m-2'>Address</h1></Link>
            <Link to="/account/addAddress"><h1 className='text-center rounded-xl p-4 w-48 bg-black text-white transform transition-all cursor-pointer hover:scale-90 m-2'>Add Address</h1></Link>
            <Link to="/account/pastorders"><h1 className='text-center rounded-xl p-4 w-48 bg-black text-white transform transition-all cursor-pointer hover:scale-90 m-2'>Past Orders</h1></Link>
         </div>

        <div className='relative rounded-xl flex justify-center w-3/5 m-auto shadow-2xl top-52 p-4 mt-4'>
         <Switch>
           <Route path="/account/address" >
             <ViewAddress/>
           </Route>
           <Route path="/account/addAddress" >
             <AddAddress/>
           </Route>
           <Route path="/account/orders" >
             <OrderList/>
           </Route>
           <Route path="/account/pastorders" >
             <PastOrders/>
           </Route>
         </Switch>
        </div>
      </div>
      </div>
  )
}

export default UserAccount