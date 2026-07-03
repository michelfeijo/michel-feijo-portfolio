import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 container mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center"
      >
        <div className="md:w-1/2 w-full">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <span className="font-mono text-primary text-2xl font-normal">01.</span> 
              Sobre Mim
            </h2>
            <div className="h-px bg-border flex-1 ml-4"></div>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Minha jornada na engenharia de software sempre foi guiada por um princípio claro: 
              <span className="text-foreground font-medium"> a tecnologia deve resolver problemas reais de forma precisa e eficiente.</span>
            </p>
            <p>
              Com mais de 5 anos de experiência, já liderei projetos desde a sua concepção até a 
              entrega final em ambientes de alta demanda. Meu trabalho impacta diariamente centenas 
              de pessoas em dezenas de lojas, operando sistemas críticos de varejo e gestão.
            </p>
            <p>
              Não sou apenas um codificador. Sou um construtor que entende a infraestrutura onde o código roda, 
              o banco de dados que o sustenta e a interface que o usuário interage.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full relative">
          <div className="aspect-square max-w-[400px] mx-auto relative rounded-sm border-2 border-primary/20 bg-card p-8 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
            
            {/* Abstract technical visual representing the builder/engineering vibe */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`bg-primary rounded-sm ${(i % 7 === 0 || i % 11 === 0) ? 'animate-pulse' : ''}`} 
                  style={{ animationDelay: `${(i % 10) * 0.2}s` }}
                ></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <div className="text-8xl font-bold text-primary mb-2 tracking-tighter shadow-sm">5+</div>
              <div className="font-mono text-sm tracking-widest text-foreground bg-background/80 px-4 py-2 border border-border backdrop-blur-sm rounded-sm uppercase">
                Anos de Experiência
              </div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
