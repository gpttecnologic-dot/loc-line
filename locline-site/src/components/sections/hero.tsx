import {
  ArrowRight,
  Award,
  Headset,
  MapPin,
  MoveVertical,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import heroImage from "@/assets/hero-generator.jpg";
import { Button } from "@/components/ui/button";
import { heroHighlights, heroStats } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Zap,
  MoveVertical,
  Headset,
  ShieldCheck,
  MapPin,
  Wrench,
  Award,
  Users,
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gerador Loc-Line e plataforma elevatória em operação industrial"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <div className="section-shell relative pb-14 pt-32 lg:pb-20 lg:pt-44">
        <div className="max-w-2xl">
          <h1 className="text-balance font-display text-4xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Sua operação
            <br />
            não pode parar.{" "}
            <span className="text-amber-500">
              A Loc-Line coloca o equipamento certo para ela continuar.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-200">
            Geradores de energia e plataformas elevatórias para indústria, mineração, construção,
            infraestrutura e operações críticas.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {heroStats.map((stat) => {
              const Icon = icons[stat.icon] ?? Zap;
              return (
                <div key={stat.value} className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-amber-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-xs font-extrabold uppercase tracking-wide text-white">
                      {stat.value}
                    </span>
                    <span className="block text-xs text-slate-300">{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group font-bold uppercase tracking-wide">
              <a href="#contato">
                Preciso de um equipamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent font-bold uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#contato">Falar com um especialista</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/80 backdrop-blur">
        <div className="section-shell grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
          {heroHighlights.map((item) => {
            const Icon = icons[item.icon] ?? MapPin;
            return (
              <div key={item.title} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-amber-500" />
                <span className="leading-tight">
                  <span className="block text-xs font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </span>
                  <span className="block text-xs text-slate-400">{item.subtitle}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
