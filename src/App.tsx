import Header from './components/Header';
import Banner from './components/Banner';
import FlavorsSection from './components/FlavorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-nunito">
      <Header />
      <main>
        <Banner />
        <FlavorsSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;