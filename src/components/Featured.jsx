import React from "react";
import img from "../assets/about.jpg";
import { motion, useAnimation } from "framer-motion";

function Featured() {
    const cards = [useAnimation(), useAnimation()];
    const handleAnimation = (index = 0) => {
        cards[index].start({ y: "0" });
    };
    const stopAnimation = (index = 0) => {
        cards[index].start({ y: "100%" });
    };
    return (
        <div className="w-full  py-10">
            <div className="border-b-[1px] px-6 border-zinc-600 w-full pb-8">
                <h1 className="text-5xl font-semibold tracking-tight">
                    Featured projects
                </h1>
            </div>
            <div className="cards w-full flex gap-8 mt-6 px-6">
                <motion.div
                    onHoverStart={() => handleAnimation(0)}
                    onHoverEnd={() => stopAnimation(0)}
                    className="card relative w-1/2 h-[84vh]  rounded-xl"
                >
                    <h1 className="flex absolute left-full -translate-x-10 -translate-y-1/2 top-1/2 z-[9] text-5xl font-semibold text-[#CDEA68] overflow-hidden">
                        {"FYDE".split("").map((item, index) => {
                            return (
                                <motion.span
                                    transition={{
                                        ease: "linear",
                                    }}
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            );
                        })}
                    </h1>
                    <div className="w-full h-full overflow-hidden rounded-xl">
                        <img
                            className="w-full h-full bg-cover"
                            src={img}
                            alt=""
                        />
                    </div>
                </motion.div>
                <motion.div
                    onHoverStart={() => handleAnimation(1)}
                    onHoverEnd={() => stopAnimation(1)}
                    className="card relative w-1/2 h-[84vh] rounded-xl"
                >
                    <h1 className="flex absolute right-full translate-x-10 -translate-y-1/2 top-1/2 z-[9] text-5xl font-semibold text-[#CDEA68] overflow-hidden">
                        {"VISE".split("").map((item, index) => {
                            return (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            );
                        })}
                    </h1>
                    <div className="w-full h-full overflow-hidden rounded-xl ">
                        <img
                            className="w-full h-full bg-cover"
                            src={img}
                            alt=""
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Featured;
