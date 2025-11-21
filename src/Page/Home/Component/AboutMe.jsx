import React, { useState } from "react"

export default function AboutMe() {


    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => setShowMore(!showMore);

    const text1 =
        "Im a MERN stack developer fueled by a passion for vibrant design and seamless functionality. From childhood, blending colors and crafting art sparked my creativity — a foundation that now drives my web development journey. Coding felt intimidating at first during university, but in my final year, discovering Python and working on my thesis sparked my true passion for programming. During that time, I also explored web development and instantly fell in love with building dynamic, interactive websites.";

    const text2 =
        "I love exploring UI libraries and creating smooth animations with tools like Framer Motion. Turning ideas into interactive, visually stunning websites using React and Tailwind excites me. On the backend, I work with Express.js and MongoDB to build efficient, data-driven applications. When I’m not coding, I enjoy watching movies and series, and I like designing banners and logos using Canva. I’m focused, driven, and don’t let negativity distract me. I believe in staying true to myself and creating meaningful, user-friendly, SEO-friendly projects that leave a lasting impact.";


    return (
        <div className="p-5 my-20">
            {/* Header without animation */}
            <h1
                className="text-white mb-5 dark:text-white text-4xl elsie font-bold flex  justify-center text-center">

                About <span className="text-[#e283f9] ml-5">Me</span>
            </h1>

            {/* About paragraphs */}
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-center dark:text-white alice text-[20px]">
                    {showMore ? text1 : `${text1.slice(0, 200)}...`}
                </p>
                <p className="text-white text-center dark:text-white alice text-[20px] mt-2">
                    {showMore ? text2 : `${text2.slice(0, 200)}...`}
                </p>

                {/* Toggle button */}
                <button onClick={handleToggle} className="mt-5 btnResume">
                    {showMore ? "See Less" : "See More"}
                </button>
            </div>
        </div>
    )
}