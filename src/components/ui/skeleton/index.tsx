import React from "react";
import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <>
            <div className="w-1/2">
                <Skeleton variant="text" height={60} />
                <Skeleton variant="text" height={40} />

                <div className="mt-3">
                    <Skeleton variant="text" height={40} />
                </div>
            </div>
            <div className="flex justify-center items-center relative w-1/2">
                <Skeleton variant="rectangular" width={210} height={210} />
            </div>
        </>
    );
}
