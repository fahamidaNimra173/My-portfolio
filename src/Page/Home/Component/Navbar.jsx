import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { X, Home, User, Code, Briefcase, GraduationCap, Mail, FileDown } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  const handleNavClick = (e, href, id) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(id);
    } else {
      setSidebarOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "about", label: "About Me", icon: User, href: "#about" },
    { id: "skills", label: "Skills", icon: Code, href: "#skills" },
    { id: "project", label: "Projects", icon: Briefcase, href: "#project" },
    { id: "education", label: "Education", icon: GraduationCap, href: "#education" },
    { id: "connect-me", label: "Contact Me", icon: Mail, href: "#connect-me" },
  ];
    const menuItems1 = [
    { id: "home1", label: "Home", icon: Home, href: "/" },
    { id: "about1", label: "About Me", icon: User, href: "#about" },
    { id: "skills1", label: "Skills", icon: Code, href: "#skills" },
    { id: "project1", label: "Projects", icon: Briefcase, href: "#project" },
    { id: "education1", label: "Education", icon: GraduationCap, href: "#education" },
    { id: "connect-me1", label: "Contact Me", icon: Mail, href: "#connect-me" },
  ];

  return (
    <>
      <div className={`fixed z-50 w-full transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
        <nav className={`mx-auto lg:relative max-w-7xl px-4 md:px-6 transition-all duration-300`}>
          <div className={`flex  lg:py-3 items-center justify-between rounded-3xl bg-gradient-to-r from-black via-black to-purple-500 shadow-2xl ${scrolled ? 'shadow-purple-500/20' : 'shadow-black'} px-4 md:px-6  backdrop-blur-sm border border-purple-500/20`}>

            {/* Logo with glow effect */}
            <div className="flex items-center gap-2 group">
              <div className="md:relative lg:absolute lg:z-100 lg:-top-7">
                <img
                  className="w-16 md:w-20 lg:w-24  transition-transform duration-300 group-hover:scale-105"
                  src="https://i.ibb.co.com/8DwYkFCb/White-Typography-Initial-CR-Logo-3.png"
                  alt="Logo"
                />
                {/* <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>
            </div>

            {/* Desktop Navigation with Icons */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className="group relative px-4 text-white text-[16px] lg:text-[18px] font-medium transition-all duration-300 hover:text-purple-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Icon size={18} className="relative shadow-lg shadow-pink-300 text-blue-400 hover:text-purple-300 z-10 transition-transform duration-300 group-hover:scale-110" />
                        {/* Sparking animation around icon */}
                        <span className="absolute top-0 left-0 w-full h-full">
                          <span className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-1"></span>
                          <span className="absolute top-1/2 right-0 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-2"></span>
                          <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-3"></span>
                          <span className="absolute top-1/2 left-0 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-4"></span>
                        </span>
                      </div>
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-lg transition-all duration-300 -z-10"></div>
                  </a>
                );
              })}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Resume Button - Desktop */}
              <div className="hidden md:block">
                <a href="/FAHMIDA NIMRA Resume-MERN Stack Developer.pdf" download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf">
                  <button className="btnResume">Resume</button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2.5 hover:bg-purple-600/30 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Open menu"
              >
                <FaBars size={22} className="transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-purple-900 via-black to-black border-l-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 z-50 md:hidden transform transition-transform duration-300 ease-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Sidebar Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Menu
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-purple-600/30 rounded-xl transition-all duration-200 hover:rotate-90 active:scale-90"
            aria-label="Close menu"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="relative flex flex-col p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {menuItems1.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className="flex items-center gap-4 px-5 py-4 text-left text-white hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-pink-600/40 rounded-xl transition-all duration-300 group relative overflow-hidden"
                style={{
                  animation: `slideInRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s both`
                }}
              >
                {/* Icon with sparking animation */}
                <div className="relative">
                  <Icon size={22} className="text-purple-300 group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10" />
                  {/* Sparking particles around icon */}
                  <span className="absolute top-0 left-0 w-full h-full">
                    <span className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-1"></span>
                    <span className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-2"></span>
                    <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-3"></span>
                    <span className="absolute top-1/2 -left-1 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-4"></span>
                    <span className="absolute top-0 right-0 w-1 h-1 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-5"></span>
                    <span className="absolute bottom-0 right-0 w-1 h-1 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spark-6"></span>
                  </span>
                  <div className="absolute inset-0 bg-purple-400/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <span className="text-[18px] font-medium relative z-10">{item.label}</span>

                {/* Slide in indicator */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-r"></div>
              </a>
            );
          })}

          {/* Divider */}
          <div className="py-3">
            <hr className="border-purple-500/30" />
          </div>

          {/* Resume Button */}
          <a
            href="/FAHMIDA NIMRA Resume-MERN Stack Developer.pdf"
            download="FAHMIDA NIMRA Resume-MERN Stack Developer-fahmidanimra@gmail.com.pdf"
            className="group flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 rounded-xl transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
            onClick={() => setSidebarOpen(false)}
          >
            <FileDown size={22} className="text-white relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="text-[18px] font-semibold text-white relative z-10">Download Resume</span>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </a>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/30 backdrop-blur-sm">
          <p className="text-sm text-purple-300 text-center font-medium">
            © 2025 Fahmida Nimra
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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