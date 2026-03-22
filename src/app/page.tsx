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
          <h2 className="mb-2 text-center text-3xl font-medium tracking-tight md:text-4xl">
            Our process
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            From sign-up to published paper, here&apos;s your journey.
          </p>
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

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 pr-4 font-medium text-muted-foreground w-1/3"></th>
                  <th className="py-4 px-4 font-semibold text-lg">
                    <span className="inline-flex items-center gap-2">ProfLink</span>
                  </th>
                  <th className="py-4 px-4 font-medium text-muted-foreground text-lg">Other Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-5 pr-4 font-medium">Price</td>
                  <td className="py-5 px-4">
                    <span className="text-2xl font-bold">$1,000</span>
                  </td>
                  <td className="py-5 px-4 text-muted-foreground">
                    <span className="text-2xl font-bold">$4,000 - $7,000+</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 font-medium">Professor independence</td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
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
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
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
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
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
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
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
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
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
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Ready to start your research journey?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Fill out a quick form with your interests and skills. Takes less than 5 minutes.
          </p>
          <a
            href="https://form.typeform.com/to/KWrV6NVC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 rounded-full px-8" size="lg">
              Get Started
              <ArrowRightIcon className="size-4 ml-2" />
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
}
