import { Button } from "~/components/ui/button";
import { HeroImage } from "../ui/hero-image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function HeroSection() {
  return (
    <section className="min-h-screen flex mt-15 md:mt-0 lg:mt-0 md:items-center lg:items-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Redefining How Software Gets Made
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building for the AI era from first principles
        </p>
        <div className="flex justify-center mb-8">
          <HeroImage size={250} />
        </div>
        <Button
          size="lg"
          onClick={() => scrollToSection("mission")}
          className="text-lg px-8 py-6 md:mb-20 lg:mb-20"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}
