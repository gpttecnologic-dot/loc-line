import { Mail, Phone, ShieldCheck, Zap } from "lucide-react";

import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pt-16">
      <div className="section-shell grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950">
              <Zap className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
              <span className="ml-1.5 text-xs font-medium tracking-widest text-amber-400">
                GERADORES
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Holding em soluções de energia desde {siteConfig.foundedYear}. Geração de energia,
            infraestrutura elétrica e trabalho em altura para operações que não podem parar.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              NR-10
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              NR-35
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Navegação</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-amber-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contato</h3>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400"
              >
                <Mail className="h-4 w-4 text-amber-400" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-shell flex flex-col items-center gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.fullName}. Todos os direitos reservados.
        </p>
        <p>Atuação em {siteConfig.regions.join(" · ")}</p>
      </div>
    </footer>
  );
}
