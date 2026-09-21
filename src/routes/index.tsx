import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Cursor } from "@/components/site/Cursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Reel } from "@/components/site/Reel";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEN Plumbing & Heating | Boilers, Bathrooms & Emergency Repairs" },
      {
        name: "description",
        content:
          "Gas Safe registered plumbing and heating across Merseyside & Cheshire. Boiler installs, central heating, bathrooms and 24/7 emergency call-outs. Free quotations.",
      },
      { property: "og:title", content: "VEN Plumbing & Heating" },
      {
        property: "og:description",
        content:
          "Boiler installations, central heating, bathrooms and emergency repairs across Merseyside & Cheshire. Free quotations, fully insured.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Reel />
        <Process />
        <EmergencyCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
