import image1 from "../../../assets/Frame-1.webp";
import churchImg from "../../../assets/churchImg.png";

export default function About() {
  return (
    <section className="py-60">
      <div className="-mt-28 w-full flex justify-center mb-16">
        <img src={churchImg} className="w-[35%] rounded-xl mx-auto" />
      </div>

      <div className="mx-auto max-w-[130rem] px-8">
        <div>
          {/* Heading Section */}
          <div className="text-center w-[81.6rem] mx-auto lg:w-full lg:px-8">
            <h2 className="text-[5.4rem] font-black lg:text-[4rem] sm:text-[3.2rem]">
              Who We Are?
            </h2>
            <p className="text-[#605757] text-[1.8rem] font-semibold leading-relaxed lg:text-[1.5rem] sm:text-[1.2rem]">
              Welcome to Bible Baptist Church, rooted in the 1611 King James
              Bible. For over 30 years, we&apos;ve lived by God&apos;s Word and
              spread the gospel worldwide through missions.
            </p>
          </div>

          {/* Images Grid Section */}
          <div className="flex items-center gap-8 justify-center my-20 relative lg:grid lg:grid-cols-2 lg:px-8">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-[62rem] bg-gradient-to-r from-white/20 to-white/50 z-10 lg:h-[calc(100%+5rem)]"></div>

            {/* Image Layers */}
            {[1, 2, 3, 4].map((layerIndex) => (
              <div
                key={layerIndex}
                className={`flex flex-col gap-8 ${
                  layerIndex % 2 === 0 ? "relative top-24" : ""
                }`}
              >
                <img
                  src={
                    layerIndex === 2
                      ? image1
                      : layerIndex === 1
                        ? "imgs/9.jpeg"
                        : layerIndex === 3
                          ? "imgs/cross.webp"
                          : "imgs/7.jpeg"
                  }
                  className="w-[29.1rem] h-[27rem] bg-[#ddd] lg:w-full lg:h-auto sm:w-full sm:h-auto"
                />
                <img
                  src={`imgs/${layerIndex * 2}.jpeg`}
                  className="w-[29.1rem] h-[27rem] bg-[#ddd] lg:w-full lg:h-auto sm:w-full sm:h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
