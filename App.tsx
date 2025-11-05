
import React from 'react';
import { LabirintarLogo } from './components/LabirintarLogo';
import { PacaTatuLogo } from './components/PacaTatuLogo';

const App: React.FC = () => {
  return (
    <div className="bg-brand-areia min-h-screen font-sans text-brand-chocolate antialiased">
      <div className="container mx-auto p-4 sm:p-8 max-w-4xl">
        
        <header className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mb-12 sm:mb-20">
          <LabirintarLogo className="h-20" />
          <div className="flex items-center space-x-4">
             <span className="text-2xl font-slab text-gray-400">&</span>
             <PacaTatuLogo className="h-16" />
          </div>
        </header>

        <main>
          <section className="text-center mb-16 sm:mb-24">
            <h1 className="font-slab text-4xl md:text-6xl text-brand-goiaba mb-4">
              Uma Parceria para Encantar
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Unindo a pedagogia sensível da Labirintar com a magia teatral da Paca Tatu para enriquecer a jornada educativa das crianças.
            </p>
          </section>

          <section className="mb-12 sm:mb-20">
             <h2 className="font-slab text-3xl md:text-4xl text-brand-laranja mb-6 text-center">A Oportunidade</h2>
             <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-brand-creme">
                <p className="text-lg leading-relaxed text-justify">
                    A Labirintar propõe uma parceria com a Paca Tatu, empresa especializada em eventos teatrais escolares, para enriquecer nossa modalidade de teatro extracurricular. Acreditamos que a união do nosso propósito com a expertise cênica da Paca Tatu pode criar experiências inesquecíveis. A parceria enriqueceria a modalidade de teatro da Labirintar, oferecendo um diferencial com apresentações de múltiplas linguagens. Acreditamos que essa conexão possa ocorrer naturalmente, gerando grande valor para as crianças e famílias.
                </p>
             </div>
          </section>
          
          <section className="mb-12 sm:mb-20">
            <h2 className="font-slab text-3xl md:text-4xl text-brand-laranja mb-8 text-center">Nossa Proposta</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-brand-creme transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-slab text-2xl text-brand-goiaba mb-3">Evento Exclusivo</h3>
                <p>
                  Inclusão de uma apresentação teatral da Paca Tatu por semestre, trazendo o teatro de múltiplas linguagens para dentro do nosso ambiente de aprendizagem e encantamento.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-brand-creme transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-slab text-2xl text-brand-goiaba mb-3">Modelo Acessível</h3>
                <p>
                  A um custo de <span className="font-bold">R$ 60 por criança</span>, diluído nas mensalidades, oferecemos uma experiência de alto valor agregado de forma integrada ao nosso programa extracurricular.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center bg-brand-creme/50 rounded-2xl p-8 sm:p-12">
            <h2 className="font-slab text-3xl md:text-4xl text-brand-laranja mb-4">Próximos Passos</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Estamos animados com as possibilidades. Gostaríamos de agendar uma conversa para elaborar os detalhes desta proposta de empresa para empresa e explorar como podemos, juntos, construir essa ponte entre educação e arte.
            </p>
            <a 
              href="mailto:marialivia@labirintar.com.br" 
              className="inline-block bg-brand-goiaba text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-110"
            >
              Vamos Conversar
            </a>
          </section>
        </main>

        <footer className="text-center mt-20 pt-8 border-t border-brand-creme">
          <LabirintarLogo className="h-16 mx-auto" withTagline={true}/>
          <p className="mt-4 text-sm text-gray-500">
            Labirintar - Lugar de Fazer e Ser
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
