import React, { useEffect, useState } from "react";

function Eyes() {
    const [angle, setAngle] = useState(0);
    window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let x = mouseX - window.innerWidth / 2;
        let y = mouseY - window.innerHeight / 2;

        let angleindeg = Math.atan2(y, x) * (180 / Math.PI);
        setAngle(angleindeg - 180);
        // console.log(angle);
    });

    return (
        <div className="w-full h-screen overflow-hidden">
            <div
                data-scroll
                data-scroll-speed="-.7"
                className="relative eyes w-full h-full"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 flex">
                    <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div
                                style={{
                                    transform: `translate(-50%,-50%) rotate(${angle}deg)`,
                                }}
                                className="absolute w-full top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]"
                            >
                                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div
                                style={{
                                    transform: `translate(-50%,-50%) rotate(${angle}deg)`,
                                }}
                                className="absolute w-full top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]"
                            >
                                <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
