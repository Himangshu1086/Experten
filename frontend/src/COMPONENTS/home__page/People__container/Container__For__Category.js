import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

function Container__For__Category() {

    
    return (
        <div >
            <h1 className="mx-40 mt-10 mb-10 text-4xl font-black"  style={{fontFamily:"Ubuntu"}}>Explore Different Professionals</h1>
        <div  class="  mx-40 grid grid-cols-6 gap-x-5 gap-y-5 ">
            <div class=" col-start-1 col-end-4 h-96 bg-black text-black rounded-lg ">               
            <Link to="/category/teacher"><div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Teacher</h1></div></Link>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
            </div>

            <div class="col-end-7 col-span-3 h-96 bg-black text-black rounded-lg ">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Electrician</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>

            </div>
            <div class="col-start-1 col-end-3 h-96 bg-black text-black rounded-lg">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Wall Painter</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1602910344216-bd2226c18d4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>

            </div>
            <div class="col-end-7 col-span-4 h-96 bg-black text-black rounded-lg  ">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Photographer</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=338&q=80"/>

            </div>
            <div class="col-start-1 col-end-7 h-96 bg-black text-black rounded-lg  ">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Plumber</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>

            </div>
            <div class="col-start-1 col-end-5 h-96 bg-black text-black rounded-lg  ">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Video Editor & Graphics Degisner</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1562343192-4a2ce87c13e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>

            </div>
            <div class="col-end-7 col-span-2 h-96 bg-black text-black rounded-lg  ">
            <div  className="relative z-30 h-96 object-fit w-full  text-3xl text-white font-black"><h1 id="heading-category" className=" w-auto pb-2 mx-10 pt-80">Raj Mistri</h1></div>
                  <img className="relative transition w-full  object-fill  h-96 -top-96 rounded-lg opacity-50  z-10" src="https://images.unsplash.com/photo-1581094376368-ae9f64e15985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>

            </div>
        </div>
            
        </div>
    )
}

export default Container__For__Category
