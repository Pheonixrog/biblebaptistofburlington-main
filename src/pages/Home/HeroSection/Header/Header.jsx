import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const serviceTimes = document.querySelector('.service-times');
    serviceTimes.classList.add('animate-slideInCenter');
    
    const poster1 = document.querySelector('.poster1');
    const poster2 = document.querySelector('.poster2');
    
    poster1.classList.add('animate-slideInLeft');
    poster2.classList.add('animate-slideInRight');
  }, []);

  return (
    <header
      className="h-[70rem] bg-no-repeat bg-cover bg-center relative overflow-hidden lg:h-[80rem] sm:h-[67rem]"
      style={{
        backgroundImage: `
               linear-gradient(
                 to bottom right,
                 rgba(115, 61, 26, 0.9),
                 rgba(191, 112, 47, 0.9),
                 rgba(139, 69, 19, 0.9)
               )
             `,
      }}
    >
      <style jsx>{`
        @keyframes slideInCenter {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInCenter {
          animation: slideInCenter 2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .word {
          display: inline-block;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .word-1 {
          animation-delay: 0.5s;
        }

        .word-2 {
          animation-delay: 1s;
        }

        .word-3 {
          animation-delay: 1.5s;
        }

        .text-shadow {
          text-shadow: 4px 8px 4px rgba(0, 0, 0, 0.8);
        }

        .leaves-shadow {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        .gradient-background {
          background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0)100%);
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1.5s ease-out forwards;
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInRight {
          animation: slideInRight 1.5s ease-out forwards;
        }
      `}</style>

      <div className="pt-40 flex justify-center items-center absolute inset-0 z-20 ">
        <img src="/poster1.png" alt="Pastor 1" className="poster1 w-1/6 h-auto object-contain transform transition-transform duration-500 mr-[55%]" />
        <img src="/poster2.png" alt="Pastor 2" className="poster2 w-1/5 h-auto object-contain transform transition-transform duration-500" />
      </div>

      {/* Leaves Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src="/fall-leaves.png"
          alt="Falling Leaves"
          className="w-full h-full object-cover animate-pulse leaves-shadow"
        />
      </div>

      <div className="max-w-[130rem] mx-auto px-10 relative overflow-hidden ">
        <div className="pt-40 relative">
          {/* Title */}
          <h1 className=" font-['Mulish'] font-black text-[15.2rem] text-center leading-[120%] text-white lg:text-[7.2rem] lg:w-[33.5rem] lg:mx-auto relative z-20 text-shadow">
            <span className="word word-1">BIBLE</span>{" "}
            <span className="word word-2">BAPTIST</span>{" "}
            <span className="word word-3">CHURCH</span>
          </h1>

          {/* Service Times */}
          <div className="pt-20 flex justify-center mt-20 service-times space-x-8 relative z-20">
            {[
              "Sunday Worship Service 11:00 AM",
              "Sunday Night Service: 6:00 PM",
              "Wednesday Night Service: 7:00 PM",
              "Sunday School: 10:00 AM",
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-block w-auto px-6 py-3 text-[1.6rem] font-semibold text-[#191616] gradient-background rounded-lg shadow-md">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}