import { GradientText } from "@/components/ui/shadcn-io/gradient-text"
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text"
import React from "react"

export default function Greetings() {
    return (
        <div className="my-10 md:mt-15 mb-5">
            <h1 className="md:text-6xl alice lg:text-center  text-3xl text-wrap  font-bold">
                <GradientText text="Greeting! I'm a" />
                <RotatingText
                    className="font-semibold md:uppercase  text-yellow-400"
                    text={['MERN Developer', 'Web Developer', 'Frontend Developer']}
                ></RotatingText></h1>
            <p className="text-[16px] lg:hidden text-white dark:text-white font-medium alice mt-2">
                Combining artistic passion with technical skill, I create dynamic,
                user-friendly websites. Using modern technologies like Next JS, React, Tailwind CSS,
                and Node.js, I build scalable, responsive solutions that deliver
                seamless user experiences.
            </p>
            <p className="text-[20px] hidden lg:block text-white p-5 lg:pr-15 dark:text-white font-medium alice">
                Combining artistic passion with technical skill, I create dynamic,
                user-friendly websites that bring ideas to life with clarity and
                purpose. Leveraging modern technologies like React, Tailwind CSS,
                and Node.js, I build scalable, responsive, and high-performance
                digital solutions that deliver seamless user experiences across
                devices.
            </p>

        </div>
    )
}