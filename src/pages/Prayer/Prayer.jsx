import HeroSection from '../../components/HeroSection/HeroSection'
import Calendar from '../Home/Calendar/Calendar'
import FAQ from '../Home/FAQ/FAQ'
import Footer from '../Home/Footer/Footer'
import PrayerSection from './PrayerSection/PrayerSection'

export default function Prayer() {
    return (
        <>
            <HeroSection title='Prayer' />
            <PrayerSection />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}