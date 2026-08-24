import { ArrowRight, ShieldCheck, Timer, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aboutStats, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-amber-500/25 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-navy-500/40 blur-[120px]"
        aria-hidden
      />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Zap className="h-3.5 w-3.5" />
            Holding em soluções de energia desde {siteConfig.foundedYear}
          </div>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-300">
            Geração de energia, usinas móveis, plataformas elevatórias e engenharia elétrica para
            operações críticas em Minas Gerais, Rio de Janeiro e São Paulo — com estrutura própria
            de logística e equipe técnica certificada.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group">
              <a href="#contato">
                Solicitar proposta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#solucoes">Conhecer soluções</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-amber-400" />
              Atendimento 24 horas, 7 dias por semana
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Equipe certificada NR-10 e NR-35
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8 shadow-2xl shadow-black/40">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Capacidade instalada
              </span>
              <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            </div>
            <div className="relative mt-3 font-display text-5xl font-bold text-white">
              5 <span className="text-amber-400">MVA</span>
            </div>
            <p className="relative mt-1 text-sm text-slate-400">
              Potência máxima por operação, em BT e MT
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-amber-400/20 bg-navy-900/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15">
                <Zap className="h-[18px] w-[18px] text-amber-400" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Operação em paralelismo</div>
                <div className="text-xs text-slate-400">Geradores sincronizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
