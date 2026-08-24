import { createFileRoute } from "@tanstack/react-router";
import {
  Footer,
  Grain,
  Header,
  Marquee,
  SiteCursor,
} from "@/components/site/chrome";
import { Hero } from "@/components/site/hero";
import { Work } from "@/components/site/work";
import { Bio } from "@/components/site/bio";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Player } from "@/components/site/player";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Grain />
      <SiteCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Bio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Player />
    </>
  );
}
