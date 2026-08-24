import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-gradient-to-b from-black/50 to-transparent",
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-500">
            <Zap className="h-5 w-5 text-amber-500" fill="currentColor" strokeWidth={0} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-extrabold tracking-tight text-white">
              LOC<span className="text-amber-500">-LINE</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Soluções em Energia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-slate-100 transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild size="default" className="font-bold uppercase tracking-wide">
            <a href="#contato">Solicitar proposta</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-navy-950 px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-bold uppercase tracking-wide text-slate-200 hover:bg-white/5 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-white/10 pt-4">
            <Button asChild className="w-full font-bold uppercase" onClick={() => setIsOpen(false)}>
              <a href="#contato">Solicitar proposta</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
