import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setDropdownOpen(false); // Close dropdown after clicking
  };
  const navigate=useNavigate()

  return (
    <div className="text-[20px] alice fixed z-100 w-full mx-auto md:mr-15 text-white px-1 md:px-5 md:pt-5">
      <nav className="flex lg:mr-5 items-center justify-between rounded-3xl bg-gradient-to-r from-black via-black to-purple-500 shadow-2xl shadow-black px-1 md:px-5 py-3">

        {/* Left: Logo */}
        <div className="flex mx-5 items-center gap-1 justify-center md:space-x-4">
          <div>
            <img
              className="h-12"
              src="https://i.ibb.co.com/7dhVDQfK/White-Typography-Initial-CR-Logo-2.png"
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
            <button className="btnResume">Resume</button>
          </div>

          {/* Mobile hamburger dropdown */}
          <nav className="md:hidden ml-3 relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost p-1"
              aria-expanded={dropdownOpen}
              aria-label="Toggle menu"
            >
              <FaBars size={24} />
            </button>

            {dropdownOpen && (
              <ul
                className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 max-w-[90vw] text-white bg-purple-800 rounded-t-none right-0 left-auto absolute"
                style={{ right: 0, left: 'auto' }}
              >
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => scrollToSection("about1")}
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => scrollToSection("skills1")}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => scrollToSection("project1")}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => scrollToSection("education1")}
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left"
                    onClick={() => scrollToSection("connect-me1")}
                  >
                    Contact Me
                  </button>
                </li>

                <li><hr className="my-1 border-purple-600" /></li>
                <li>
                  <button
                    className="btnResume w-full"
                    onClick={() => setDropdownOpen(false)} // close dropdown
                  >
                    Resume
                  </button>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
