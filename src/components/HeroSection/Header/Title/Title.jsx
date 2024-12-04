import styles from "./tile.module.css";

export default function Title({ title }) {
  return (
    <h1
      className={`font-mulish font-black w-[97.6rem] leading-[110%] text-white relative z-[3]
                      bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent
                      xl:mx-auto xl:w-[50rem] xl:text-center xl:relative xl:-top-12
                      lg:w-auto  ${styles.hero_title}`}
    >
      {title}
    </h1>
  );
}
