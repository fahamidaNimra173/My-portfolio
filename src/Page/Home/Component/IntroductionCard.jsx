import React from "react";

import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function IntroductionCard() {
    return (
        <div className="relative">
            <div className="absolute animate-spin  h-72  w-96 blur-3xl top-5 left-80 -z-10 bg-gradient-to-b from-purple-500  to-fuchsia-700 opacity-70"
                style={{ animationDuration: '15s' }}
            >
            </div>
            <div className="absolute animate-spin  h-72  w-80 blur-3xl -top-10 -left-90 -z-10 bg-gradient-to-b from-purple-700  to-fuchsia-700 opacity-70"
                style={{ animationDuration: '15s' }}
            >
            </div>
            <div className="md:glass-container relative md:sticky md:flex-none flex flex-col items-center shadow-2xl md:shadow-none  shadow-fuchsia-500 md:border-none  border-1 border-purple-400 md:top-0  top-20 space-y-2  px-3 py-5 rounded-2xl">
                <img
                    className="profile-img mx-auto rounded-2xl  object-contain"
                    src="https://i.ibb.co.com/whP4sbkf/my-Image-Bg-Blur.jpg"
                    alt="Fahmida Nimra"
                />
                <h1 className="text-white dark:text-white libertinus text-2xl mt-5 mb-2">Fahmida Nimra</h1>
                <h1 className="text-white dark:text-white alice">Mern Stack Developer | Front End Developer</h1>
                <h1 className="text-white dark:text-white alice">Chittagong, Bangladesh</h1>
                <h1 className="text-white dark:text-white alice text-wrap">Email: fahmidanimra@gmail.com</h1>
                <h1 className="text-white dark:text-white alice text-wrap">
                    Contact no:{" "}
                    <a href="tel:+8801568029731" className="hover:underline text-[#e283f9]">
                        +8801568029731
                    </a>
                </h1>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-3">
                    <a
                        href="https://www.facebook.com/fahmida.nimra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#1877F2] transition"
                    >
                        <FaFacebookF size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fahmida-nimra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#0A66C2] transition"
                    >
                        <FaLinkedinIn size={22} />
                    </a>
                    <a
                        href="https://github.com/fahamidaNimra173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition"
                    >
                        <FaGithub size={22} />
                    </a>
                </div>
            </div>
        </div>


    )
}