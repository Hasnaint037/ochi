import React from "react";
import { motion } from "framer-motion";

function Marquee() {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed=".1"
            className="w-full py-10 h-[65vh] bg-[#004D43] flex items-center rounded-tl-3xl rounded-tr-3xl mt-4 text-white"
        >
            <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex items-center py-2 whitespace-nowrap overflow-hidden">
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                    className="text-[14vw] leading-none font-bold pr-4"
                >
                    We are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                    className="text-[14vw] leading-none  font-bold pr-4"
                >
                    We are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                    className="text-[14vw] leading-none  font-bold pr-4"
                >
                    We are Ochi
                </motion.h1>
            </div>
        </div>
    );
}

export default Marquee;
