import React from "react";
import { motion } from "framer-motion";

export default function TextAnimation({ children }: { children: string }) {
    return (
        <div className="overflow-y-hidden">
            {children.split("").map((char, i): any => {
                return (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{
                            type: "spring",
                            delay: i / 40,
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
}
