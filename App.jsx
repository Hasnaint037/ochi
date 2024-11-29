import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import Featured from "./components/Featured";
import Canvas from "./Canvas";
import data from "./project2/data";

function App() {
    const locomotivescroll = new LocomotiveScroll();
    return (
        // <div className="w-full min-h-scree bg-white text-black select-none">
        //     <Navbar></Navbar>
        //     <LandingPage></LandingPage>
        //     <Marquee></Marquee>
        //     <About></About>
        //     <Eyes></Eyes>
        //     <Featured></Featured>
        // </div>

        /* Here starts project 2*/
        <div className="w-full min-h-screen bg-black text-white relative">
            {/* <Canvas></Canvas> */}
            {/* {data.map((item, key) => { */}
            {/* return ( */}
            {/* <div key={key}> */}
            {data[0].map((i, k) => {
                return <Canvas details={i} key={k}></Canvas>;
            })}{" "}
            {/* </div> */}
            {/* ); */}
            {/* })} */}
        </div>
    );
}

export default App;
