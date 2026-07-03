import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 container mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-primary mb-4 tracking-wide text-sm">04. O Próximo Passo</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">Vamos Conversar</h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Estou sempre interessado em ouvir sobre novos projetos e desafios técnicos. 
          Seja para uma oportunidade de trabalho, uma dúvida sobre arquitetura ou apenas para dizer um olá, 
          minha caixa de entrada está sempre aberta.
        </p>
        
        <a 
          href="mailto:michel.superacao@gmail.com" 
          className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-sm font-mono font-bold hover:bg-primary/90 transition-colors mb-20 text-lg shadow-lg shadow-primary/20"
        >
          Diga Olá
        </a>
        
        <div className="flex justify-center gap-10">
          <a href="https://github.com/michelfeijo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-3">
            <Github size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/michel-feijo-77290a348/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-3">
            <Linkedin size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
          </a>
          <a href="mailto:michel.superacao@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-3">
            <Mail size={32} />
            <span className="font-mono text-xs uppercase tracking-widest">Email</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
