import { motion } from 'framer-motion';
import { Server, Layout, Database, Terminal, GitBranch, MonitorPlay } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-primary mb-6" size={36} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chakra UI"]
  },
  {
    title: "Backend",
    icon: <Server className="text-primary mb-6" size={36} />,
    skills: ["Node.js", "Express", "RESTful APIs", "TypeScript", "Microservices"]
  },
  {
    title: "Database",
    icon: <Database className="text-primary mb-6" size={36} />,
    skills: ["Oracle", "SQL", "Modelagem de Dados", "Otimização de Queries"]
  },
  {
    title: "DevOps & Infra",
    icon: <Terminal className="text-primary mb-6" size={36} />,
    skills: ["Docker", "Docker Swarm", "Linux Servers", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Observabilidade",
    icon: <MonitorPlay className="text-primary mb-6" size={36} />,
    skills: ["Grafana", "Monitoramento", "Logs", "Métricas de Performance"]
  },
  {
    title: "Arquitetura",
    icon: <GitBranch className="text-primary mb-6" size={36} />,
    skills: ["Integração de Sistemas", "Sênior ERP", "Clean Code", "Design Patterns"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="font-mono text-primary text-2xl font-normal">02.</span> 
            Arsenal Técnico
          </h2>
          <div className="h-px bg-border flex-1 ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border/50 p-8 rounded-sm hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10">
                {category.icon}
                <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
                      <span className="text-primary text-[10px]">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
