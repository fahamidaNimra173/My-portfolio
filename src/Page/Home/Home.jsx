
//eikhane shob souble double korci ekta large device arekta small device
// tai section id o duita mobile device er jonne just id er side a 1 use korci


import React, { useRef } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub,FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
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
} from "react-icons/si";
import emailjs from "emailjs-com";
import ProjectCard from './Component/ProjectCard';


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
        "service_oe3q0i5",     // e.g. 'service_xxx123'
        "template_0icw7jo",    // e.g. 'template_abc456'
        form.current,
        "GMiAsjYyl-sKW6nd7"      // e.g. 'user_7xyz890'
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message, try again later.");
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
      { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" size={40} /> },
      { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
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
    //   { name: "TanStack Query", icon: <SiTanstackquery className="text-red-400" size={40} /> },
      { name: "Axios", icon: <SiAxios className="text-blue-400" size={40} /> },
    //   { name: "Moment.js", icon: <SiMoment className="text-green-300" size={40} /> },
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
    ],
  },
];



  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, rootMargin: "-100px" });


    const text = 'About Me';
  const ref = useRef(null);
  const isInView = useInView(ref, { once:  false });
  return (
    <div className="min-h-screen">
      {/* Large devices: flex row with sticky sidebar and main content */}
      <div className="hidden md:flex md:flex-row gap-10 md:gap-5 items-start min-h-screen">
        {/* Sidebar */}
        <div
          className="
                    bg-black 
          sticky top-0 
          min-h-screen shadow-2xl patterned-bg shadow-black text-center 
          md:px-10 px-3 py-15 lg:px-20 md:py-20
           
          flex-shrink
          "
        >
          <div className="glass-container sticky top-20 space-y-2 border-2 px-3 py-5 rounded-2xl">
            <img
              className="profile-img mx-auto rounded-2xl  object-contain"
              src="https://i.ibb.co.com/whP4sbkf/my-Image-Bg-Blur.jpg"
              alt="Fahmida Nimra"
            />
            <h1 className="text-white dark:text-white libertinus text-2xl mt-5 mb-2">Fahmida Nimra</h1>
            <h1 className="text-white dark:text-white alice">Mern Stack Developer | Front End Developer</h1>
            <h1 className="text-white dark:text-white alice">Chittagong, Bangladesh</h1>
            <h1 className="text-white dark:text-white alice text-wrap">Email: fahmidanimra@gmail.com</h1>
           <h1 className="text-white dark:text-white alice text-wrap">
            Contact no:{" "}
            <a href="tel:+8801568029731" className="hover:underline text-[#e283f9]">
              +8801568029731
            </a>
            </h1>
          
               {/* Social Links */}
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://www.facebook.com/fahmida.nimra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1877F2] transition"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/fahmida-nimra/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0A66C2] transition"
        >
          <FaLinkedinIn size={22} />
        </a>
        <a
          href="https://github.com/fahamidaNimra173"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition"
        >
          <FaGithub size={22} />
        </a>
      </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
            flex-1
            pl-3 pt-40 md:pt-60 space-y-11 p-5 lg:pr-15
            max-h-screen overflow-y-auto
          "
        >
          <h1 className="text-4xl font-bold text-[#d633ff] kaushan md:text-left text-center">
            Painting the Web with Code and Color
          </h1>
          <p className="text-[20px] text-white dark:text-white font-medium alice">
            Combining artistic passion with technical skill, I create dynamic,
            user-friendly websites that bring ideas to life with clarity and
            purpose. Leveraging modern technologies like React, Tailwind CSS,
            and Node.js, I build scalable, responsive, and high-performance
            digital solutions that deliver seamless user experiences across
            devices.
          </p>
          <div className="flex gap-10 justify-center items-center">
            <a href="/FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf" download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.pdf">
                 <button className="btnResume">Resume</button>
            </a>
            <button onClick={scrollToContact} className="btnResume">Contact Me</button>
          </div>
          <section id='about'>
                 <div className=' md:my-20 lg:my-30 space-y-5'>
            <h1 className="text-white dark:text-white text-4xl elsie text-center">About <span className='text-[#e787ff]'>Me</span> </h1>
        <p className="text-white dark:text-white alice text-[20px]">
            I’m a MERN stack developer fueled by a passion for vibrant design and
            seamless functionality. From childhood, blending colors and crafting
            art sparked my creativity — a foundation that now drives my web
            development journey. Coding felt intimidating at first during
            university, but in my final year, discovering Python and working on
            my thesis sparked my true passion for programming. During that time,
            I also explored web development and instantly fell in love with
            building dynamic, interactive websites.
          </p>
          <p className="text-white dark:text-white alice text-[20px]">
            I love exploring UI libraries and creating smooth animations with
            tools like Framer Motion. Turning ideas into interactive, visually
            stunning websites using React and Tailwind excites me. On the
            backend, I work with Express.js and MongoDB to build efficient,
            data-driven applications.
          </p>
          <p className="text-white dark:text-white alice  text-[20px]">
            When I’m not coding, I enjoy watching movies and series, and I like
            designing banners and logos using Canva. I’m focused, driven, and
            don’t let negativity distract me. I believe in staying true to
            myself and creating meaningful, user-friendly, SEO-friendly projects
            that leave a lasting impact.
          </p>
          </div>
          </section>
         


    <section id='skills' className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2
          className="
          text-5xl text-shadow-lg text-shadow-b-black text-wrap font-extrabold text-center libertinus mb-12
    bg-gradient-to-r from-[#ffffff] via via-[#d015ff] to-white 
    bg-clip-text text-transparent
          "
        >
          Professional Skill Set
        </h2>

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
      <div className='relative  hidden md:block z-10 my-20 noise-overlay-lg-edu'>
                      <section id='education' className="lg:py-30 lg:flex lg:items-center lg:justify-between shadow-2xl shadow-white  p-6 w-full rounded-lg bg-purple-600 text-white dark:text-white opacity-65">
                        <div>
                             <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white dark:text-white text-center">Educational <span className='lg:ml-20 text-black'>Milestone</span> </h2>
                        </div>
     

      <div className="relative border-l-3  pl-6">
        {/* Timeline item */}
        <div className="mb-8 ml-4 py-10">
          {/* Circle */}
          <div className="absolute -ml-14 ">
<button class="mouse">
  <div class="scroll"></div>

</button></div>

          <h3 className="text-xl font-semibold">BSc in Computer Science & Engineering (CSE)</h3>
          <p className="text-white font-medium dark:text-white">Port City International University</p>
          <p className="text-white font-medium dark:text-white">CGPA: 3.48</p>
          <p className="text-white font-medium dark:text-white">Graduated: 2024</p>
        </div>
      </div>
    </section>



    </div>
    <section id='project'>
      <ProjectCard></ProjectCard>
    </section>
       <section id='connect-me'
      
      className="md:hidden lg:block pt-20 mb-10 text-white py-16 px-6 md:px-12 overflow-hidden contact-bg"
    >
      {/* Floating Points */}
      <div className="points_wrapper">
        {[...Array(10)].map((_, i) => (
          <i className="point" key={i}></i>
        ))}
      </div>

      <div className=" mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg mb-8 text-gray-200">
            Open to any adventure that involves learning and making cool stuff!
          </p>

          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:fahmidanimra@gmail.com" className="text-purple-200 hover:underline">
                fahmidanimra@gmail.com
              </a>
            </p>

            <p className="text-lg flex items-center gap-2">
              <FaLinkedin className="text-blue-400" size={22} />
              <a
                href="https://www.linkedin.com/in/fahmida-nimra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                https://www.linkedin.com/in/fahmida-nimra/
              </a>
            </p>

            <p className="text-lg flex items-center gap-2">
              <FaGithub className="text-gray-300" size={22} />
              <a
                href="https://www.linkedin.com/in/fahmida-nimra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                https://github.com/fahamidaNimra173
              </a>
            </p>

            <p className="text-lg flex items-center gap-2">
              <FaWhatsapp className="text-green-400" size={22} />
              <a
                href="https://wa.me/8801568029731"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +880 1568 029 731
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className=" p-6 rounded-lg shadow-2xl">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                 name="user-name"
                type="text"
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                 name="user-email"
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
               name="message"
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Message"
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
    </section>

        </div>
        
      </div>

      {/* Small devices: Sidebar + intro in flex container, rest content outside */}
      <div className="md:hidden p-5 pt-40 space-y-6">
        <div className="flex flex-col-reverse gap-5  items-center">
          {/* Sidebar + intro */}
          <div className="bg-black mt-10 shadow-2xl patterned-bg  shadow-black text-center px-3 py-6 rounded-lg flex-shrink-0 ">
            <div className="glass-container space-y-2 border-2 px-3 py-5 rounded-2xl">
              <img
                className="profile-img mx-auto rounded-2xl "
                src="https://i.ibb.co.com/whP4sbkf/my-Image-Bg-Blur.jpg"
                alt="Fahmida Nimra"
              />
              <h1 className="libertinus text-lg mt-3 text-white dark:text-white mb-1">Fahmida Nimra</h1>
              <h1 className=" text-white dark:text-white alice text-sm">
                Mern Stack Developer | Front End Developer
              </h1>
              <h1 className="text-white dark:text-white alice text-sm">Chittagong, Bangladesh</h1>
              <h1 className="text-white dark:text-white alice text-sm">fahmidanimra@gmail.com</h1>
               <h1 className="text-white dark:text-white alice text-wrap">
            Contact no:{" "}
            <a href="tel:+8801568029731" className="hover:underline text-[#e283f9]">
              +8801568029731
            </a>
            </h1>

                    <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://www.facebook.com/fahmida.nimra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1877F2] transition"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/fahmida-nimra/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0A66C2] transition"
        >
          <FaLinkedinIn size={22} />
        </a>
        <a
          href="https://github.com/fahamidaNimra173"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition"
        >
          <FaGithub size={22} />
        </a>
      </div>
            </div>
          </div>

          <div className="flex-1 text-center">
            <h1 className=" font-bold text-[#d633ff] mb-6 text-3xl text-center kaushan">
              Painting the Web with Code and Color
            </h1>
            <p className="text-[16px] text-white dark:text-white font-medium alice mt-2">
              Combining artistic passion with technical skill, I create dynamic,
              user-friendly websites that bring ideas to life with clarity and
              purpose. Leveraging modern technologies like React, Tailwind CSS,
              and Node.js, I build scalable, responsive, and high-performance
              digital solutions that deliver seamless user experiences across
              devices.
            </p>
            <div className="flex gap-5  items-center justify-center mt-6">
             <a href="/FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf" download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.pdf">
                 <button className="btnResume">Resume</button>
            </a>
              <button onClick={scrollToContact1} className="btnResume text-sm px-5 py-2">Contact Me</button>
            </div>
          </div>
        </div>

        {/* Rest of the content below */}

        <section id='about1'>
                      <div className=" my-20 ">
            <h1
      ref={ref}
      className="text-white mb-5 dark:text-white text-4xl elsie font-bold flex flex-wrap justify-center"
      aria-label={text}
    >
      {text.split('').map((char, i) => {
        const isColored = i >= 6; // color "Me" part
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={isColored ? 'text-[#e283f9]' : ''}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </h1>
          <p className="text-white dark:text-white alice text-[20px]">
            I’m a MERN stack developer fueled by a passion for vibrant design and
            seamless functionality. From childhood, blending colors and crafting
            art sparked my creativity — a foundation that now drives my web
            development journey. Coding felt intimidating at first during
            university, but in my final year, discovering Python and working on
            my thesis sparked my true passion for programming. During that time,
            I also explored web development and instantly fell in love with
            building dynamic, interactive websites.
          </p>
          <p className="text-white dark:text-white alice text-[20px]">
            I love exploring UI libraries and creating smooth animations with
            tools like Framer Motion. Turning ideas into interactive, visually
            stunning websites using React and Tailwind excites me. On the
            backend, I work with Express.js and MongoDB to build efficient,
            data-driven applications.
          </p>
          <p className="text-white dark:text-white alice  text-[20px]">
            When I’m not coding, I enjoy watching movies and series, and I like
            designing banners and logos using Canva. I’m focused, driven, and
            don’t let negativity distract me. I believe in staying true to
            myself and creating meaningful, user-friendly, SEO-friendly projects
            that leave a lasting impact.
          </p>
        </div>
        </section>

            <section id='skills1' ref={skillsRef} className=" md:hidden ">
      <div className="max-w-5xl mx-auto">
       <h2
  className="text-5xl text-shadow-lg text-shadow-b-black text-wrap font-extrabold text-center libertinus mb-12
    bg-gradient-to-r from-[#ffffff] via via-[#cc00ff] to-white 
    bg-clip-text text-transparent"
>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 gap-3">
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
    {/* eduction section */}
    <section id='education1'>
         <div className='z-100 md:hidden my-20 '>
                      <section className="max-w-xl shadow-2xl shadow-white mx-auto p-6  rounded-lg bg-purple-600 text-white dark:text-white ">
      <h2 className="text-3xl font-bold mb-8 text-white dark:text-white text-center">Educational Milestones</h2>

      <div className="relative border-l-3 border-purple-100 pl-6">
        {/* Timeline item */}
        <div className="mb-8 ml-4">
          {/* Circle */}
          <div className="absolute -left-3 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white"></div>

          <h3 className="text-xl font-semibold">BSc in Computer Science & Engineering (CSE)</h3>
          <p className="text-white font-medium dark:text-white">Port City International University</p>
          <p className="text-white font-medium dark:text-white">CGPA: 3.48</p>
          <p className="text-white font-medium dark:text-white">Graduated: 2024</p>
        </div>
      </div>
    </section>
    </div>
            {/* projects section */}
    <section id='project1'>
      <ProjectCard></ProjectCard>
    </section>

    </section>
 
         <section
      id='connect-me1'
      className="md:block mb-10 lg:hidden pt-20 text-white py-16 px-3 md:px-12 overflow-hidden contact-bg"
    >
      {/* Floating Points */}
      <div className="points_wrapper">
        {[...Array(10)].map((_, i) => (
          <i className="point" key={i}></i>
        ))}
      </div>

      <div className="  flex flex-col gap-12 items-center relative z-10">
        {/* LEFT SIDE */}
<div className="px-4 sm:pl-4 md:px-0 text-wrap max-w-full">
  <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
  <p className="text-lg mb-8 text-gray-200 max-w-full">
    Open to any adventure that involves learning and making cool stuff!
  </p>

  <div className="space-y-4 max-w-full">
    <p className="text-lg flex flex-wrap items-center gap-2">
      <span className="font-semibold">Email:</span>{" "}
      <a
        href="mailto:fahmidanimra@gmail.com"
        className="text-purple-200 text-wrap  hover:underline break-words"
      >
        fahmidanimra@gmail.com
      </a>
    </p>

    <p className="text-lg flex pr-5 flex-wrap items-center gap-2">
      <FaLinkedin className="text-blue-400" size={22} />
      <a
        href="https://www.linkedin.com/in/fahmida-nimra/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-wrap pr-2 break-words"
      >
        https://www.linkedin.com/in/fahmida-nimra/
      </a>
    </p>

    <p className="text-lg flex flex-wrap items-center gap-2">
      <FaGithub className="text-gray-300" size={22} />
      <a
        href="https://github.com/fahamidaNimra173"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline break-words"
      >
        https://github.com/fahamidaNimra173
      </a>
    </p>

    <p className="text-lg flex flex-wrap items-center gap-2">
      <FaWhatsapp className="text-green-400" size={22} />
      <a
        href="https://wa.me/8801568029731"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline break-words"
      >
        +880 1568 029 731
      </a>
    </p>
  </div>
</div>


        {/* RIGHT SIDE - CONTACT FORM */}
        <div className=" p-6 rounded-lg shadow-2xl  w-full h-full">
          <form ref={form} onSubmit={sendEmail}  className="flex flex-col h-full">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
               name="user-name"
                type="text"
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                 name="user-email"
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
              name="message"
                rows="4"
                cols={10}
                className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Message"
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



