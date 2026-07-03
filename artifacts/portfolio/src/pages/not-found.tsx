import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-4 font-mono">404</h1>
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/">
          <span className="cursor-pointer border border-primary text-primary px-6 py-3 rounded-sm font-mono text-sm hover:bg-primary/10 transition-colors inline-block">
            Voltar para o Início
          </span>
        </Link>
      </div>
    </div>
  );
}
