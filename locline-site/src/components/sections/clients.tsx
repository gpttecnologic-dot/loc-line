import { clients } from "@/data/site";

export function Clients() {
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="section-shell">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Operações que confiam na Loc-Line
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted/30 px-4"
            >
              <span className="text-center font-display text-base font-bold tracking-tight text-navy-950/70">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
