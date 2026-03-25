import { Header } from "@/components/ui/header-1";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Features } from "@/components/blocks/features-1";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import Plan from "@/components/ui/agent-plan";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Check, X } from "lucide-react";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LogosSection />

        {/* Why Research */}
        <Features />

        {/* Process */}
        <section id="how-it-works" className="mx-auto max-w-5xl px-4 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              3-4 months. Fully managed. Real results.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              You fill out one form. We do everything else: professor outreach, email
              management, and research support. All customized to your interests.
            </p>
          </div>
          <Plan />
        </section>

        {/* ProfLink vs Others */}
        <section className="mx-auto max-w-5xl px-4 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why ProfLink is different
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Most research programs cost thousands and pair you with their own staff.
              ProfLink connects you with independent professors at a fraction of the price.
            </p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="space-y-6 md:hidden">
            {[
              { label: "Price", us: "$1,000", them: "$4,000 - $7,000+" , isPrice: true },
              { label: "Professor independence", us: "Fully independent. No affiliation with ProfLink. They mentor based on genuine interest.", them: "Paid by the agency, creating a transactional relationship admissions officers see through." },
              { label: "Credibility", us: "100% authentic. Outreach from your own email. The relationship is real and verifiable.", them: "Programs are well-known to admissions committees. Participation alone doesn't differentiate you." },
              { label: "How outreach works", us: "Personalized cold emails from your own Gmail. Professors see a real student, not a company.", them: "Agency assigns you to an affiliated professor. No real networking skills developed." },
              { label: "AI research support", us: "AI assistant helps find papers, structure writing, understand methodology, and cite sources.", them: "Limited or no ongoing support after placement. You're largely on your own." },
              { label: "Recommendation letters", us: "Earned organically from a professor who genuinely supervised your work.", them: "Often templated or expected as part of the paid program package." },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border p-5">
                <h3 className="font-semibold text-sm mb-3">{row.label}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary block mb-1.5">ProfLink</span>
                    {row.isPrice ? (
                      <span className="text-xl font-bold text-primary">{row.us}</span>
                    ) : (
                      <div className="flex items-start gap-1.5">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed">{row.us}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground block mb-1.5">Others</span>
                    {row.isPrice ? (
                      <span className="text-xl font-bold text-muted-foreground">{row.them}</span>
                    ) : (
                      <div className="flex items-start gap-1.5">
                        <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed text-muted-foreground">{row.them}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 pr-4 font-medium text-muted-foreground w-1/3"></th>
                  <th className="py-4 px-4 font-semibold text-lg text-primary">
                    <span className="inline-flex items-center gap-2">ProfLink</span>
                  </th>
                  <th className="py-4 px-4 font-medium text-muted-foreground text-lg">Other Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-5 pr-4 font-medium">Price</td>
                  <td className="py-5 px-4">
                    <span className="text-2xl font-bold text-primary">$1,000</span>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <span className="text-2xl font-bold">$4,000 - $7,000+</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">Professor independence</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>Professors are fully independent. They have no affiliation with ProfLink and choose to mentor based on genuine interest.</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="size-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Professors are paid by the agency, creating a transactional relationship that admissions officers can see through.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">Credibility</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>100% authentic. Your outreach comes from your own email. The research relationship is real and verifiable.</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="size-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Programs are well-known to admissions committees. Participation alone doesn&apos;t differentiate you.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">How outreach works</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>Personalized cold emails sent from your own Gmail. Professors see a real student, not a company.</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="size-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Agency assigns you to an affiliated professor. No real outreach or networking skills developed.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">AI research support</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>AI assistant helps you find papers, structure your writing, understand methodology, and cite sources.</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="size-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Limited or no ongoing support after placement. You&apos;re largely on your own.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">Recommendation letters</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>Earned organically from a professor who genuinely supervised your work.</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="size-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Often templated or expected as part of the paid program package.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <div id="testimonials" className="py-20">
          <TestimonialSlider />
        </div>

        {/* Get Started CTA */}
        <section data-cta-section className="relative mx-auto max-w-3xl px-4 py-24 text-center overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.45_0.12_25/.06),transparent)]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Start your research in under 5 minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            One form. We handle the rest. In 3-4 months you&apos;ll have real research,
            a published paper, and a professor&apos;s recommendation.
          </p>
          <a
            href="https://form.typeform.com/to/KWrV6NVC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 rounded-full px-8 bg-primary hover:bg-primary/90" size="lg">
              Get Started
              <ArrowRightIcon className="size-4 ml-2" />
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
}
