import { Link } from "react-router-dom";
import footerLogo from "../../../assets/footer-logo.webp";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] py-40">
      <div className="mx-auto max-w-[130rem] px-8">
        <div className="flex justify-between gap-8 lg:flex-col  sm:w-full lg:mx-auto lg:w-fit sm:text-center sm:gap-16">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col gap-10 w-[29.1rem] sm:w-full sm:px-8">
            <h3 className="text-[2.4rem] flex items-center gap-4 sm:justify-center">
              <img src={footerLogo} alt="Bible Baptist Church" />
              Bible Baptist Church
            </h3>
            <p className="text-[1.4rem] text-[#191616]">
              Join Bible Baptist Church, rooted in the King James Bible for over
              30 years, welcoming all to worship and grow in Christ.
            </p>
          </div>

          {/* Column 2 - Pages */}
          <div className="flex flex-col gap-10 w-[11.4rem] sm:w-full sm:px-8">
            <h4 className="text-[1.8rem]">Pages</h4>
            <ul>
              {["Staff", "Ministries", "Pastor's Corner", "Prayer"].map(
                (item) => (
                  <li key={item} className="my-4">
                    <Link
                      to="/"
                      className="text-[#464646] text-[1.6rem] no-underline"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col gap-10 w-[21.2rem] sm:w-full sm:px-8">
            <h4 className="text-[1.8rem]">Contact</h4>
            <ul>
              <li className="text-[#191616] text-[1.6rem] font-semibold my-4 block sm:mx-auto">
                <IoLocationSharp /> 2733 Kirkwood Dr. Burlington, North Carolina
                27215
              </li>
              {[
                { icon: <FaPhoneAlt />, text: "336-350-7336" },
                { icon: <FaPhoneAlt />, text: "336-213-9878" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-[#191616] text-[1.6rem] font-semibold my-4 flex items-center gap-4 sm:justify-center"
                >
                  {item.icon} {item.text}
                </li>
              ))}
              <li className="text-[#191616] text-[1.6rem] font-semibold my-4 flex items-center gap-4 sm:justify-center">
                <Link
                  to="/"
                  className="text-[#191616] underline flex items-center gap-4"
                >
                  <MdEmail className="text-[2rem]" /> Send Email
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Map */}
          <div className="flex flex-col gap-10 w-[35.9rem] sm:w-full sm:px-8">
            <h4 className="text-[1.8rem]">Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.1611201348333!2d-79.46606982383241!3d36.06517400878704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bfb95d79997%3A0x30150ef46a0fc6d7!2s2733%20Kirkwood%20Dr%2C%20Burlington%2C%20NC%2027215%2C%20USA!5e0!3m2!1sen!2sba!4v1709115728131!5m2!1sen!2sba"
              className="w-full h-[25.5rem] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
