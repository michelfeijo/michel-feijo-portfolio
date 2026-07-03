export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 font-mono text-sm text-muted-foreground flex flex-col items-center gap-4">
        <p className="flex items-center gap-2 justify-center">
          Desenvolvido com foco e precisão.
        </p>
        <p>&copy; {new Date().getFullYear()} Michel Feijó. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
