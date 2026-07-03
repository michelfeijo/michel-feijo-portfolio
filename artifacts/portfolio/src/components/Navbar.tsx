import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', num: '01.', label: 'Sobre' },
  { href: '#skills', num: '02.', label: 'Arsenal' },
  { href: '#projects', num: '03.', label: 'Projetos' },
  { href: '#contact', num: '04.', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-background/90 backdrop-blur-md border-b border-border/50 py-4 shadow-sm shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-primary text-xl tracking-tighter hover:opacity-80 transition-opacity">MF.</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          {navLinks.map(({ href, num, label }) => (
            <a key={href} href={href} className="hover:text-primary transition-colors">
              <span className="text-primary mr-1">{num}</span>{label}
            </a>
          ))}
          <a href="#contact" className="ml-4 border border-primary text-primary px-4 py-2 rounded-sm hover:bg-primary/10 transition-colors">
            Fale Comigo
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors p-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-5 font-mono text-sm text-muted-foreground">
              {navLinks.map(({ href, num, label }) => (
                <li key={href}>
                  <a href={href} onClick={closeMobile} className="hover:text-primary transition-colors">
                    <span className="text-primary mr-1">{num}</span>{label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={closeMobile} className="inline-block border border-primary text-primary px-4 py-2 rounded-sm hover:bg-primary/10 transition-colors">
                  Fale Comigo
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
