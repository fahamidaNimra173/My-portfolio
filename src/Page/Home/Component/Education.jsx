import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      Image:"https://i.ibb.co.com/JWxm9CPL/pciu.jpg",
      content: (
        <div className="space-y-2 bg-black/10 p-3 rounded-2xl shadow-2xl shadow-black">
          <p className="text-md md:text-2xl lg:text-3xl alice  text-neutral-200 font-semibold">
            Bachelor of Science (B.Sc.) in Computer Science and Engineering (CSE)
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            Institution: Port City International University
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            CGPA: 3.51
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            <span className="font-semibold elsie">Background:</span>  Computer Science & Engineering
          </p>
        </div>
      ),

    },
    {
      title: "2019",
      Image:"https://i.ibb.co.com/KzW7hYxT/collage.png",
      content: (
        <div className="space-y-2">
          <p className="text-md md:text-2xl lg:text-3xl  alice text-neutral-200 font-semibold">
            Higher Secondary Certificate (HSC)
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            Institution: Patenga City Corporation Women's College
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            GPA: 3.58
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            <span className="font-semibold alice">Background:</span>  Science
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      Image:"https://i.ibb.co.com/MkSs0ZVN/school.jpg",
      content: (
        <div className="space-y-2">
          <p className="text-md md:text-2xl lg:text-3xl  alice text-neutral-200 font-semibold">
            Secondary School Certificate (SSC)
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            Institution: South Halishahar High School
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
            GPA: 4.00
          </p>
          <p className="text-xs md:text-lg text-neutral-200">
           <span className="font-semibold alice">Background:</span>  Science
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
