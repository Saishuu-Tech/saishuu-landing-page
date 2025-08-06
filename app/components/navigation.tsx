import { Button } from "~/components/ui/button";
import { ShutenCTA } from "~/components/ui/shuten-cta";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="font-bold text-xl hover:text-foreground/80 transition-colors"
        >
          Saishuu
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("mission")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Mission
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <Button asChild>
          <ShutenCTA>
            Early Access
          </ShutenCTA>
        </Button>
      </div>
    </nav>
  );
}
