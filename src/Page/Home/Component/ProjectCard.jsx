import React from "react";
import { projectsData } from "../../../assets/projectsData";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectCard = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-400">My Projects</h1>
      <div className="grid gap-8 mt-10 md:grid-cols-2 ">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Slider */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              loop
              spaceBetween={0}
              slidesPerView={1}
            >
              {[project.banner1, project.banner2, project.banner3].map(
                (img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.note}</p>
              <Link to={`/projects/${project.id}`}>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
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

