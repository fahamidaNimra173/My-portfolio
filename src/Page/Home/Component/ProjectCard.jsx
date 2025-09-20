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
    bg-gradient-to-r from-white via-[#d015ff] to-white bg-clip-text text-transparent"
    style={{
      backgroundImage:"https://i.ibb.co.com/zTQrswRG/a038022e-c551-426e-b34d-4cd035a75d08-removebg-preview.png"
    }}
    >
        My Projects
      </h1>

      <div className="flex flex-col gap-8 z-50 mt-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="  md:gap-5
                   rounded-2xl border-t-4 border-purple-400 overflow-hidden"
          >
            {/* Slider */}
            <div className="flex-1 ">
              <Swiper modules={[Autoplay]} autoplay={{ delay: 2500 }} loop slidesPerView={1}>
                {[project.banner1, project.banner2, project.banner3]
                  .filter(Boolean)
                  .map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt="" className="w-full h-80 object-cover" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            {/* Info */}
            <div className="p-4 py-10 backdrop-blur-md border border-purple-400
                        shadow-[0_0_25px_6px_rgba(168,85,247,0.7),inset_0_0_15px_4px_rgba(168,85,247,0.8)]
                        rounded-b-xl">
              <h2 className="md:text-4xl text-2xl font-bold text-white elsie">
                {project.name}
              </h2>
              <p className="text-white mt-4 text-[16px] font-medium">
                {project.note}
              </p>
              <Link to={`/projects/${project.id}`}>
                <button className="mt-10 libertinus mb-15 viewMore">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProjectCard;

