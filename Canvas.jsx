import React, { useEffect, useRef, useState } from "react";
import canvasImages from "./images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
    const { startIndex, numImages, duration, top, size, left, zIndex } =
        details;
    const [index, setIndex] = useState({ value: startIndex });
    const canvasRef = useRef(null);
    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages - 1,
            duration: duration,
            repeat: -1,
            ease: "linear",
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) });
            },
        });
    });
    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
            // canvas.width = img.width;
            // canvas.height = img.height;
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
    }, [index]);
    return (
        <div>
            <canvas
                ref={canvasRef}
                className="absolute"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                }}
            ></canvas>
        </div>
    );
}

export default Canvas;
