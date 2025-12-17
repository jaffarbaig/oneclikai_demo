import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import ClinicInfo from './components/ClinicInfo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCallButton from './components/MobileCallButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileCallButton />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Statistics />
        <Testimonials />
        <ClinicInfo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
