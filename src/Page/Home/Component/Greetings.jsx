import { RotatingText } from "@/components/ui/shadcn-io/rotating-text"
import React from "react"

export default function Greetings() {
    return (
        <div>
            <h1 className="md:text-6xl text-3xl  font-bold">Greeting! I am a<RotatingText
                className="text-4xl font-semibold text-yellow-400"
                text={['MERN DEVELOPER', 'WEB DEVELOPER', 'FRONTEND DEVELOPER']}
            ></RotatingText></h1>

        </div>
    )
}