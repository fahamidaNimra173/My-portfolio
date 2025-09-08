import React from "react";
import { useParams } from "react-router";
import { projectsData } from "../../../assets/projectsData";
import { motion } from "framer-motion";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    if (!project) return <h1 className="text-center text-white">Project Not Found</h1>;

    return (
        <div className="px-6 pt-30 space-y-20 py-10 text-white">
            <h1 className="text-4xl font-bold mb-6 text-purple-400">{project.name}</h1>

            {/* Banner + Grid */}
            <motion.img
                src={project.banner1}
                alt=""
                className="w-full h-80 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
                <img src={project.banner2} alt="" className="col-span-2 h-48 object-cover rounded-lg" />
                <img src={project.banner3} alt="" className="h-48 object-cover rounded-lg" />
            </div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-lg"
            >
                {project.description}
            </motion.p>

            {/* Image 4 + Key Features */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
                <motion.img
                    src={project.banner4}
                    alt=""
                    className="rounded-lg object-cover w-full"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {project.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Technologies */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                    {project.technologys.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-purple-600 px-3 py-1 rounded-lg text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
     
            {/* Challenges */}
            {project.challenges && (
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">Challenges Faced</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {project.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Future Improvements */}
            {project.futureImprovements && (
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">Future Improvements</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {project.futureImprovements.map((improvement, idx) => (
                            <li key={idx}>{improvement}</li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Links */}
            <div className="mt-8 flex gap-4">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded text-white"
                >
                    Live Site
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded text-white"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
