
import React from "react";
import { ColourfulText } from "../../../components/ui/colourful-text";
import { Star } from "lucide-react";
import { PiStarFill } from "react-icons/pi";


export default function ColourfulTextDemo() {
    return (
        <div className="relative">

            <h1
                className="text-[16px] flex items-center  bg-black/20 tracking-wide border-1 border-purple-600 w-96 mx-auto font-bold px-5 py-1 rounded-full text-[#d633ff] kaushan  text-center">
               <PiStarFill className="text-yellow-500 shadow-md shadow-pink mr-3 animate-spin"></PiStarFill> <ColourfulText text="Painting the Web with  Code and Color" />
            </h1>
        </div>
    );
}
