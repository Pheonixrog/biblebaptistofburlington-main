import HeroSection from "../../components/HeroSection/HeroSection";
import Calendar from "../Home/Calendar/Calendar";
import FAQ from "../Home/FAQ/FAQ";
import Footer from "../Home/Footer/Footer";
import Team from "./Team/Team";

export default function Staff() {
    return (
        <>
            <HeroSection title='CHURCH Staff' />
            <Team />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}