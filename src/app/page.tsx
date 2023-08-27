import { CTA } from "@/sections/home/cta";
import { Dashboard } from "@/sections/home/dashboard";
import { Features } from "@/sections/home/features";
import { Footer } from "@/sections/home/footer";
import { Hero } from "@/sections/home/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Dashboard />
      <CTA />
      {/* <Footer /> */}
    </main>
  );
}
