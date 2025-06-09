import React from 'react';

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/50 z-0">
        <img
          src= "./src/assets/banner3.jpg"
          alt="banner2"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 py-12 relative inset-0 bg-black/3 z-0 text-center">
        <h1 className="font-nunito font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
          Refresque seus dias com <br />
          <span className="text-pineapple-500">Mais Sabor!</span>
        </h1>
        
        {/* <p className="font-nunito text-white text-xl md:text-2xl max-w-2xl mx-auto mb-10">
          Cubos de gelo saborizado para deixar suas bebidas e eventos muito mais especiais
        </p>
         */}
        <button
          className="bg-pineapple-500 hover:bg-pineapple-600 text-primary-800 font-nunito font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <a href="#sabores">Experimente Agora</a>
        </button>
      </div>
    </section>
  );
};

export default Banner;