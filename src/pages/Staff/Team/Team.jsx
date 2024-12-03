import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// Images
import mikeImage from "../../../assets/mike-image.png";
import billImage from "../../../assets/bill-image.png";
import kevinImage from "../../../assets/kevin-image.png";
import timImage from "../../../assets/tim-image.png";

export default function Team() {
  return (
    <section
      className="relative -top-40
                       xl:top-0 xl:my-20
                       md:top-0 md:my-40"
    >
      <div className="max-w-[130rem] mx-auto px-8">
        <div
          className="flex items-center justify-between gap-8
                       lg:grid lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:place-items-center lg:gap-8"
        >
          <div
            className="bg-white text-black w-[29.1rem] h-[35.4rem] border border-[#DCDCDC] text-center
                        flex flex-col gap-4
                        lg:w-full
                        md:w-full"
          >
            <img
              src={mikeImage}
              alt="Russell Clemmer"
              className="w-[11.4rem] h-[11.4rem] mx-auto my-8 rounded-[300px]"
            />
            <span className="text-[1.8rem] font-semibold">DEACON</span>
            <span className="text-[2.8rem] font-semibold">Russell Clemmer</span>
          </div>

          <div
            className="bg-white text-black w-[29.1rem] h-[35.4rem] border border-[#DCDCDC] text-center
                        flex flex-col gap-4
                        lg:w-full
                        md:w-full"
          >
            <img
              src={billImage}
              alt="Bill Montgomery"
              className="w-[11.4rem] h-[11.4rem] mx-auto my-8 rounded-[300px]"
            />
            <span className="text-[1.8rem] font-semibold">DEACON</span>
            <span className="text-[2.8rem] font-semibold">Bill Montgomery</span>
          </div>

          <div
            className="bg-white text-black w-[29.1rem] h-[35.4rem] border border-[#DCDCDC] text-center
                        flex flex-col gap-4
                        lg:w-full
                        md:w-full"
          >
            <img
              src={kevinImage}
              alt="Kevin Bunn"
              className="w-[11.4rem] h-[11.4rem] mx-auto my-8 rounded-[300px]"
            />
            <span className="text-[1.8rem] font-semibold">PASTOR</span>
            <span className="text-[2.8rem] font-semibold">Kevin Bunn</span>
            <div className="flex items-center justify-center gap-12 mt-12">
              <FaPhoneAlt className="text-[2rem]" />
              <MdEmail className="text-[2rem]" />
            </div>
          </div>

          <div
            className="bg-white text-black w-[29.1rem] h-[35.4rem] border border-[#DCDCDC] text-center
                        flex flex-col gap-4
                        lg:w-full
                        md:w-full"
          >
            <img
              src={timImage}
              alt="Tim Whitlow"
              className="w-[11.4rem] h-[11.4rem] mx-auto my-8 rounded-[300px]"
            />
            <span className="text-[1.8rem] font-semibold">TRUSTEE</span>
            <span className="text-[2.8rem] font-semibold">Tim Whitlow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
