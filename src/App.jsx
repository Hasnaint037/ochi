import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import Featured from "./components/Featured";

function App() {
    const locomotivescroll = new LocomotiveScroll();
    return (
        <div className="w-full min-h-scree bg-white text-black select-none">
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <Marquee></Marquee>
            <About></About>
            <Eyes></Eyes>
            <Featured></Featured>
        </div>
    );
}

export default App;
