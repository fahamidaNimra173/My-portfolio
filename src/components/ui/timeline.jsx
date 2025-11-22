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
      className="w-full font-sans px-4 md:px-8 lg:px-12"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl alice font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-purple-300 leading-tight">
          Education <br />
          <span className="elsie text-yellow-500 inline-block lg:ml-15 mt-2">Milestone</span>
        </h2>
        <p className="text-white/80 alice text-sm sm:text-base md:text-lg max-w-3xl">
          A brief overview of my academic journey, highlighting the key milestones
          from SSC to my Bachelor's degree in Computer Science and Engineering.
        </p>
      </div>

      <div ref={ref} className="relative  mx-auto pb-20">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex text-white justify-start pt-10 md:pt-16 lg:pt-20 gap-6 md:gap-8 lg:gap-10"
          >
            {/* Icon and Title Container */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-24 self-start  ">
              {/* Icon with animated gradient border */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-14 w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 shrink-0"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 blur-md opacity-60 animate-pulse" />
                
                {/* Icon container */}
                <div className="relative h-full w-full rounded-full bg-gradient-to-br from-fuchsia-600 via-purple-600 to-blue-600 p-[2px] shadow-2xl shadow-purple-900/50">
                  <div className="h-full w-full rounded-full overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                    <img
                      src={item.Image}
                      alt={item.title}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Title for medium+ screens */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="hidden md:block text-2xl lg:text-4xl xl:text-5xl md:pl-8 lg:pl-12 font-bold text-white elsie leading-tight"
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Content Container */}
            <div className="relative pl-6 md:pl-8 pr-4 md:pr-6 w-full">
              {/* Title for mobile */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="md:hidden block text-2xl sm:text-3xl mb-3 text-left font-bold text-white elsie"
              >
                {item.title}
              </motion.h3>

              {/* Content card */}
              <div
           
                className="bg-gradient-to-br from-purple-900/20 via-fuchsia-900/10 to-transparent backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Animated timeline line */}
        <div
          style={{
            height: height + "px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
          }}
          className="absolute left-[1.75rem] md:left-[2rem] lg:left-[2rem] top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-purple-600/50 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50"
          />
        </div>
      </div>
    </div>
  );
};