import Header from './components/Header';
import Banner from './components/Banner';
import FlavorsSection from './components/FlavorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="overflow-hidden bg-cream font-nunito text-ink-900">
      <Header />
      <main>
        <Banner />
        <FlavorsSection />
        <ExperienceSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
