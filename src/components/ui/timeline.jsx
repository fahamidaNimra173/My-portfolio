import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full   font-sans "
      ref={containerRef}>
      <div className="  ">
        <h2 className="text-lg lg:text-6xl md:text-4xl mb-4  text-purple-300 ">
          Education <br></br> <span className="elsie text-yellow-500">Milestone</span>
        </h2>
        <p
          className="text-white alice text-sm md:text-base ">
          A brief overview of my academic journey, highlighting the key milestones
          from SSC to my Bachelor’s degree in Computer Science and Engineering.
        </p>
      </div>

      <div ref={ref} className="relative lg:max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex text-white justify-start pt-10 gap-4 md:pt-20 md:gap-5 lg::gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-l from-fuchsia-700 via-purple-700 to-fuchsia-600 dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-fuchsia-500 border border-neutral-700 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden elsie md:block text-xl md:pl-20 md:text-5xl font-bold text-white ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden  block text-2xl mb-4 text-left font-bold  text-neutral-100">
                {item.title}
              </h3>
              <h3 className="text-white">
                {item.content}{" "}
              </h3>

            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-purple-600 dark:via-purple-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
