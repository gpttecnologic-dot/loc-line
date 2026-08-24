import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig, solutionTypes } from "@/data/site";

const contactInfo = [
  { icon: Phone, label: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "MG · RJ · SP", href: undefined },
  { icon: Clock, label: "Suporte 24 horas, todos os dias", href: undefined },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      toast.success("Solicitação enviada!", {
        description: "Nossa equipe vai entrar em contato em breve.",
      });
      event.currentTarget.reset();
      setIsSubmitting(false);
    }, 700);
  }

  return (
    <section id="contato" className="bg-muted/40 py-24">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Contato
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Vamos falar sobre a sua operação
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            Conte um pouco sobre a sua necessidade e nossa equipe retorna com a melhor solução para
            o seu caso.
          </p>

          <ul className="mt-9 flex flex-col gap-4">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-amber-400">
                  <item.icon className="h-4 w-4" />
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-navy-950 hover:text-amber-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-navy-950">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-9"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="Seu nome completo" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" name="company" placeholder="Nome da empresa" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" placeholder="voce@empresa.com" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" required />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="solutionType">Tipo de solução</Label>
              <Select name="solutionType">
                <SelectTrigger id="solutionType">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  {solutionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="description">Descreva sua operação</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Conte um pouco sobre a demanda: potência estimada, prazo, localização..."
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" disabled={isSubmitting}>
            <Send className="h-4 w-4" />
            {isSubmitting ? "Enviando..." : "Enviar solicitação"}
          </Button>
        </form>
      </div>
    </section>
  );
}
