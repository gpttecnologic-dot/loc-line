import { Factory, Radar, TriangleAlert, Wrench, Zap, type LucideIcon } from "lucide-react";

import { solutions } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Zap,
  Factory,
  Radar,
  TriangleAlert,
  Wrench,
};

export function Solutions() {
  return (
    <section id="solucoes" className="bg-muted/40 py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Soluções
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Um portfólio completo para operações críticas
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            Da geração de energia à engenharia de suporte, cuidamos de cada etapa para que sua
            operação continue funcionando, com segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = icons[solution.icon] ?? Zap;
            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {solution.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            );
          })}

          <a
            href="#contato"
            className="group flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-br from-navy-950 to-navy-800 p-7 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Precisa de algo sob medida?
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">Fale com nossa engenharia</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Montamos a solução ideal para o porte e a criticidade da sua operação.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400">
              Solicitar proposta
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
