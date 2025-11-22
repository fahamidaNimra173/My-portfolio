
//eikhane shob souble double korci ekta large device arekta small device
// tai section id o duita mobile device er jonne just id er side a 1 use korci

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";

import React, { useRef } from 'react';
import {  FaGithub,FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,

} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiDaisyui,
  SiVite,
  SiReactrouter,
  SiFirebase,
  SiExpress,
  SiMongodb,
//   SiTanstackquery,
  SiAxios,

  SiVercel,
  SiNetlify,
  SiCanva,
  SiFramer,
  SiTypescript
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { PiSunHorizonFill } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import emailjs from "emailjs-com";
import ProjectCard from './Component/ProjectCard';


import ColourfulTextDemo from "./Component/ColorfulTitle";
import IntroductionCard from "./Component/IntroductionCard";
import Greetings from "./Component/Greetings";
import AboutMe from "./Component/AboutMe";
import ScrollVelocityDemo from "./Component/Services";




const Home = () => {



   const form = useRef();
  const scrollToContact = () => {
    const contactSection = document.getElementById("connect-me");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // for mobile
    const scrollToContact1 = () => {
    const contactSection = document.getElementById("connect-me1");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_oe3q0i5",
      "template_0icw7jo",
      form.current,
      "GMiAsjYyl-sKW6nd7"
    )
    .then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        e.target.reset();

        toast.success(
          <div className="flex items-start gap-1 px-1">
            <Lottie
              path="/Flying Bee.json"
              loop={false}
              style={{ width: 50, height: 50 }}
            />
            <span className="text-purple-500 font-semibold">
              Thank you for your valuable time!
            </span>
          </div>,
          {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            icon:false,
            theme: "dark",
          }
        );
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        toast.error("Failed to send message, try again later.", {
          position: "top-center",
        });
      }
    );
};




    const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" size={40} /> },
      { name: "JavaScript ", icon: <SiJavascript className="text-yellow-400" size={40} /> },
      { name: "TypeScript ", icon: <SiTypescript className="text-white" size={40} /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" size={40} /> },
      { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
      { name: "Next Js.", icon: <RiNextjsFill className="text-white" size={40} /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" size={40} /> },
      { name: "React Router", icon: <SiReactrouter className="text-red-500" size={40} /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={40} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" size={40} /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={40} /> },
      { name: "TanStack Query", icon: <PiSunHorizonFill className="text-red-400" size={40} /> },
      { name: "Axios", icon: <SiAxios className="text-blue-400" size={40} /> },
      { name: "Moment.js", icon: <IoMdTime className="text-green-300" size={40} /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={40} /> },
      { name: "Vercel", icon: <SiVercel className="text-white" size={40} /> },
      { name: "Netlify", icon: <SiNetlify className="text-sky-400" size={40} /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400" size={40} /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-500" size={40} /> },
      { name: "GitHub", icon: <FaGithub className="text-white" size={40} /> }
    ],
  },
];

  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, rootMargin: "-100px" });


    
 
  
  return (
    <div className="min-h-screen  scroll-smooth">
        
      {/* Large devices: flex row with sticky sidebar and main content */}
      <div className="hidden relative md:flex md:flex-row gap-10 md:gap-5 items-start min-h-screen">
        {/* Sidebar */}
        
        <div className=" bg-black sticky top-0 min-h-screen shadow-fuchsia-400 patterned-bg shadow-2xl text-center md:px-10 px-3 py-15 lg:px-20 md:py-20 flex-shrink">
          <div className="absolute h-56 w-56 blur-3xl rounded-full top-70 left-15 border-8 border-white  bg-fuchsia-700 ">
          </div>
          <div className="absolute h-56 w-56 blur-3xl -top-10 left-35  bg-fuchsia-500 ">
          </div>
          <div className="absolute h-40 w-40 blur-3xl top-70 left-40 border-8 border-white bg-yellow-500 ">
          </div>
          <div className="absolute h-56 w-56 blur-2xl top-90 left-50  bg-black ">
          </div>
            <div className="absolute h-96 w-72 blur-xl top-0 left-23   bg-black ">
          </div>
             <div className="absolute h-56 w-56 rounded-full blur-3xl top-120 left-30 border-8 border-white bg-yellow-700 ">
          </div>
        <IntroductionCard className="z-10"></IntroductionCard>
        </div>

        {/* Main Content */}
      
          
       
        <div className="flex-1 overflow-x-hidden  relative pl-3 pt-30 lg:pt-25 space-y-9 max-h-screen overflow-y-auto">
            <div className="absolute h-40 w-96 blur-3xl top-5 left-80 -z-10 bg-fuchsia-700 ">
            </div>     
          <div>
          <ColourfulTextDemo></ColourfulTextDemo>
         <Greetings></Greetings> 
          <div className="flex gap-10 lg:pr-15 justify-center items-center">
                  <button class="frutiger-button">
                    <div class="inner">
                      <div class="top-white"></div>
                      <span class="text tracking-widest">Hire Me</span>
                    </div>
                  </button>
                  <button onClick={scrollToContact} class="frutiger-button">
                    <div class="inner">
                      <div class="top-white"></div>
                      <span class="text">Contact Me</span>
                    </div>
                  </button>

          </div> 
          </div>
            <ScrollVelocityDemo></ScrollVelocityDemo>
          
          <AboutMe></AboutMe>
         


    <section id='skills' className=" p-5 lg:pr-15">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl max-w-3xl  text-wrap font-extrabold text-center elsie  mb-12 bg-gradient-to-r from-[#ffffff]  via-[#ffffff] to-[#d428ff] 
    bg-clip-text text-transparent">
          Professional Skill Set</h2>

        <div className="space-y-12">
          {skillsData.map((section, index) => (
            <div key={index}>
              <h3 className="  text-white text-2xl tracking-wider dark:text-white elsie font-semibold mb-6">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 md:gap-3">
                {section.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center skill-card">
                    <div className="button text-2xl shadow-2xl shadow-white rounded-[5px] patterned-bg h-35 flex flex-col items-center justify-center w-full py-4">
                      {skill.icon}
                      <span className="mt-2 text-white text-wrap dark:text-white font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <div className='relative p-5 lg:pr-15 hidden md:block z-10 my-20 '>
    
    {/* <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave1"></div>
    <div class="wave1"></div>
    <div class="wave1"></div> */}

{/* <div class="card e-card playing">
  <div class="content">
    <div class="back bg-black">
      <div class="back-content">
        <section
          id="education"
          class="p-6 w-full rounded-lg text-purple-100 flex flex-row gap-5 items-center justify-center"
        >
          <h2 class="text-3xl lg:text-5xl font-bold mb-8 text-center">
            Educational<br></br>
            <span ><SparklesPreview></SparklesPreview> </span>
          </h2>
          
          <div class="relative 
                        shadow-[0_0_25px_6px_rgba(168,85,247,0.7),inset_0_0_20px_10px_rgba(168,85,247,0.8)]
                        rounded-b-xl p-10 border-1 border-purple-600 rounded-3xl">
            <div class=" flex flex-col items-center gap-7 py-15">
             <PiStudentFill className="text-purple-400 h-16 w-25"></PiStudentFill>

              <div className="flex flex-col items-center gap-3">
                <h3 class="text-xl font-semibold">
                BSc in Computer Science & Engineering (CSE)
              </h3>
              <p class="font-medium">
                Port City International University
              </p>
              <p class="font-medium">CGPA: 3.48</p>
              <p class="font-medium">Graduated: 2024</p>
              </div>
            </div>
          </div>



        </section>
      </div>
    </div>
  </div>
</div> */}





    </div>
    <section id='project' className='p-5 '>

      <ProjectCard></ProjectCard>
    </section>


<section
  id="connect-me"
  className="md:hidden lg:block  mb-1 bg-black text-white relative overflow-hidden"
  
>
  {/* Floating Points */}
  <div className="points_wrapper">
    {[...Array(10)].map((_, i) => (
      <i className="point" key={i}></i>
    ))}
  </div>

    <div className="relative   grid md:grid-cols-2 gap-12 items-center z-10 px-8 py-5 w-full h-full">
    {/* LEFT DECOR IMAGE */}
    <img
      src="https://i.ibb.co.com/m5NKRCYr/Tokyo-Ghoul-Kaneki-Ken-1000-7.jpg"
      alt="Left decoration"
      className="absolute left-0 top-1/2 -translate-y-1/2 w-56 opacity-80 pointer-events-none"
    />

    {/* RIGHT DECOR IMAGE */}
    <img
      src="https://i.ibb.co.com/zWs7pXCT/right.jpg"
      alt="Right decoration"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-56 opacity-80 pointer-events-none"
    />

    {/* LEFT SIDE CONTENT */}
    <div className="relative text-center  py-20 z-20">
      <h1 className="text-4xl font-bold libertinus mb-10 bg-gradient-to-r from-[#000000] via via-[#d015ff] to-whit">Get in Touch</h1>
      <p className="text-lg mb-8 alice text-gray-200">
        Open to crafting interfaces that feel like art and function like magic!
      </p>

<div className="flex flex-row items-center justify-center gap-4">
 
  <a
    href="https://www.linkedin.com/in/fahmida-nimra/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:scale-110 transition-transform"
  >
    <FaLinkedin size={48} />
  </a>

  <a
    href="https://github.com/fahamidaNimra173"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:scale-110 transition-transform"
  >
    <FaGithub size={48} />
  </a>

  <a
    href="https://wa.me/8801568029731"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:scale-110 transition-transform"
  >
    <FaWhatsapp size={48} />
  </a>
</div>

    </div>

    {/* RIGHT SIDE - CONTACT FORM */}
    <div className="p-6 mb-5 rounded-lg relative z-20 ">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            name="user-name"
            type="text"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="user-email"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 transition-all w-full p-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
      <ToastContainer/>
    </div>
  </div>
</section>
<section>
  <div className='bg-black text-center py-5 '>
<h1 className="libertinus text-lg text-white bg-white/13 backdrop-blur-sm px-6 py-3 -ml-8 pr-8 shadow-lg border-b  border-white/20 text-center w-full overflow-hidden">
  © 2025 Fahmida Nimra | Curiosity Drives Creation
</h1>


  </div>
</section>


        </div>
        
      </div>

      {/* Small devices: Sidebar + intro in flex container, rest content outside */}
      <div className="md:hidden relative  pt-25 space-y-6">
        
            <div className="absolute  h-40 w-72 blur-3xl top-5 left-60  -z-10 bg-fuchsia-700 ">
            </div>
           {/* <BackgroundBeamsWithCollision> */}
            <div className="flex flex-col-reverse gap-5  items-center">
          {/* Sidebar + intro */}
  
          <IntroductionCard></IntroductionCard>

          <div className="flex-1  px-5 text-center">
            <div>
                 <ColourfulTextDemo></ColourfulTextDemo>
            </div>
            <Greetings></Greetings>
         

            <div className="flex gap-5  items-center justify-center mt-6">
             <a href="/FAHMIDA NIMRA Resume-MERN Stack Developer.pdf" download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.pdf">
                  <button class="frutiger-button">
                    <div class="inner">
                      <div class="top-white"></div>
                      <span class="text tracking-widest">Hire Me</span>
                    </div>
                  </button>
                  </a>
                  <button onClick={scrollToContact1} class="frutiger-button">
                    <div class="inner">
                      <div class="top-white"></div>
                      <span class="text">Contact Me</span>
                    </div>
                  </button>
            </div>
          </div>
        </div>
        <div >
       <ScrollVelocityDemo></ScrollVelocityDemo>
        </div>
 
          {/* </BackgroundBeamsWithCollision> */}

      <section id="about1">
        <AboutMe></AboutMe>
      </section>



      <section id='skills1' ref={skillsRef} className=" p-5 md:hidden ">
      <div className="max-w-5xl mx-auto">
       <h2 className=" text-3xl md:text-5xl max-w-3xl  text-wrap font-extrabold text-center elsie  mb-12 bg-gradient-to-r from-[#ffffff]  via-[#f7fbb9] to-[#becb03] bg-clip-text text-transparent">
          Professional Skill Set
       </h2>

        <div className="space-y-12">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-2xl  text-white dark:text-white elsie font-semibold mb-6">
                {section.title}
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-5 lg:gap-6 gap-3">
                {section.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center flex-wrap skill-card">
                    <div className="button shadow-2xl  shadow-white rounded-[5px] patterned-bg h-35  flex flex-col items-center justify-center w-full py-4">
                      {skill.icon}
                      <span className="mt-2 text-white text-wrap dark:text-white font-medium  text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
    


    <div class="card  my-35 ">
                <div class="content">
                    <div class="back">
                        <div class="back-content">
                            {/* <section id="education1" class="p-2 w-full rounded-lg text-purple-100 flex flex-col gap-3 items-center justify-center">

                                <div class="relative shadow-[0_0_25px_6px_rgba(168,85,247,0.7),inset_0_0_25px_7px_rgba(168,85,247,0.8)] rounded-b-xl p-10 border-1 border-purple-600 rounded-3xl">
                                    <div class=" flex flex-col items-center gap-7 py-12">
                                        <PiStudentFill className="text-purple-400 h-16 w-25"></PiStudentFill>

                                        <div className="flex flex-col items-center justify-center text-center gap-3">
                                            <h3 class="text-xl font-semibold">
                                                BSc in Computer Science & Engineering (CSE)
                                            </h3>
                                            <p class="font-medium">
                                                Port City International University
                                            </p>
                                            <p class="font-medium">CGPA: 3.48</p>
                                            <p class="font-medium">Graduated: 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="text-3xl lg:text-5xl font-bold mb-2  pl-7 text-center">
                                    Educational<br></br>
                                    <SparklesPreview></SparklesPreview>
                                </h2>
                            </section> */}
                        </div>
                    </div>
                </div>
            </div>








                {/* projects section */}
    <section id='project1' >
      <ProjectCard></ProjectCard>
    </section>
 
        
    
<section
  id="connect-me1"
  className="md:block lg:hidden h-full mb-1 bg-black text-white relative overflow-hidden"
 
>
  {/* Floating Points */}
  <div className="points_wrapper">
    {[...Array(10)].map((_, i) => (
      <i className="point" key={i}></i>
    ))}
  </div>

    <div className="relative  mt-5 grid md:grid-rows-2 gap-2 items-center z-10 px-2 py-10 w-full h-full">
    {/* LEFT DECOR IMAGE */}
    <img
      src="https://i.ibb.co.com/m5NKRCYr/Tokyo-Ghoul-Kaneki-Ken-1000-7.jpg"
      alt="Left decoration"
      className="absolute  left-0 top-1/2 -translate-y-1/2 w-56 opacity-80 pointer-events-none"
    />

    {/* RIGHT DECOR IMAGE */}
    <img
      src="https://i.ibb.co.com/zWs7pXCT/right.jpg"
      alt="Right decoration"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-56 opacity-80 pointer-events-none"
    />

    {/* LEFT SIDE CONTENT */}
    <div className="relative text-center bg-black/40 pt-5 pb-5 z-20">
      <h1 className="text-4xl font-bold libertinus mb-10 bg-gradient-to-r from-[#000000] via via-[#d015ff] to-whit">Get in Touch</h1>
      <p className="text-lg mb-8 alice text-gray-200">
        Open to crafting interfaces that feel like art and function like magic!
      </p>

<div className="flex flex-row items-center justify-center gap-4">
  {/* <a
    href="mailto:fahmidanimra@gmail.com"
    className="text-purple-200 hover:scale-110 transition-transform"
  >
    <MdEmail size={28} />
  </a> */}

  <a
    href="https://www.linkedin.com/in/fahmida-nimra/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:scale-110 transition-transform"
  >
    <FaLinkedin size={48} />
  </a>

  <a
    href="https://github.com/fahamidaNimra173"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:scale-110 transition-transform"
  >
    <FaGithub size={48} />
  </a>

  <a
    href="https://wa.me/8801568029731"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:scale-110 transition-transform"
  >
    <FaWhatsapp size={48} />
  </a>
</div>

    </div>

    {/* RIGHT SIDE - CONTACT FORM */}
    <div className="px-2 mb-10 rounded-lg relative z-20 bg-black/40">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-2 text-whites">Name</label>
          <input
            name="user-name"
            type="text"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Email</label>
          <input
            type="email"
            name="user-email"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-3 rounded border border-gray-400 text-white outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 transition-all w-full p-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
    <ToastContainer />
</section>
<section>
  <div className='bg-black text-center py-5 '>
<h1 className="libertinus text-lg text-white bg-white/13 backdrop-blur-sm px-3 py-3   shadow-lg border-b  border-white/20 text-center w-full overflow-hidden">
  © 2025 Fahmida Nimra | Curiosity Drives Creation
</h1>


  </div>
</section>



    

      </div>
    </div>
  );
};

export default Home;

































// import React from 'react';

// const Home = () => {
//     return (
//         <div className=' space-y-20'>
//                 {/* introduction section */}

//             <div className='md:grid md:grid-cols-6 flex gap-10 flex-col-reverse'>
//                 <div className='
//                   bg-black  min-h-screen shadow-2xl patterned-bg shadow-black text-center 
//                   md:px-15 px-3 col-span-2 py-15 md:py-20 
                  
//                 '>
//                     <div className='glass-container lg:fixed md:top-20  space-y-2 border-2 px-3 py-5 rounded-2xl'>
//                         <img className='profile-img h-55 mx-auto rounded-2xl' src="https://i.ibb.co.com/FNghR4y/myPhoto.jpg" alt="" />
//                         <h1 className='libertinus text-2xl mt-5 mb-2'>Fahmida Nimra</h1>
//                         <h1 className='alice'>Mern Stack Developer | Front End Developer </h1>
//                         <h1 className='alice'> Chittagong, Bangladesh</h1>
//                         <h1 className='alice'>fahmidanimra@gmail.com</h1>
//                     </div>
//                 </div>
//                 <div className='col-span-4 pl-3 pt-40 md:pt-60 space-y-11  p-5 lg:pr-15'>

//                     <h1 className='text-4xl font-bold text-[#d633ff] kaushan md:text-left text-center'>Painting the Web with Code and Color</h1>
//                     <p className='text-[20px] font-medium alice ' >Combining artistic passion with technical skill, I create dynamic, user-friendly websites that bring ideas to life with clarity and purpose. Leveraging modern technologies like React, Tailwind CSS, and Node.js, I build scalable, responsive, and high-performance digital solutions that deliver seamless user experiences across devices.</p>
//                     {/* <h1></h1> */}
//                     <div className='flex gap-10 items-center'>
//                         <button className='btnResume'>Resume</button>
//                         <button className='btnResume'>Contact Me</button>
//                     </div>

//                 </div>
//                  {/* About section */}
                

//             </div>
//                                  <div>
//                     <h1>About Me</h1>
//                     <p>about me:I’m a MERN stack developer fueled by a passion for vibrant design and seamless functionality. From childhood, blending colors and crafting art sparked my creativity — a foundation that now drives my web development journey. Coding felt intimidating at first during university, but in my final year, discovering Python and working on my thesis sparked my true passion for programming. During that time, I also explored web development and instantly fell in love with building dynamic, interactive websites.

//                         I love exploring UI libraries and creating smooth animations with tools like Framer Motion. Turning ideas into interactive, visually stunning websites using React and Tailwind excites me. On the backend, I work with Express.js and MongoDB to build efficient, data-driven applications.

//                         When I’m not coding, I enjoy watching movies and series, and I like designing banners and logos using Canva. I’m focused, driven, and don’t let negativity distract me. I believe in staying true to myself and creating meaningful, user-friendly, SEO-friendly projects that leave a lasting impact.</p>
//                  </div>
                               
//         </div>
//     );
// };

// export default Home;



