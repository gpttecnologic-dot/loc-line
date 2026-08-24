import { Check, MoveVertical, TowerControl, Zap, type LucideIcon } from "lucide-react";

import { equipment, mtEngineering } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Zap,
  MoveVertical,
  TowerControl,
};

export function Equipment() {
  return (
    <section id="equipamentos" className="bg-white py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Equipamentos
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Frota própria, pronta para operar
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            Geradores, plataformas elevatórias e infraestrutura elétrica dimensionados para cada
            tipo de operação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {equipment.map((item) => {
            const Icon = icons[item.icon] ?? Zap;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-muted/30 p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-y-2 border-t border-border pt-5">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-1.5 text-xs font-medium text-navy-950"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 rounded-2xl border border-border bg-navy-950 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Engenharia em média tensão
            </span>
            <h3 className="mt-3 text-balance font-display text-2xl font-bold text-white">
              Suporte completo em infraestrutura MT
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Da cabine primária à interligação, entregamos projeto, execução e laudos técnicos com
              segurança e conformidade normativa.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {mtEngineering.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
              >
                <Check className="h-4 w-4 shrink-0 text-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
