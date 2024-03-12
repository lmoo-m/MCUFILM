"use client";

import { getFilm } from "@/components/services/mcu";
import Loading from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import {
    AppBar,
    Container,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import { Suspense, lazy, useEffect, useState } from "react";

const ContentFilm = lazy(() => import("@/components/ui/contentFIlm"));

export default function Home() {
    const [film, setFilm] = useState<any>([]);
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0,
    });
    const [releaseDate, setReleaseDate] = useState("");
    const [mouseVariant, setMouseVariant] = useState("default");

    useEffect(() => {
        getFilm(releaseDate).then((res: any) => {
            setFilm(res.data);
            document.title = res.data.title;
        });

        const move = (e: any) => {
            setCursor({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);
    }, [releaseDate]);

    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const variants = {
        default: {
            x: cursor.x - 12,
            y: cursor.y - 12,
        },
        hovered: {
            x: cursor.x - 35,
            y: cursor.y - 35,
            width: 70,
            height: 70,
        },
    };

    const onHover = () => setMouseVariant("hovered");
    const onLeave = () => setMouseVariant("default");
    return (
        <ThemeProvider theme={theme}>
            <main>
                <motion.div
                    className="rounded-full bg-yellow-300 w-[24px] h-[24px] z-[9999] pointer-events-none fixed "
                    variants={variants}
                    animate={mouseVariant}
                    style={{
                        mixBlendMode: "exclusion",
                    }}
                />
                <AppBar className="px-5 py-2 " position={"sticky"}>
                    <Typography
                        variant="h5"
                        className="text-center font-semibold"
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                    >
                        MCU FILM
                    </Typography>
                </AppBar>
                <Container className="py-5 flex flex-col-reverse md:flex-row gap-5 justify-center mt-12">
                    <Suspense fallback={<Loading />}>
                        <ContentFilm
                            film={film}
                            setReleaseDate={setReleaseDate}
                            onLeave={onLeave}
                            onHover={onHover}
                            cursor={cursor}
                        />
                    </Suspense>
                </Container>
            </main>
        </ThemeProvider>
    );
}
