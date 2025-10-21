import React from "react";
import { projectsData } from "../../../assets/projectsData";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectCard = () => {
  return (
    <div className="px-6 py-10 mb-20 bg-fixed bg-contain"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/zTQrswRG/a038022e-c551-426e-b34d-4cd035a75d08-removebg-preview.png')",
      }}>
      <h1 className="md:text-6xl md:my-19 my-5 text-4xl font-bold text-center libertinus
        bg-gradient-to-r from-white via-[#d015ff] to-white bg-clip-text text-transparent animate-pulse">
        My Projects
      </h1>

      <div className="flex flex-col gap-12 z-50 mt-10">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style={{
              animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both`
            }}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl animate-gradient-rotate"></div>
            
            {/* Card Content */}
            <div className="relative m-[3px] bg-gray-900/95 rounded-2xl overflow-hidden">
              {/* Slider Section */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50 z-10 pointer-events-none"></div>
                <Swiper 
                  modules={[Autoplay]} 
                  autoplay={{ delay: 2500 }} 
                  loop 
                  slidesPerView={1}
                  className="group-hover:scale-105 transition-transform duration-700"
                >
                  {[project.banner1, project.banner2, project.banner3]
                    .filter(Boolean)
                    .map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt="" className="w-full h-80 object-cover" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

              {/* Info Section */}
              <div className="p-6 backdrop-blur-md bg-gradient-to-br from-purple-900/40 to-gray-900/60 border-t-2 border-purple-400/50">
                {/* Project Name with Glow Effect */}
                <h2 className="md:text-4xl text-2xl font-bold text-white elsie relative inline-block group-hover:text-purple-300 transition-colors duration-300">
                  {project.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></span>
                </h2>

                {/* Technology Badges */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold text-purple-100 bg-purple-600/30 border border-purple-400/50 rounded-full backdrop-blur-sm hover:bg-purple-500/40 hover:scale-110 transition-all duration-300 cursor-default"
                        style={{
                          animation: `slideIn 0.5s ease-out ${i * 0.1}s both`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-200 mt-4 text-[16px] font-medium leading-relaxed">
                  {project.note}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to={project.liveLink} target="_blank">
                    <button className="relative px-6 py-3 libertinus font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden group/btn hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                      <span className="relative z-10">Live Link</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </Link>

                  {(project.name !== "PixelPulse" && project.name !== 'Ema Ena') && (
                    <Link to={`/projects/${project.id}`}>
                      <button className="relative px-6 py-3 libertinus font-bold text-white border-2 border-purple-400 rounded-lg overflow-hidden hover:bg-purple-600/20 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  )}

                  {(project.name === "PixelPulse" || project.name === 'Ema Ena') && (
                    <Link to={project.githubLink} target="_blank">
                      <button className="relative px-6 py-3 libertinus font-bold text-white border-2 border-purple-400 rounded-lg overflow-hidden hover:bg-purple-600/20 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300">
                        GitHub
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;