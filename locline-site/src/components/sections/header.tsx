import { Menu, Phone, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/data/site";
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
          : "bg-transparent",
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/20">
            <Zap className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {siteConfig.name}
            <span className="ml-1.5 text-xs font-medium tracking-widest text-amber-400">
              GERADORES
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-amber-400"
          >
            <Phone className="h-4 w-4 text-amber-400" />
            {siteConfig.phone}
          </a>
          <Button asChild size="default">
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
                className="rounded-md px-2 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-slate-200"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              {siteConfig.phone}
            </a>
            <Button asChild onClick={() => setIsOpen(false)}>
              <a href="#contato">Solicitar proposta</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
