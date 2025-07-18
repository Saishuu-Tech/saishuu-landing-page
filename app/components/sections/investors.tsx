import { Button } from "~/components/ui/button";

export function InvestorsSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            For Investors & Partners
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            We're building something transformative
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            YC Fall 2025 Applicant
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <a href="mailto:contact@saishuu.ai">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
