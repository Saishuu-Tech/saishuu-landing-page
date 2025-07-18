import { Navigation } from "~/components/navigation";
import { HeroSection } from "~/components/sections/hero";
import { MissionSection } from "~/components/sections/mission";
import { ProductsSection } from "~/components/sections/products";
import { InvestorsSection } from "~/components/sections/investors";
import { Footer } from "~/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <ProductsSection />
        <InvestorsSection />
      </main>
      <Footer />
    </div>
  );
}
