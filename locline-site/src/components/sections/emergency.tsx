import { Phone, Siren } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Emergency() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[130px]"
        aria-hidden
      />

      <div className="section-shell relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
            <Siren className="h-7 w-7" />
          </span>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Emergência em MT · 24 horas
            </span>
            <h2 className="mt-2 max-w-xl text-balance font-display text-2xl font-bold text-white sm:text-3xl">
              Sua operação não pode parar. A nossa engenharia também não.
            </h2>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#contato">Acionar suporte</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
