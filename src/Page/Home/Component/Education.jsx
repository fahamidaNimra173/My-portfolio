import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-2">
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
            Bachelor of Science (B.Sc.) in Computer Science and Engineering (CSE)
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Institution: Port City International University
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            CGPA: 3.51
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Background: Computer Science & Engineering
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="space-y-2">
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
            Higher Secondary Certificate (HSC)
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Institution: Patenga City Corporation Women's College
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            GPA: 3.58
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Background: Science
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="space-y-2">
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
            Secondary School Certificate (SSC)
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Institution: South Halishahar High School
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            GPA: 4.00
          </p>
          <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Background: Science
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
