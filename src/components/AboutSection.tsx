import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="font-nunito font-bold text-4xl text-primary-700 mb-6">Sobre Nós</h2>
            <p className="font-nunito text-gray-600 text-lg mb-6">
              Fundada em Setembro de 2021 na cidade de Botucatu-SP, a Mais Sabor nasceu da inspiração de seu
              idealizador, Fernando Pedrozo, que enxergou no gelo saborizado uma oportunidade de inovar e surpreender.
            </p>
            <p className="font-nunito text-gray-600 text-lg mb-6">
              Desde então, temos nos dedicado ao desenvolvimento de produtos que unem qualidade, praticidade e sabor. Nossos gelos saborizados são produzidos com ingredientes selecionados e passam por um rigoroso controle de qualidade, garantindo uma experiência premium ao consumidor.
            </p>
            <p className="font-nunito text-gray-600 text-lg">
              Atuamos em diversos segmentos, atendendo festas, casamentos, eventos corporativos, depósitos, adegas e o consumidor final que busca novas formas de tornar seus momentos mais agradáveis e refrescantes.
            </p>
            <p className="font-nunito text-gray-600 text-lg">
              <br />Acreditamos que cada detalhe faz diferença. Por isso, a Mais Sabor não entrega apenas gelo, mas  entregamos inovação, cuidado e um novo conceito de sabor para os seus momentos.
            </p>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="./src/assets/aboutUsBanner.jpg" 
                alt="Equipe Mais Sabor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-200/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;