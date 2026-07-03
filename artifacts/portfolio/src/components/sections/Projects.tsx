import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';

const mainProjects = [
  {
    title: "Gestão de Promotores",
    description: "Sistema web para controle de promotores de indústrias atuando em 94 lojas. Inclui check-in/out com saída automática (8h), busca inteligente de fornecedores (Nome, CNPJ), agenda diária por loja, avaliações de desempenho, solicitação de mão de obra com envio automático de e-mail e relatórios de assiduidade. Acessos segmentados para Recepção, Gerente e Trade.",
    tech: ["React", "TypeScript", "Node.js", "Oracle DB"],
    abbr: "GP"
  },
  {
    title: "Quadro Ideal",
    description: "Plataforma de planejamento de força de trabalho para controlar a quantidade ideal de colaboradores por cargo, loja, setor e período. Desenvolvida com planilha interativa (Handsontable), duplicação de dados entre períodos/lojas, bloqueio de edição de meses anteriores e autenticação baseada em perfis (Admin, Controladoria, RH, Diretoria).",
    tech: ["React", "TypeScript", "Chakra UI", "Node.js", "Oracle"],
    abbr: "QI"
  },
  {
    title: "Portal de Eletro",
    description: "Portal centralizado com links de assistência técnica para empresas que vendem eletrodomésticos nas lojas do grupo, viabilizando o acesso rápido para a equipe de atendimento ao cliente, otimizando o tempo de resposta e resolução de problemas.",
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    abbr: "PE"
  }
];

const otherProjects = [
  "Sistema de Gestão de Notas Fiscais",
  "Plataforma de Mobilização de Trabalhadores Intermitentes",
  "Sistema de Cancelamento de Pedidos",
  "Integração de Assinatura Digital com Sênior ERP"
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 container mx-auto px-6 md:px-12">
      <div className="flex items-center gap-4 mb-20 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <span className="font-mono text-primary text-2xl font-normal">03.</span> 
          Projetos em Destaque
        </h2>
        <div className="h-px bg-border flex-1 ml-4"></div>
      </div>

      <div className="space-y-32">
        {mainProjects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-0 items-center relative`}
          >
            {/* Visual placeholder representing the application interface/data */}
            <div className="w-full lg:w-7/12 relative group cursor-default">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 rounded-sm group-hover:bg-transparent transition-all duration-500"></div>
              
              <div className="aspect-[16/10] bg-card border border-border rounded-sm overflow-hidden flex flex-col relative">
                {/* Fake browser/app header */}
                <div className="h-8 border-b border-border bg-background flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
                {/* Fake app content */}
                <div className="flex-1 p-6 flex flex-col gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <div className="w-1/3 h-6 bg-border/50 rounded-sm"></div>
                    <div className="w-1/6 h-8 bg-primary/20 rounded-sm"></div>
                  </div>
                  <div className="flex-1 bg-background border border-border/50 rounded-sm p-4 flex gap-4">
                    <div className="w-1/4 h-full border-r border-border/50 flex flex-col gap-2 pr-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full h-4 bg-border/30 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="w-full h-32 bg-border/20 rounded-sm flex items-center justify-center">
                         <span className="font-mono text-muted-foreground/30 text-6xl font-bold tracking-tighter">
                          {project.abbr}
                        </span>
                      </div>
                      <div className="w-full h-4 bg-border/30 rounded-sm"></div>
                      <div className="w-3/4 h-4 bg-border/30 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`w-full lg:w-6/12 relative z-20 ${index % 2 !== 0 ? 'lg:text-left lg:-mr-12' : 'lg:text-right lg:-ml-12'} flex flex-col justify-center`}>
              <p className="font-mono text-primary text-sm mb-2 tracking-wide">Projeto Corporativo</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 hover:text-primary transition-colors">{project.title}</h3>
              
              <div className="bg-card border border-border/50 p-6 md:p-8 rounded-sm shadow-xl mb-6 hover:border-primary/30 transition-colors backdrop-blur-sm">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-left">
                  {project.description}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-4 font-mono text-xs text-muted-foreground ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                {project.tech.map(tech => (
                  <li key={tech} className="bg-background px-3 py-1 border border-border/50 rounded-sm">{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mt-32"
      >
        <h3 className="text-2xl font-bold text-center mb-12">Outros Projetos Relevantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {otherProjects.map((title, i) => (
            <div key={i} className="flex items-center gap-4 bg-card/50 p-6 rounded-sm border border-border/30 hover:border-primary/50 transition-colors group">
              <Folder className="text-primary shrink-0" size={24} />
              <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
