import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Operations() {
  return (
    <section className="py-32 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Terminal className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Além do Código</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Entregar software é apenas metade do trabalho. Garantir que ele execute de forma 
              confiável, escalável e mensurável é o que define a verdadeira engenharia de software no mundo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border p-8 rounded-sm hover:border-primary/30 transition-colors group">
              <div className="text-primary font-mono text-sm font-bold mb-4">01. Automação</div>
              <h3 className="text-foreground text-xl font-bold mb-4 group-hover:text-primary transition-colors">CI/CD & Deploy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Construção de pipelines automatizadas com GitHub Actions, garantindo que o código testado e validado chegue 
                à produção de forma segura, rápida e sem intervenção manual propensa a erros.
              </p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-sm hover:border-primary/30 transition-colors group">
              <div className="text-primary font-mono text-sm font-bold mb-4">02. Infraestrutura</div>
              <h3 className="text-foreground text-xl font-bold mb-4 group-hover:text-primary transition-colors">Docker Swarm</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Orquestração avançada de containers em servidores Linux, assegurando alta disponibilidade, 
                isolamento de processos e facilidade na escalabilidade horizontal dos microsserviços e aplicações.
              </p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-sm hover:border-primary/30 transition-colors group">
              <div className="text-primary font-mono text-sm font-bold mb-4">03. Observabilidade</div>
              <h3 className="text-foreground text-xl font-bold mb-4 group-hover:text-primary transition-colors">Grafana & Métricas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitoramento ativo e painéis visuais de sistemas e bancos de dados para identificar gargalos de performance, 
                permitindo ações proativas antes que problemas afetem os usuários finais nas lojas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
