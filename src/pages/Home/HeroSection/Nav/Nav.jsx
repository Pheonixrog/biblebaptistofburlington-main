import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "../../../../assets/logo.webp";
import musicPlayerIcon from "../../../../assets/music-player-icon.webp";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { path: "/staff", label: "Staff" },
    { path: "/ministries", label: "Ministries" },
    { path: "/pastor-corner", label: "Pastor's Corner" },
    { path: "/prayer", label: "Prayer" },
  ];

  return (
    <nav className="absolute w-full z-40">
      <div className="max-w-[130rem] mx-auto px-8">
        <div className="flex justify-between py-12 items-center lg:px-8">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" className="w-[2.6rem] h-[2.8rem]" />
          </Link>

          {/* Mobile Menu */}
          <ul
            className={`${
              isOpen
                ? "lg:block fixed top-0 right-0 h-screen bg-[#ddd] bg-opacity-90 w-full py-40 px-8 text-center z-10"
                : "hidden"
            } lg:block`}
          >
            {/* Close Button for Mobile */}
            <button
              className="hidden lg:block fixed top-14 right-8 border-0 bg-transparent text-white text-[3rem] z-10"
              onClick={() => setIsOpen(false)}
            >
              {isOpen && <FaTimes />}
            </button>

            {/* Nav Links */}
            {navLinks.map((link) => (
              <li key={link.path} className="lg:py-8">
                <Link
                  to={link.path}
                  className={`font-['Mulish'] text-[2rem] no-underline text-black ${
                    pathname === link.path ? "text-white" : "text-[#D3E6E9]"
                  } lg:text-black lg:text-[1.7rem] lg:block lg:py-8`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Live Stream Link for Mobile */}
            {isOpen && (
              <li className="lg:py-8">
                <Link
                  to="/live-stream"
                  className="font-['Mulish'] text-[1.7rem] no-underline text-black lg:block lg:py-8"
                >
                  Live Stream
                </Link>
              </li>
            )}
          </ul>

          {/* Desktop Nav Links */}
          <ul className="flex items-center gap-16 list-none lg:hidden">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-['Mulish'] text-[2rem] no-underline ${
                    pathname === link.path ? "text-white" : "text-[#D3E6E9]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Live Stream Button */}
          <Link
            to="/live-stream"
            className="w-[16.8rem] h-[4.8rem] bg-white border-0 text-[#242121] font-['Mulish'] text-[1.8rem] font-semibold flex items-center gap-4 justify-center no-underline lg:hidden"
          >
            <img src={musicPlayerIcon} alt="" />
            Live Stream
          </Link>

          {/* Hamburger Menu */}
          <button
            className="hidden lg:block border-0 bg-transparent text-white text-[3rem] relative top-2"
            onClick={() => setIsOpen(true)}
          >
            {!isOpen && <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
