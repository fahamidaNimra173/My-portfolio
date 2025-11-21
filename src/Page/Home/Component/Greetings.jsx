import { GradientText } from "@/components/ui/shadcn-io/gradient-text"
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text"
import React from "react"

export default function Greetings() {
    return (
        <div>
            <h1 className="md:text-6xl   text-4xl  font-bold">
                <GradientText  text="Greeting! I am a" />
                <RotatingText
                    className="font-semibold text-yellow-400"
                    text={['MERN DEVELOPER', 'WEB DEVELOPER', 'FRONTEND DEVELOPER']}
                ></RotatingText></h1>

        </div>
    )
}