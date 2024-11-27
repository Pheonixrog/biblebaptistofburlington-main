import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const serviceTimes = document.querySelector('.service-times');
    serviceTimes.classList.add('animate-continuousSlide');
  }, []);

  return (
    <header
      className="h-[67rem] bg-no-repeat bg-cover bg-center relative overflow-hidden lg:h-[80rem] sm:h-[67rem]"
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
        @keyframes continuousSlide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-continuousSlide {
          animation: continuousSlide 10s linear infinite;
        }

        .text-shadow {
          text-shadow: 4px 8px 4px rgba(0, 0, 0, 0.8);
        }

        .leaves-shadow {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        .gradient-background {
          background: linear-gradient(90deg,  rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
          
        }
      `}</style>
      
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <img src="/pastor.png" alt="Pastor" className="w-1/4 h-auto object-contain transform -translate-x-full transition-transform duration-500" />
        <img src="/bible.png" alt="Bible" className="w-1/4 h-auto object-contain transform translate-x-full transition-transform duration-500" />
      </div>
      
      {/* Leaves Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src="/fall-leaves.png"
          alt="Falling Leaves"
          className="w-full h-full object-cover animate-pulse leaves-shadow"
        />
      </div>

      <div className="max-w-[130rem] mx-auto px-8 relative overflow-hidden">
        <div className="pt-60 relative">
          {/* Title */}
          <h1 className="font-['Mulish'] font-black text-[15.2rem] text-center leading-[120%] text-white lg:text-[7.2rem] lg:w-[33.5rem] lg:mx-auto relative z-20 text-shadow">
            BIBLE BAPTIST CHURCH
          </h1>

          {/* Service Times */}
          <div className="flex justify-start mt-20 service-times space-x-8 relative z-20 whitespace-nowrap">
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