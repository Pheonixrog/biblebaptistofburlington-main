import radioMinistryIcon from "../../../assets/radioMinistryIcon.webp";
import sundaySchoolIcon from "../../../assets/sundaySchoolIcon.webp";
import ladiesMinistryIcon from "../../../assets/ladiesMinistryIcon.webp";

export default function MinistriesCard() {
  return (
    <section className="relative -top-40 lg:my-20 md:top-20">
      <div className="max-w-[130rem] mx-auto px-8">
        <div className="flex items-center justify-between gap-8 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <div
            className="bg-white text-black lg:w-auto w-[39.6rem] h-[18.2rem] border border-[#DCDCDC] text-center
                                  flex flex-col items-center justify-center gap-4
                                  md:w-full md:h-[33.5rem]"
          >
            <img
              src={radioMinistryIcon}
              alt="Radio Ministry"
              className="w-[6.8rem] h-[6.8rem] mx-auto xl:w-[5.8rem] xl:h-[5.8rem]"
            />
            <span className="text-[2.8rem] font-semibold xl:text-base">
              Radio Ministry
            </span>
          </div>

          <div
            className="bg-white text-black w-[39.6rem] lg:w-auto h-[18.2rem] border border-[#DCDCDC] text-center
                                  flex flex-col items-center justify-center gap-4
                                  md:w-full md:h-[33.5rem]"
          >
            <img
              src={sundaySchoolIcon}
              alt="Sunday School"
              className="w-[6.8rem] h-[6.8rem] mx-auto xl:w-[5.8rem] xl:h-[5.8rem]"
            />
            <span className="text-[2.8rem] font-semibold xl:text-base">
              Sunday School
            </span>
          </div>

          <div
            className="bg-white text-black w-[39.6rem] lg:w-auto h-[18.2rem] border border-[#DCDCDC] text-center
                                  flex flex-col items-center justify-center gap-4
                                  md:w-full md:h-[33.5rem]"
          >
            <img
              src={ladiesMinistryIcon}
              alt="Ladies Ministry"
              className="w-[6.8rem] h-[6.8rem] mx-auto xl:w-[5.8rem] xl:h-[5.8rem]"
            />
            <span className="text-[2.8rem] font-semibold xl:text-base">
              Ladies Ministry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
