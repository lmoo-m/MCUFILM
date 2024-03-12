import React from "react";
import {
    Typography,
    Tooltip,
    Zoom,
    Chip,
    Alert,
    IconButton,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import CoverFilm from "../coverFilm";
import TextAnimation from "../animationText";

const ContentFilm = ({
    film,
    onLeave,
    onHover,
    setReleaseDate,
    cursor,
}: any) => {
    const [showAlert, setShowAlert] = React.useState(false);
    const [isHover, setIsHover] = React.useState(false);

    const dateFormat = new Date(film?.release_date).toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    const hoverLink = (e: any) => {
        onHover();
        setIsHover(true);
    };

    const leaveHover = () => {
        onLeave();
        setIsHover(false);
    };

    const variant = {
        leave: {
            opacity: 0,
            y: 0,
        },
        hover: {
            opacity: 0.5,
            x: cursor.x / 5,
        },
    };

    return (
        <>
            {film.length === 0 ? null : (
                <>
                    <div className="flex flex-col justify-between md:w-1/2">
                        <div>
                            <Typography
                                variant="h6"
                                className="mt-1 inline"
                                onMouseEnter={onHover}
                                onMouseLeave={onLeave}
                            >
                                {film?.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="mt-3"
                                onMouseEnter={onHover}
                                onMouseLeave={onLeave}
                            >
                                {film?.overview} Coming soon{" "}
                                <strong>{dateFormat}</strong>
                            </Typography>
                            <motion.div
                                className="mt-3 inline-block relative"
                                onClick={() =>
                                    film?.following_production?.title
                                        ? setReleaseDate(film?.release_date)
                                        : setShowAlert(true)
                                }
                                onMouseEnter={hoverLink}
                                onMouseLeave={leaveHover}
                            >
                                <AnimatePresence>
                                    {isHover && (
                                        <motion.div
                                            className="absolute -translate-x-[10rem] mix-blend-screen pointer-events-none   "
                                            variants={variant}
                                            initial={"leave"}
                                            animate={
                                                isHover ? "hover" : "leave"
                                            }
                                            exit={"leave"}
                                            transition={{
                                                type: "keyframe",
                                                duration: 0.5,
                                            }}
                                        >
                                            {film?.following_production
                                                ?.poster_url && (
                                                <Image
                                                    src={
                                                        film
                                                            ?.following_production
                                                            ?.poster_url
                                                    }
                                                    alt={
                                                        film
                                                            ?.following_production
                                                            ?.title
                                                    }
                                                    width={100}
                                                    height={50}
                                                    className=" border rounded-md "
                                                />
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <Tooltip
                                    title="Detail"
                                    className="inline cursor-pointer z-20"
                                    arrow
                                    TransitionComponent={Zoom}
                                    placement="bottom"
                                >
                                    <Typography variant="subtitle2">
                                        What is next?
                                        <strong className="ml-2">
                                            {film?.following_production?.title
                                                ? film?.following_production
                                                      ?.title
                                                : "Coming soon"}
                                        </strong>
                                    </Typography>
                                </Tooltip>
                            </motion.div>
                            {showAlert && (
                                <Alert
                                    onMouseEnter={onHover}
                                    onMouseLeave={onLeave}
                                    severity="info"
                                    action={
                                        <IconButton
                                            color="inherit"
                                            size="small"
                                            onClick={() => setShowAlert(false)}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                >
                                    Coming Soon{" "}
                                </Alert>
                            )}
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <a href="https://github.com/lmoo-m" target="_blank">
                                <Typography
                                    onMouseEnter={onHover}
                                    onMouseLeave={onLeave}
                                    variant="body2"
                                    className="inline-flex items-center text-center  cursor-pointer"
                                >
                                    <GitHubIcon className="mr-2" />
                                    My github
                                    <strong className="ml-1">lmoo-m</strong>
                                </Typography>
                            </a>
                            <a
                                href="https://github.com/DiljotSG/MCU-Countdown/tree/develop"
                                target="_blank"
                            >
                                <Typography
                                    onMouseEnter={onHover}
                                    onMouseLeave={onLeave}
                                    variant="body2"
                                    className="inline-flex items-center text-center  cursor-pointer"
                                >
                                    <GitHubIcon className="mr-2" />
                                    API by{" "}
                                    <strong className="ml-1">DiljotSG</strong>
                                </Typography>
                            </a>
                        </div>
                    </div>

                    <CoverFilm
                        film={film}
                        onHover={onHover}
                        onLeave={onLeave}
                    />
                </>
            )}
        </>
    );
};

export default ContentFilm;
