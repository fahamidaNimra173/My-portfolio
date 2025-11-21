
import React from "react";
import { ColourfulText } from "../../../components/ui/colourful-text";
import { Star } from "lucide-react";
import { PiStarFill } from "react-icons/pi";


export default function ColourfulTextDemo() {
    return (
        <div className="relative">

            <h1
                className="sm:text-[16px] text-sm flex items-center  bg-black/20 tracking-wide border-1 border-purple-600 md:w-96  mx-auto sm:font-bold font-semibold sm:px-5 px-2 py-1 text-wrap rounded-full text-[#d633ff] kaushan  text-center">
               <PiStarFill className="text-yellow-500 shadow-md shadow-pink sm:mr-3 mr-0 animate-spin"></PiStarFill> <ColourfulText text="Painting the Web with  Code and Color" />
            </h1>
        </div>
    );
}
