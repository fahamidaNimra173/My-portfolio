
import React from "react";
import SparklesCore  from "../../../components/ui/sparkles";

export default function SparklesPreview() {
    return (
        <div
            className="  flex flex-col items-start  overflow-hidden rounded-md">
            <h1
                className="text-3xl lg:text-5xl font-bold lg:ml-4 text-purple-500 elsie text-center  relative z-20">
                Milestone
            </h1>
            <div className="w-[20rem] h-10 lg:h-40 relative">
                {/* Gradients */}
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF" />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                    className="absolute inset-0  h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
