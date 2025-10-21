import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { X, Home, User, Code, Briefcase, GraduationCap, Mail, FileDown } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Home", icon: Home, action: () => navigate("/") },
    { id: "about1", label: "About Me", icon: User, action: () => scrollToSection("about1") },
    { id: "skills1", label: "Skills", icon: Code, action: () => scrollToSection("skills1") },
    { id: "project1", label: "Projects", icon: Briefcase, action: () => scrollToSection("project1") },
    { id: "education1", label: "Education", icon: GraduationCap, action: () => scrollToSection("education1") },
    { id: "connect-me1", label: "Contact Me", icon: Mail, action: () => scrollToSection("connect-me1") },
  ];

  return (
    <>
      <div className="text-[20px] alice fixed z-50 w-full mx-auto md:mr-15 text-white px-1 md:px-5 md:pt-5">
        <nav className="flex lg:mr-5 items-center justify-between rounded-3xl bg-gradient-to-r from-black via-black to-purple-500 shadow-2xl shadow-black px-1 md:px-5 lg:py-0">

          {/* Left: Logo */}
          <div className="flex mx-5 items-center gap-1 justify-center md:space-x-4">
            <div>
              <img
                className="w-18 md:h-20 lg:w-25"
                src="https://i.ibb.co.com/8DwYkFCb/White-Typography-Initial-CR-Logo-3.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#connect-me">Contact Me</a></li>
          </nav>

          {/* Right: Resume Button on desktop, Hamburger on mobile */}
          <div className="flex items-center">
            {/* Resume button desktop only */}
            <div className='hidden md:block'>
              <a href="/FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf" download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf">
                <button className="btnResume">Resume</button>
              </a>
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden ml-3 p-2 hover:bg-purple-600/30 rounded-lg transition-colors duration-200"
              aria-label="Open menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-purple-900 via-black to-black border-l border-purple-500/30 shadow-2xl shadow-purple-500/20 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
          <h2 className="text-2xl font-bold text-white alice bg-gradient-to-r from-white to-purple-300 bg-clip-text ">
            Menu
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-purple-600/30 rounded-lg transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="flex items-center gap-4 px-4 py-3 text-left text-white hover:bg-purple-600/40 rounded-lg transition-all duration-200 group"
                style={{
                  animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                <Icon size={20} className="text-purple-300 group-hover:text-white transition-colors duration-200" />
                <span className="text-[18px] alice font-medium">{item.label}</span>
              </button>
            );
          })}

          {/* Divider */}
          <div className="py-2">
            <hr className="border-purple-500/30" />
          </div>

          {/* Resume Button */}
          <a 
            href="/FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf" 
            download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf"
            className="flex items-center gap-4 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 group"
            onClick={() => setSidebarOpen(false)}
          >
            <FileDown size={20} className="text-white" />
            <span className="text-[18px] alice font-medium text-white">Download Resume</span>
          </a>
        </nav>

        {/* Footer */}
        <div className="absolute -bottom-18 left-0 right-0 p-6 border-t border-purple-500/30">
          <p className="text-sm text-purple-300 text-center alice">
            © 2025 Fahmida Nimra
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;