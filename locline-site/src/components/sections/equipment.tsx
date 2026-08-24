import { Check } from "lucide-react";

import heroGenerator from "@/assets/hero-generator.jpg";
import plataformaArticulada from "@/assets/plataforma-articulada.jpg";
import plataformaTesoura from "@/assets/plataforma-tesoura.jpg";
import { Button } from "@/components/ui/button";
import { equipment, mtEngineering } from "@/data/site";

const images: Record<string, string> = {
  "hero-generator": heroGenerator,
  "plataforma-tesoura": plataformaTesoura,
  "plataforma-articulada": plataformaArticulada,
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
          {equipment.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <span className="absolute left-0 top-0 z-10 flex h-9 w-9 items-center justify-center bg-amber-500 font-display text-base font-bold text-white">
                  {index + 1}
                </span>
                <img
                  src={images[item.image]}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-sm font-medium text-navy-950"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 w-full rounded-none border-navy-950/20 font-bold uppercase tracking-wide text-navy-950 hover:bg-navy-950 hover:text-white"
                >
                  <a href="#contato">Solicitar proposta</a>
                </Button>
              </div>
            </div>
          ))}
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
