// SCSS
import HeroSection from '../../components/HeroSection/HeroSection';
import Calendar from '../Home/Calendar/Calendar';
import FAQ from '../Home/FAQ/FAQ';
import Footer from '../Home/Footer/Footer';
import MinistriesCard from './MinistriesCard/MinistriesCard';

export default function Ministries() {
    return (
        <>
            <HeroSection title='CHURCH Ministries' />
            <MinistriesCard />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}