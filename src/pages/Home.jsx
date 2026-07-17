import Hero from '../components/hero/Hero';
import AboutSps from './Home/AboutSps';
import AcademicPrograms from './Home/AcademicPrograms';
import Campuses from './Home/Campuses';
import Messages from './Home/Messages';
import NewsAndEvents from './Home/NewsAndEvents';
import QuickLinks from './Home/QuickLinks';
import SpsOtherVentures from './Home/SpsOtherVentures';
import StatsSection from './Home/StatsSection';
import Testimonials from './Home/Testimonials';
import WhyChooseSps from './Home/WhyChooseSps';

const Home = () => {
  return (
    <div>
      <Hero 
        title="SPS. Excellence in Education" 
        subtitle="Empowering students with knowledge, skills, and values. Discover why SPS is the trusted name in comprehensive education."
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756defe33?q=80&w=2000"
      />
      {/* Quick links section */}
     <QuickLinks/>
    {/* About sps section */}
    <AboutSps/>
    {/* Messages section */}
    <Messages/>
    {/* Campuses section */}
    <Campuses/>
    {/* Why choose SPS */}
    <WhyChooseSps/>
    {/* Stats section */}
    <StatsSection/>
    {/* Academic programs section */}
    <AcademicPrograms/>
    {/* News and Events section */}
    <NewsAndEvents/>
    {/* SPS other ventures section */}
    <SpsOtherVentures/>
    {/* Testimonials section */}
    <Testimonials/>
    </div>
  );
};

export default Home;