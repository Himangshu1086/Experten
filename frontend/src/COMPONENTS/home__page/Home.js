import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../header/Header__for__home__page/Navbar'
import Container__For__Category from './People__container/Container__For__Category'
import Poster from './poster/Poster'
import Slide__show from './slide__show/Slide__show'


function Home() {
    return (
        <>
        <div className="pb-4" style={{backgroundImage: "linear-gradient(black, lightblue)"}}>
            <Navbar/>
            <Slide__show/>
            <Poster/>
            <Container__For__Category/>
        </div>
            <Footer/>
        </>
    )
}

export default Home
