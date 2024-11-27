import HeroSection from "../../components/HeroSection/HeroSection";
import Calendar from "../Home/Calendar/Calendar";
import FAQ from "../Home/FAQ/FAQ";
import Footer from "../Home/Footer/Footer";
import LiveStreamService from "./LiveStreamService/LiveStreamService";
import Table from "./LiveStreamService/Table/Table"

export default function LiveStream() {
    return (
        <>
            <HeroSection title='Live stream service' />
            <LiveStreamService />
            <Table />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}