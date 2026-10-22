import Header from './components/Header';
import Banner from './components/Banner';
import FlavorsSection from './components/FlavorsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HowToUseSection from './components/HowToUseSection';

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Banner />
        <FlavorsSection />
        <HowToUseSection />
        <AboutSection />
        <TestimonialsSection />
        {/* Galeria preservada nos componentes para retomar com fotos da fábrica. */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
