const App = () => {
  return (
    <div className="bg-brand-areia min-h-screen font-sans text-brand-chocolate antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-areia/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-4xl px-4 sm:px-5">
            <div className="py-3 flex items-center">
                <img src="https://operacaolabirintar.github.io/Reposit-rio-de-Imagens/IMG_5430.png" alt="Labirintar Logo" className="w-32" />
            </div>
        </div>
      </header>
      
      <div className="container mx-auto p-4 sm:p-8 max-w-4xl mt-16">

        <main>
          <section className="text-center mb-16 sm:mb-24">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              {/* Paca Tatu Logo */}
              <div className="font-slab text-5xl font-bold text-brand-chocolate">
                  Paca Tatu
              </div>

              <span className="text-4xl font-slab text-gray-400">+</span>

              {/* Labirintar Logo */}
              <div className="flex items-center">
                <div className="font-slab text-5xl tracking-wide">
                  <span className="text-brand-goiaba">LAB</span><span className="text-brand-laranja">irintar</span>
                </div>
              </div>
            </div>
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
                <p className="text-lg leading-relaxed text-center">
                    Propomos uma parceria para integrar a expertise cênica da Paca Tatu em nossa rede de escolas. Juntos, podemos transformar um evento pontual de nosso currículo em uma experiência extracurricular rica e única, além de uma fonte extra de receita recorrente e escalável.
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
              Estamos animados com as possibilidades. Podemos agendar uma nova conversa para ajustar os detalhes desta proposta.
            </p>
            <a 
              href="mailto:operacao@labirintar.com.br" 
              className="inline-block bg-brand-goiaba text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-110"
            >
              Vamos Conversar
            </a>
          </section>
        </main>

        <footer className="text-center mt-20 pt-8 border-t border-brand-creme">
          <img src="https://operacaolabirintar.github.io/Reposit-rio-de-Imagens/IMG_5430.png" alt="Labirintar Logo" className="w-48 mx-auto" />
          <p className="text-sm text-gray-600 mt-4">© 2025 LABirintar. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);