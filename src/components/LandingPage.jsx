import React from "react";
import img from "../assets/img1.jpg";
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <div
            data-scroll
            data-scroll-speed="-.3"
            className="w-full h-screen text-black pt-1"
        >
            <div className="textstructure mt-36 px-6">
                {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map(
                    (item, index) => {
                        return (
                            <div className="text" key={index}>
                                <div className="w-fit flex items-center">
                                    {index == 1 && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "7.5vw" }}
                                            transition={{
                                                duration: 0.7,
                                                ease: [0.76, 0, 0.24, 1],
                                            }}
                                            className="w-[7.5vw] mt-1 rounded overflow-hidden bg-red-600 h-[5vw]"
                                        >
                                            <img
                                                className="w-full h-full"
                                                src={img}
                                                alt=""
                                            />
                                        </motion.div>
                                    )}{" "}
                                    <h1 className="uppercase text-7xl font-bold tracking-tighter leading-[5.9vw]">
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
            <div className=" text-white absolute right-[-46px] font-medium top-52 -rotate-90 px-6 py-4 bg-[#E73C37] hover:bg-[#e32620] cursor-pointer hover:scale-[1.03]">
                Site of the Day
            </div>
            <div className="border-t-2 border-zinc-600 mt-36 px-6 py-3 flex justify-between items-center">
                {[
                    "For public and private companies",
                    "From the first pitch to IPO",
                    "START THE PROJECT",
                ].map((item, index) => {
                    return (
                        <p
                            className={`text-md ${
                                index == 2 &&
                                "border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition duration-75 cursor-pointer"
                            }`}
                        >
                            {item}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default LandingPage;
