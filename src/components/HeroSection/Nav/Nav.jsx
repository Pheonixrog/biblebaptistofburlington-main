import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.webp";
import musicPlayerIcon from "../../../assets/music-player-icon.webp";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="absolute w-full z-[9]">
      <div className="max-w-[130rem] mx-auto px-8">
        <div className="flex justify-between py-12 items-center xl:px-8">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[2.6rem] h-[2.8rem]" />
          </Link>

          <ul
            className={`${
              isOpen
                ? "xl:p-40 xl:block xl:fixed xl:top-0 xl:right-0 xl:h-screen xl:bg-[#ddd] xl:opacity-90 xl:w-full xl:text-center xl:z-[9]"
                : "flex items-center gap-16 xl:hidden"
            }`}
          >
            {isOpen && (
              <button
                className="hidden xl:block fixed top-14 right-8 border-0 bg-inherit text-white text-[3rem] z-[9]"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <FaTimes />
              </button>
            )}

            {[
              { to: "/staff", label: "Staff" },
              { to: "/ministries", label: "Ministries" },
              { to: "/pastor-corner", label: "Pastor's Corner" },
              { to: "/prayer", label: "Prayer" },
              ...(isOpen ? [{ to: "/live-stream", label: "Live Stream" }] : []),
            ].map(({ to, label }) => (
              <li key={to} className="xl:block">
                <Link
                  to={to}
                  className={`text-[2rem] no-underline font-mulish xl:block xl:py-8 xl:text-[1.7rem] xl:text-black ${
                    pathname === to ? "text-white" : "text-[#D3E6E9]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/live-stream"
            className="w-[16.8rem] h-[4.8rem] bg-white border-0 text-[#242121] font-mulish text-[1.8rem] font-semibold
                      flex items-center gap-4 justify-center no-underline xl:hidden"
          >
            <img src={musicPlayerIcon} alt="Music Player" />
            Live Stream
          </Link>

          <button
            className="hidden xl:block border-0 bg-inherit text-white text-[3rem] relative top-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen && <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
