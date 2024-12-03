import churchImage from "../../../assets/header-church.webp";
import Title from "./Title/Title";

export default function Header({ title }) {
  return (
    <header
      className="bg-gradient-to-tr from-[#733d1a] via-[#a65d2e] via-[#bf702f] to-[#8b4513]
                       bg-cover bg-center h-[68rem] md:h-[50rem]"
    >
      <div className="max-w-[130rem] mx-auto px-8 lg:px-0">
        <div className="pt-60 relative h-[68rem] md:h-[50rem] overflow-clip">
          <div className="lg:px-8">
            <Title title={title} />
          </div>
          <img
            src={churchImage}
            alt="Church Building"
            className="absolute w-[113.6rem] h-[61.7rem] bottom-0 left-[26rem]
                       xl:left-0 xl:bottom-0 xl:w-full xl:h-[35rem]
                       md:left-0 md:bottom-0 md:w-full md:h-auto"
          />
        </div>
      </div>
    </header>
  );
}
