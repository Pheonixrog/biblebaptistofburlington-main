import HeroSection from "../../components/HeroSection/HeroSection";
import Calendar from "../Home/Calendar/Calendar";
import PastorSection from "./PastorSection/PastorSection";
import FAQ from "../Home/FAQ/FAQ";
import Footer from "../Home/Footer/Footer";

export default function PastorCorner() {
    return (
        <>
            <HeroSection title="Pastor’s Corner" />
            <PastorSection />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}