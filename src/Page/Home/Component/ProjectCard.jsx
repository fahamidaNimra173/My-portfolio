import React from "react";
import { projectsData } from "../../../assets/projectsData";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExternalLink, Github, Eye } from "lucide-react";
import "swiper/css";

const ProjectCard = () => {
  return (
    <div className="px-6 py-5 mb-20 relative overflow-hidden">
      <div className="absolute md:hidden block fixed h-40 w-56 blur-3xl top-15 left-10 -z-10 bg-gradient-to-r from-fuchsia-700  to-yellow-700 ">
      </div>
      {/* Animated Wavy Spiral Background */}

      <div className="fixed inset-0 -z-10 opacity-50 md:opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f2f755', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#d946ef', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Multiple Wavy Spirals */}
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            opacity="0.8"
            d="M0,400 Q360,200 720,400 T1440,400"
            className="animate-wave"
          />
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2.5"
            opacity="0.5"
            d="M0,350 Q360,150 720,350 T1440,350"
            className="animate-wave-delayed"
          />
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            opacity="0.4"
            d="M0,450 Q360,250 720,450 T1440,450"
            className="animate-wave-slow"
          />

          {/* Spiral Circles */}
          <circle cx="720" cy="400" r="200" fill="none" stroke="#f1f73e" strokeWidth="2" opacity="0.3" className="animate-spin-slow" style={{ transformOrigin: '720px 400px' }} />
          <circle cx="720" cy="400" r="150" fill="none" stroke="#d946ef" strokeWidth="1.5" opacity="0.25" className="animate-spin-reverse" style={{ transformOrigin: '720px 400px' }} />
          <circle cx="720" cy="400" r="100" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.2" className="animate-spin-slow" style={{ transformOrigin: '720px 400px' }} />
        </svg>
      </div>

      <h1 className="md:text-6xl md:my-19 my-5 text-4xl font-bold text-center elsie
         bg-gradient-to-r from-[#ffffff]  via-[#f7fbb9] to-[#becb03 
    bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="flex flex-col gap-12 z-10 mt-10">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden bg-black/80 backdrop-blur-sm border border-purple-500/30"
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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                speed={600}
                lazy={true}
              >
                {[project.banner1, project.banner2, project.banner3]
                  .filter(Boolean)
                  .map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${project.name} preview ${i + 1}`}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            {/* Info Section */}
            <div className="p-6">
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
                      className="px-2.5 py-1 text-[11px] font-medium text-purple-200 bg-purple-950/50 border border-purple-700/40 rounded-md"
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
                  <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-white bg-purple-600 rounded-lg transition-colors duration-200">
                    <ExternalLink size={16} />
                    Live Link
                  </button>
                </Link>

                {(project.name !== "PixelPulse" && project.name !== 'Ema Ena') && (
                  <Link to={`/projects/${project.id}`}>
                    <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-purple-300 border border-purple-600/50 rounded-lg transition-colors duration-200">
                      <Eye size={16} />
                      View Details
                    </button>
                  </Link>
                )}

                {(project.name === "PixelPulse" || project.name === 'Ema Ena') && (
                  <Link to={project.githubLink} target="_blank">
                    <button className="flex items-center gap-2 px-5 py-2.5 libertinus font-medium text-purple-300 border border-purple-600/50 rounded-lg transition-colors duration-200">
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

        @keyframes wave {
          0%, 100% {
            d: path("M0,400 Q360,200 720,400 T1440,400");
          }
          50% {
            d: path("M0,400 Q360,250 720,400 T1440,400");
          }
        }

        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }

        .animate-wave-delayed {
          animation: wave 10s ease-in-out infinite;
          animation-delay: -2s;
        }

        .animate-wave-slow {
          animation: wave 12s ease-in-out infinite;
          animation-delay: -4s;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin 15s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;