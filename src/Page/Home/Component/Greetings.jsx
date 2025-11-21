import { GradientText } from "@/components/ui/shadcn-io/gradient-text"
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text"
import React from "react"

export default function Greetings() {
    return (
        <div className="mt-10 md:mt-15">
            <h1 className="md:text-6xl   text-3xl text-wrap  font-bold">
                <GradientText  text="Greeting! I am a" />
                <RotatingText
                    className="font-semibold md:uppercase  text-yellow-400"
                    text={['MERN Developer', 'Web Developer', 'Frontend Developer']}
                ></RotatingText></h1>

        </div>
    )
}