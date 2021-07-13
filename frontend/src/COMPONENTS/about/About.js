import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../header/Header__for__home__page/Navbar'

function About() {
    return (
        <div>
            <Navbar/>
            <div className="bg-black flex">
            <Link to="/admin" className="w-1/2 h-screen object-fill opacity-80"><img  src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/107667963_2900387276896368_6388320940719851144_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gL-J36AK92EAX_UG__3&_nc_ht=scontent.fgau1-2.fna&oh=e6f988d463e6e250e83c65e8b9424c52&oe=60E69C4F" /></Link>
                <div className="justify-center w-full mt-32">
                    <h1 className="text-center  text-white border-b-2 p-10 text-2xl font-bold tracking-widest">About Us</h1>
                <div className=" flex items-center mx-10">
                    <div className=" mx-10 w-full h-96">
                        <h1 className="text-center mt-5 text-blue-300 tracking-widest text-6xl">HIMANGSHU BAISHYA</h1>
                        <h1 className="text-center mt-10 text-white tracking-widest font-extralight text-2xl">National Institute of Technology , Karnataka , Surathkal</h1>
                        <h1 className="text-center tracking-widest text-blue-300 opacity-60 font-extralight p-1">B Tech , 3rd Year Student</h1>
                        <h1 className="text-center mt-3 text-white tracking-widest font-extralight text-2xl">Cotton College , Guwahati , Assam</h1>
                        <h1 className="text-center tracking-widest text-blue-300 opacity-60 font-extralight p-1 ">Studied Physics , Chemistry and Mathematics</h1><br/>
                        <h1 className="text-center mt-6 text-white font-light opacity-60 tracking-widest leading-7">I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as along with a team. I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem. I believe in character, values, vision, and action. I am a quick learner and believe in
                         learning from my mistakes for I strongly feel that this virtue will take me ahead in life and career.</h1>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
