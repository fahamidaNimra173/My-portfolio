import React from "react";
import { useParams } from "react-router";
import { projectsData } from "../../../assets/projectsData";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft } from "react-icons/fa";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    if (!project) return <h1 className="text-center text-white">Project Not Found</h1>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            {/* Back to Home Button - Fixed Position */}
            <motion.a
                href="/"
                className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-purple-600/20 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-600/40 transition-all"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaArrowLeft className="text-purple-400" />
                <span className="text-white">Back to Home</span>
            </motion.a>

            <div className="px-6 md:px-12 lg:px-20 pt-34 pb-20 max-w-7xl mx-auto">
                {/* Hero Title Section */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        {project.name}
                    </h1>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Image Gallery - Stacked Vertical Layout */}
                <div className="mb-20 space-y-8">
                    {/* Banner 1 - Full Width with Tilt */}
                    <motion.div
                        className="relative overflow-hidden rounded-3xl"
                        initial={{ opacity: 0, y: 50, rotate: -1 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02, rotate: 0.5 }}
                    >
                        <img
                            src={project.banner1}
                            alt=""
                            className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
                    </motion.div>

                    {/* Banner 2 - Offset Left with Shadow */}
                    <motion.div
                        className="relative overflow-hidden rounded-3xl md:ml-12 shadow-2xl shadow-purple-900/50"
                        initial={{ opacity: 0, x: -100, rotate: 1 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.02, rotate: -0.5, x: 10 }}
                    >
                        <img
                            src={project.banner2}
                            alt=""
                            className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Banner 3 - Offset Right with Glow */}
                    <motion.div
                        className="relative overflow-hidden rounded-3xl md:mr-12 shadow-2xl shadow-pink-900/50"
                        initial={{ opacity: 0, x: 100, rotate: -1 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.02, rotate: 0.5, x: -10 }}
                    >
                        <img
                            src={project.banner3}
                            alt=""
                            className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tl from-pink-600/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Banner 4 - Centered with Border Glow */}
                    <motion.div
                        className="relative overflow-hidden rounded-3xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.6)" }}
                    >
                        <img
                            src={project.banner4}
                            alt=""
                            className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                </div>

                {/* Description Card */}
                <motion.div
                    className="mb-16 bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-lg leading-relaxed text-gray-200">
                        {project.description}
                    </p>
                </motion.div>

                {/* Key Features Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.keyFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-gradient-to-br from-purple-800/40 to-pink-800/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                                whileHover={{ scale: 1.03, borderColor: "rgba(168, 85, 247, 0.5)" }}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-purple-400 text-xl mt-1">✦</span>
                                    <p className="text-gray-200">{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologys.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-full text-white font-medium border border-purple-400/30"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.9 + idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Challenges Section */}
                {project.challenges && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Challenges Faced
                        </h2>
                        <div className="space-y-4">
                            {project.challenges.map((challenge, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-gradient-to-br from-purple-800/30 to-pink-800/10 backdrop-blur-sm rounded-xl p-5 border-l-4 border-purple-500"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <p className="text-gray-200">{challenge}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Future Improvements Section */}
                {project.futureImprovements && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Future Improvements
                        </h2>
                        <div className="space-y-4">
                            {project.futureImprovements.map((improvement, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-gradient-to-br from-purple-800/30 to-pink-800/10 backdrop-blur-sm rounded-xl p-5 border-l-4 border-pink-500"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.3 + idx * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <p className="text-gray-200">{improvement}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Original Buttons - UNCHANGED */}
                <motion.div
                    className="flex flex-wrap gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="buttonfold" class="buttonfold">
                            <span class="fold"></span>

                            <div class="points_wrapper">
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                            </div>

                            <span class="inner">
                                <svg
                                    class="icon"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                >
                                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                                </svg>
                                View Live
                            </span>
                        </button>
                    </a>

                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="buttonfold" class="buttonfold">
                            <span class="fold"></span>

                            <div class="points_wrapper">
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                                <i class="point"></i>
                            </div>

                            <span class="inner">
                                <FaGithub></FaGithub>
                                GitHub
                            </span>
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;