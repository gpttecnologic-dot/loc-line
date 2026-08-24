import { MapPin } from "lucide-react";

import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projetos" className="bg-muted/40 py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Projetos
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Resultados em operações reais
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            Alguns dos projetos que sustentam operações críticas de grandes concessionárias e
            indústrias pelo Brasil.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex items-start gap-6 rounded-2xl border border-border bg-white p-7 shadow-sm"
            >
              <span className="shrink-0 font-display text-3xl font-bold text-amber-500">
                {project.value}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {project.title}
                </h3>
                <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-amber-600" />
                  {project.location}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
