export default function Title({ title }) {
  return (
    <h1
      className="font-mulish font-black text-[15.2rem] w-[97.6rem] leading-[110%] text-white relative z-[3]
                      bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent
                      xl:text-[10rem] xl:mx-auto xl:w-[50rem] xl:text-center xl:relative xl:-top-12
                      md:text-[7.2rem] md:w-[33.5rem]"
    >
      {title}
    </h1>
  );
}
