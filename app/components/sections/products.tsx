import { Button } from "~/components/ui/button";
import { ShutenCTA } from "~/components/ui/shuten-cta";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Products</h2>
          <div className="bg-neutral-100 dark:bg-neutral-800 border border-border rounded-lg p-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">Shuten</h3>
              <span className="px-2 py-1 bg-muted/50 border border-border rounded-full text-xs font-medium text-muted-foreground">
                ALPHA
              </span>
            </div>
            <p className="text-muted-foreground mb-2 text-lg">
              The last backend you'll ever need
            </p>
            <p className="text-sm text-muted-foreground/80 mb-6 italic">
              AI-powered infrastructure that just works.
            </p>
            <p className="text-sm text-muted-foreground/80 mb-2 italic">
              Early access by invitation only.
            </p>
            <Button asChild className="w-full">
              <ShutenCTA>Request Access</ShutenCTA>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
