
import React from "react";
import {ColourfulText} from "../../../components/ui/colourful-text";


export default function ColourfulTextDemo() {
    return (
        <div>

            <h1
                className="text-4xl font-bold p-5 lg:pr-15 text-[#d633ff] kaushan md:text-left text-center">
                <ColourfulText text="Painting the Web with  Code and Color" /> 
            </h1>
        </div>
    );
}
