import { Toaster } from "@/components/ui/sonner";

import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { Emergency } from "@/components/sections/emergency";
import { Equipment } from "@/components/sections/equipment";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Leadership } from "@/components/sections/leadership";
import { Projects } from "@/components/sections/projects";
import { Solutions } from "@/components/sections/solutions";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Equipment />
        <Projects />
        <Clients />
        <Emergency />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
