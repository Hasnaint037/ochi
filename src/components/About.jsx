import React from "react";
import img from "../assets/about.jpg";

function About() {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.2"
            className="w-full pt-20 pb-10   bg-[#CDEA68] rounded-xl text-black"
        >
            <h1 className="text-5xl font-regular ps-6 pe-20 pb-14">
                Ochi is a strategic presentation agency for forward-thinking
                businesses that need to raise funds, sell prod­ucts, ex­plain
                com­plex ideas, and hire great peo­ple.
            </h1>
            <div className="w-full border-t-[2px] border-[#bccf76] flex px-6 py-4">
                <div className="w-1/2">
                    <p>What you can expect:</p>
                </div>
                <div className="w-1/2 flex justify-between">
                    <div className="w-2/4 flex flex-col gap-6">
                        {" "}
                        <p>
                            We create tailored presentations to help you
                            persuade your colleagues, clients, or investors.
                            Whether it’s live or digital, delivered for one or a
                            hundred people.
                        </p>
                        <p>
                            We believe the mix of strategy and design (with a
                            bit of coffee) is what makes your message clear,
                            convincing, and captivating.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1>S:</h1>
                        <a href="">Instagram</a>
                        <a href="">Behance</a>
                        <a href="">Facebook</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="w-full border-t-[2px] border-[#bccf76] flex px-6 py-4 mt-14">
                <div className="w-1/2">
                    <h1 className="text-5xl font-semibold">Our approach:</h1>
                    <div className="px-4 py-4 bg-black w-[14vw] rounded-full text-white mt-4">
                        Read More
                    </div>
                </div>
                <div className="w-1/2 rounded-xl overflow-hidden">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
