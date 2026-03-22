"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Card } from "@/components/ui/card";

interface Testimonial {
  name: string;
  label: string;
  text: string;
}

const studentTestimonials: Testimonial[] = [
  {
    name: "Tejash Gupta",
    label: "UPenn Admit",
    text: "ProfLink connected me with a research lab that completely changed my application. I had a published paper and a professor's recommendation before senior year even started.",
  },
  {
    name: "Aryaan Patel",
    label: "Cornell Economics Research, Day 1",
    text: "I signed up and within 24 hours I was matched with a Cornell economics professor. I couldn't believe how fast it happened. The AI assistant made the whole research process manageable.",
  },
  {
    name: "Sandra Whitfield",
    label: "Parent of Ethan",
    text: "My son was connected with an Ivy League researcher within one week of joining ProfLink. As a parent, seeing him work on real academic problems with a real professor gave me more confidence than any prep program ever could.",
  },
  {
    name: "Aarush Konda",
    label: "Matched in 1 Week",
    text: "Within a week of filling out the form, I was working with a professor on machine learning research. ProfLink made something that felt impossible for a high schooler completely accessible.",
  },
  {
    name: "Michael Brennan",
    label: "Parent of Sophie",
    text: "We had looked into research programs that cost $5,000 or more. ProfLink got Sophie matched with a real professor in under a week for a fraction of the cost. The difference in authenticity is night and day.",
  },
  {
    name: "Lee Ahmed",
    label: "Matched in 1 Week",
    text: "I never thought a high school student could do real university research. One week after joining ProfLink, I was collaborating with a professor on a biomedical engineering project. It changed how I think about my future.",
  },
];

const admissionsTestimonials: Testimonial[] = [
  {
    name: "Dr. Irena Smith",
    label: "Former Stanford Admissions Officer",
    text: "\"Intellectual vitality must ooze from the file. We look for authentic curiosity that goes beyond the classroom, beyond GPAs or the number of APs taken.\"",
  },
  {
    name: "Harvard Admissions Office",
    label: "Admissions Data",
    text: "\"Students who demonstrate substantial scholarship or academic creativity are 8x more likely to be admitted to top universities than those who only present perfect academic records.\"",
  },
  {
    name: "Ivy League Admissions Officer",
    label: "Via Polygence Research",
    text: "\"We care most about the authenticity of the experience and how students write about it. How they found their way to research is less important than the fact that they did research.\"",
  },
  {
    name: "Top 3 Engineering University AO",
    label: "Via Polygence Research",
    text: "\"How they found their way to research is less important than the fact that they did research. What matters is genuine engagement with the work.\"",
  },
  {
    name: "Former Admissions Officer",
    label: "Via Polygence Blog",
    text: "\"It was always fun as an admission officer to tell an interesting story about a student with a cool project. Those students stood out in committee.\"",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="w-[340px] shrink-0 p-6 bg-card border-border">
      <div className="mb-4">
        <span className="font-semibold text-base">{t.name}</span>
        <span className="block text-xs text-muted-foreground mt-0.5">
          {t.label}
        </span>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{t.text}</p>
    </Card>
  );
}

export function TestimonialSlider() {
  return (
    <div className="space-y-16">
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Real results from real students
        </h2>
        <p className="mt-3 text-muted-foreground">
          See what happens when merit meets opportunity.
        </p>
      </div>

      {/* Students & Parents Row */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-6">
          Students &amp; Parents
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteSlider gap={20} duration={45} durationOnHover={90}>
            {studentTestimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </InfiniteSlider>
        </div>
      </div>

      {/* Admissions Officers Row */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-6">
          Admissions Officers
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteSlider
            gap={20}
            duration={50}
            durationOnHover={100}
            reverse
          >
            {admissionsTestimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}
