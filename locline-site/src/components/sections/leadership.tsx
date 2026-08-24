import { leadership } from "@/data/site";

export function Leadership() {
  return (
    <section id="lideranca" className="bg-white py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Liderança
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Quem está à frente da operação
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            Uma diretoria com experiência em engenharia, indústria e gestão para sustentar o
            crescimento da holding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-muted/30 p-8 sm:flex-row"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-950 to-navy-700 font-display text-xl font-bold text-amber-400">
                {person.initials}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-950">{person.name}</h3>
                <p className="text-sm font-semibold text-amber-600">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
