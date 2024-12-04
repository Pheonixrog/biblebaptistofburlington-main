export default function Title({ title }) {
  return (
    <h1
      className="font-mulish font-black text-[15.2rem] w-[97.6rem] leading-[110%] text-white relative z-[3]
                      bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent
                      xl:text-[10rem] xl:mx-auto xl:w-[50rem] xl:text-center xl:relative xl:-top-12
                      lg:w-auto lg:text-[calc(7.2rem-1vh)]"
    >
      {title}
    </h1>
  );
}
