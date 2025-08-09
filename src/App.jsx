import React from "react"
import Home from "./sections/Home"
import Header from "./components/Header"
import About from "./sections/About"
import Members from "./sections/Members"
import Gallery from "./sections/Gallery"
import Achievements from "./sections/Achievements"
import Footer from "./components/Footer"
import Teachers from "./sections/Teachers"

function App() {
    return (
        <>
            <Header />

            <Home />

            <About />

            <Teachers />

            <Members />

            <Gallery />

            <Achievements />

            <Footer />
        </>
	)
}

export default App
