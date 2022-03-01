import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../header/Header__for__home__page/Navbar'
import person from '../../PHOTO/me.jpg'

function About() {
    return (
        <div>
            <Navbar/>
            <div className=" bg-black sm:flex h-screen text-white">
            <Link to="/admin" className="w-full sm:flex hidden h-96 sm:h-full object-fill  opacity-30 sm:opacity-60"><img  src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /></Link>
            
                        <h1 className="text-center hidden mt-5 sm:text-blue-300 tracking-widest sm:text-6xl">HIMANGSHU BAISHYA</h1>
                        <h1 className="text-center hidden mt-10 sm:text-white tracking-widest font-extralight sm:text-2xl">National Institute of Technology , Karnataka , Surathkal</h1>

                <div className="absolute top-0 sm:static justify-center w-full mt-32">
                    <h1 className="text-center hidden sm:block sm:text-white border-b-2 p-10 sm:text-2xl font-bold tracking-widest">About Us</h1>
                <div className=" flex  items-center sm:mx-10">
                    <div className=" sm:mx-10 mx-4 w-full h-96">
                        <h1 className="text-center mt-5 sm:text-blue-300  tracking-widest sm:text-6xl">HIMANGSHU BAISHYA</h1>
                        <h1 className="text-center mt-10 sm:text-white tracking-widest font-extralight sm:text-2xl">National Institute of Technology , Karnataka , Surathkal</h1>
                        <h1 className="text-center tracking-widest text-blue-300 opacity-60 font-extralight p-1">B Tech , 3rd Year Student</h1>
                        <h1 className="text-center mt-3 sm:text-white tracking-widest font-extralight sm:text-2xl">Cotton College , Guwahati , Assam</h1>
                        <h1 className="text-center tracking-widest text-blue-300 opacity-60 font-extralight p-1 ">Studied Physics , Chemistry and Mathematics</h1><br/>
                        <h1 className="text-center mt-6 sm:text-white font-light opacity-60 tracking-widest leading-7">I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as along with a team. I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem. I believe in character, values, vision, and action. I am a quick learner and believe in
                         learning from my mistakes for I strongly feel that this virtue will take me ahead in life and career.</h1>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
