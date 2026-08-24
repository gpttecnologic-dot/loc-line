import { Building2, MapPin, ShieldCheck, Truck } from "lucide-react";

import { aboutStats, siteConfig } from "@/data/site";

const pillars = [
  {
    icon: Truck,
    title: "Estrutura própria de logística",
    description: "Frota e equipe dedicadas para atender emergências com agilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Equipe certificada NR-10 e NR-35",
    description: "Técnicos habilitados para eletricidade e trabalho em altura.",
  },
  {
    icon: MapPin,
    title: "Presença em MG, RJ e SP",
    description: "Cobertura regional para operações industriais e de infraestrutura.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="section-shell grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            A {siteConfig.name}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Holding em soluções de energia desde {siteConfig.foundedYear}
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            A {siteConfig.fullName} atua em Minas Gerais, Rio de Janeiro e São Paulo oferecendo
            geração de energia, infraestrutura elétrica e trabalho em altura para operações que não
            podem parar. Com estrutura própria de logística e equipe técnica certificada nas normas
            NR-10 e NR-35, garantimos continuidade operacional em cenários críticos e de emergência.
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 shrink-0 text-amber-600" />
            Operações ativas em {siteConfig.regions.join(", ")}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-navy-950">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-gradient-to-br from-navy-950 to-navy-800 p-7 shadow-sm"
            >
              <div className="font-display text-4xl font-bold text-amber-400">{stat.value}</div>
              <p className="mt-2 text-sm leading-snug text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
