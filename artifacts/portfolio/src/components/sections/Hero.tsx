import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5547997625507?text=Ola%20Michel%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center container mx-auto px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background depth elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary mb-6 text-sm md:text-base tracking-wide"
        >
          Olá, meu nome é
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4"
        >
          Michel Feijó.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-muted-foreground mb-8 leading-tight"
        >
          Eu construo sistemas para o mundo real.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          Sou um Desenvolvedor de Software Sênior com mais de 5 anos de experiência. 
          Especializado em arquitetar e entregar soluções completas — do backend robusto 
          com Node.js e Docker até interfaces precisas com React.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#projects" className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-mono text-sm font-bold hover:bg-primary/90 transition-colors flex items-center justify-center min-w-[200px]">
            Ver Projetos
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-8 py-4 rounded-sm font-mono text-sm font-bold hover:bg-primary/10 transition-colors flex items-center justify-center min-w-[200px]">
            Entrar em Contato
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 text-muted-foreground animate-bounce hidden md:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
