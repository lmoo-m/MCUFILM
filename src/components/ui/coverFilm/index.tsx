import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Chip } from "@mui/material";
import Image from "next/image";

const CoverFilm = ({ film, onHover, onLeave }: any) => {
    const cardRef = useRef<any>();
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const rangeRotate = 32.5;
    const halfRotate = rangeRotate / 2;

    const handleMouse = (e: any) => {
        if (!cardRef.current) return;
        onHover();
        const rect = cardRef.current.getBoundingClientRect();

        const height = rect?.height;
        const width = rect?.width;

        const mouseX = (e.clientX - rect?.left) * rangeRotate;
        const mouseY = (e.clientY - rect?.top) * rangeRotate;

        const ypct = mouseX / width - halfRotate;
        const xpct = (mouseY / height - halfRotate) * -1;

        setX(xpct);
        setY(ypct);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        onLeave();
        setX(0);
        setY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="flex justify-center items-center relative "
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: x,
                rotateY: y,
            }}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouse}
        >
            <Chip
                label={film?.type}
                color="primary"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(50px)",
                }}
                className="absolute -top-1 left-[75%] rotate-12 font-semibold"
            />
            <Image
                src={film?.poster_url}
                alt={film?.title}
                sizes="100vw"
                height={0}
                width={500}
                className="border rounded-md shadow-md"
                style={{
                    width: "75%",
                    transformStyle: "preserve-3d",
                }}
            />
            <Chip
                label={`${film?.days_until} days left`}
                color="primary"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(50px)",
                }}
                className="absolute -bottom-3 uppercase font-semibold"
            />
        </motion.div>
    );
};

export default CoverFilm;
