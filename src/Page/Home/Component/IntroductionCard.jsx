import React from "react";

import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function IntroductionCard() {
    return (
        <div className="glass-container sticky top-20 space-y-2 border-2 px-3 py-5 rounded-2xl">
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
    )
}