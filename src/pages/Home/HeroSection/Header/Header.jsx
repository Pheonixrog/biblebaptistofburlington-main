export default function Header() {
  return (
    <header
      className="h-[67rem] bg-no-repeat bg-cover bg-center lg:h-[80rem] sm:h-[67rem]"
      style={{
        backgroundImage: `
               linear-gradient(
                 to bottom right,
                 rgba(115, 61, 26, 0.9),
                 rgba(191, 112, 47, 0.9),
                 rgba(139, 69, 19, 0.9)
               ),
               url('/fall-leaves.png')
             `,
      }}
    >
      <div className="max-w-[130rem] mx-auto px-8">
        <div className="pt-60 relative">
          {/* Title */}
          <h1 className="font-['Mulish'] font-black text-[15.2rem] text-center leading-[120%] text-white lg:text-[7.2rem] lg:w-[33.5rem] lg:mx-auto">
            BIBLE BAPTIST CHURCH
          </h1>

          {/* Service Times */}
          <div className="flex items-center justify-between lg:hidden">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {[
                "Sunday Worship Service 11:00 AM",
                "Sunday Night Service: 6:00 PM",
              ].map((text, index) => (
                <span
                  key={index}
                  className="w-fit table px-8 py-4 text-[1.8rem] font-semibold text-[#191616] bg-gradient-to-l from-transparent to-white"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {[
                "Wednesday Night Service: 7:00 PM",
                "Sunday School: 10:00 AM",
              ].map((text, index) => (
                <span
                  key={index}
                  className={`w-fit table px-8 py-4 text-[1.8rem] font-semibold text-[#191616] bg-gradient-to-r from-white to-transparent ${
                    index === 1 ? "relative left-32" : ""
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Church Image - Commented out as in original */}
          {/* <img
            src={churchImage}
            alt=""
            className="absolute w-[77.5rem] h-[42.1rem] -bottom-44 left-[26rem] lg:left-0 lg:-bottom-[39.1rem] lg:w-full lg:h-[35rem] sm:h-auto sm:-bottom-[26.1rem]"
          /> */}
        </div>
      </div>
    </header>
  );
}
