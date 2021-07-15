import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../header/Header__for__home__page/Navbar'

function About() {
    return (
        <div>
            <Navbar/>
            <div className=" bg-black sm:flex">
            <Link to="/admin" className="w-full bg-black h-96 sm:h-full object-fill  opacity-20 sm:opacity-60"><img  src="https://lh3.googleusercontent.com/pqa4gLFaW1mtPPOMAg8SXQ4V4b1ujHopeDNvoRKKPW_VIaMOB0wFPUdsUFt_WJZenaBm5rvMqmS8W9_UNTqIEbI8UIfBPQFUaAKeBmu3vIiYGzxSceAGiNWlie0IHAY8pz_Wx5555RYW12T2raTt_R2HLb7ZwHaC5nwXHRWAK9gDp3rB9_FpvXAXgaq52dYe1Z0ab45txjvVqj4fAfU81vXueDLH_vq4zYj2XKj8d9lxGoDsU_WckYp92hLGqfSua8QaX7f7BM4JYuxzMLDcSjMbEC_byNwKcFPr4GraqMm3maRLIbwpr7vECOqlWHcGPJvMNDpR_Cljg3gs-tx2fMsQ2-8TcF-zcdpGrpBTwxTMpzyy1rUb0ZTI0YB2LiAhl39YonCqclOzS-SXAlA_NnvLDLwqaoctJyeoba6eE7mIhiRgbSTcKjBWo9hqHv6R-FaQKzHxBYgNtymsZSbY7tcj5INsuNH0I-8M48R08HcbbWRhJuc5mdwqCewUsqndRKRMTwZQKI85cakOX7zGyE1IOwYDUzemfAWelWGYBPIJHfyOoJjMeFUiihHukTbQ-wY5G07G1UQyYaHfD4G4_EY8w6g-CRM-wTy9oOgOlWar1jDNOzmC7RPb6flzJN-Q9_RV8kpTJv-GSDO3I43_3hPSGaXxEhEVhStuKtQlcBtR-2ITVL1LK9sFiw8k_58_uRbA1Ja1AwEDePs-zyu1KJnj=w432-h935-no?authuser=1" /></Link>
            
                        <h1 className="text-center hidden mt-5 text-blue-300 tracking-widest sm:text-6xl">HIMANGSHU BAISHYA</h1>
                        <h1 className="text-center hidden mt-10 text-white tracking-widest font-extralight sm:text-2xl">National Institute of Technology , Karnataka , Surathkal</h1>

                <div className="absolute top-0 sm:static justify-center w-full mt-32">
                    <h1 className="text-center hidden sm:block text-white border-b-2 p-10 sm:text-2xl font-bold tracking-widest">About Us</h1>
                <div className=" flex  items-center sm:mx-10">
                    <div className=" sm:mx-10 mx-4 w-full h-96">
                        <h1 className="text-center mt-5 text-blue-300  tracking-widest sm:text-6xl">HIMANGSHU BAISHYA</h1>
                        <h1 className="text-center mt-10 text-white tracking-widest font-extralight sm:text-2xl">National Institute of Technology , Karnataka , Surathkal</h1>
                        <h1 className="text-center tracking-widest text-blue-300 opacity-60 font-extralight p-1">B Tech , 3rd Year Student</h1>
                        <h1 className="text-center mt-3 text-white tracking-widest font-extralight sm:text-2xl">Cotton College , Guwahati , Assam</h1>
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
