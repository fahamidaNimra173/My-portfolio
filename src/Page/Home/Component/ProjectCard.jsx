import React from "react";
import { projectsData } from "../../../assets/projectsData";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, Github, Eye } from "lucide-react";
import "swiper/css";

const ProjectCard = () => {
  return (
    <div className="px-6 py-5 mb-20 bg-fixed bg-contain"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/zTQrswRG/a038022e-c551-426e-b34d-4cd035a75d08-removebg-preview.png')",
      }}>
      <h1 className="md:text-6xl md:my-19 my-5 text-4xl font-bold text-center elsie
         bg-gradient-to-r from-[#ffffff]  via-[#ffffff] to-[#cc00ff] 
    bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="flex flex-col gap-12 z-10 mt-10">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            className="group relative  rounded-2xl overflow-hidden bg-black border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:scale-[1.02]"
            style={{
              animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
            }}
          >
            {/* Animated Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/70 border-2 border-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -z-10 top-10 right-50 w-64 h-96 bg-pink-100/15 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
            {/* Slider Section */}
            <div className="relative overflow-hidden">
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
            <div className="p-6 ">
              {/* Project Name */}
              <h2 className="md:text-4xl text-2xl font-bold text-white elsie mb-4">
                {project.name}
              </h2>
              {/* Description */}
              <p className="text-gray-300 mb-5 text-[16px] font-medium leading-relaxed">
                {project.note}
              </p>

              {/* Technology Badges */}
              {project.technologys && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologys.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium text-purple-200 bg-purple-950/50 border border-purple-700/40 rounded-md hover:border-purple-500/60 hover:scale-105 transition-all duration-200"
                      style={{
                        animation: `slideIn 0.4s ease-out ${i * 0.05}s both`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}



              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to={project.liveLink} target="_blank">
                  <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-600/30">
                    <ExternalLink size={16} />
                    Live Link
                  </button>
                </Link>

                {(project.name !== "PixelPulse" && project.name !== 'Ema Ena') && (
                  <Link to={`/projects/${project.id}`}>
                    <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-purple-300 border border-purple-600/50 hover:border-purple-500 rounded-lg transition-all duration-200 hover:bg-purple-950/30">
                      <Eye size={16} />
                      View Details
                    </button>
                  </Link>
                )}

                {(project.name === "PixelPulse" || project.name === 'Ema Ena') && (
                  <Link to={project.githubLink} target="_blank">
                    <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-purple-300 border border-purple-600/50 hover:border-purple-500 rounded-lg transition-all duration-200 hover:bg-purple-950/30">
                      <Github size={16} />
                      GitHub
                    </button>
                  </Link>
                )}
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
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;