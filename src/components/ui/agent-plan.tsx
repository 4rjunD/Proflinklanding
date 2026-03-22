"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: 1,
    title: "Fill out the Typeform",
    description:
      "A quick form to capture your skills, interests, experience, and Gmail address.",
    details: [
      "Tell us what subjects excite you: biology, CS, economics, psychology, or anything else",
      "List any coursework, projects, or extracurriculars that show your curiosity",
      "Provide your Gmail address so outreach comes from your real account",
    ],
  },
  {
    number: 2,
    title: "Automated professor outreach",
    description:
      "We identify relevant professors and send personalized cold emails from your Gmail.",
    details: [
      "Our platform scans university faculty whose research aligns with your interests",
      "Each email references the professor's specific work and your background",
      "Emails are sent via your own Gmail SMTP, so professors see a real student",
    ],
  },
  {
    number: 3,
    title: "Get notified when professors respond",
    description:
      "Instant notifications so you never miss a response from a professor.",
    details: [
      "Get alerted the moment a professor replies to your outreach",
      "Follow up with interested professors and confirm your placement",
    ],
  },
  {
    number: 4,
    title: "Unlock your AI research assistant",
    description:
      "Once placed, access an AI assistant that guides you through the entire research process.",
    details: [
      "Search academic databases and get AI-generated summaries of key findings",
      "Get help organizing your paper: abstract, methodology, results, and conclusion",
      "Learn how to design experiments and properly cite every source",
    ],
  },
  {
    number: 5,
    title: "Publish and stand out",
    description:
      "Complete your research and build a standout profile for college applications.",
    details: [
      "Work with your professor to submit your paper to journals or conferences",
      "Earn a recommendation letter from a professor who genuinely supervised your work",
      "Add your published research and professor endorsement to your applications",
    ],
  },
];

export default function Plan() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update to the highest visible step to prevent flickering
        const visibleIndices: number[] = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) visibleIndices.push(index);
          }
        });
        if (visibleIndices.length > 0) {
          setActiveStep((prev) => Math.max(prev, ...visibleIndices));
        }
      },
      {
        // Only trigger when a step reaches the middle 20% of the viewport
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="space-y-0">
        {steps.map((step, index) => {
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;

          return (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative flex gap-6 min-h-[200px]"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-700 ease-out",
                    isActive
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="relative w-px flex-1 bg-border mt-3">
                    <div
                      className={cn(
                        "absolute inset-x-0 top-0 w-full bg-primary transition-all duration-1000 ease-out",
                        isActive ? "h-full" : "h-0"
                      )}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                className={cn(
                  "pb-16 transition-all duration-700 ease-out",
                  isActive ? "opacity-100" : "opacity-30"
                )}
              >
                <h3
                  className={cn(
                    "text-lg font-semibold transition-all duration-700",
                    isCurrent ? "text-foreground" : ""
                  )}
                >
                  {step.title}
                </h3>
                <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>

                {/* Details - expand on active, stay visible once revealed */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-1000 ease-out",
                    isActive
                      ? "max-h-96 opacity-100 mt-5"
                      : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  <ul className="space-y-3 border-l-2 border-border pl-4">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className={cn(
                          "text-sm text-muted-foreground leading-relaxed transition-all duration-700 ease-out",
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0"
                        )}
                        style={{
                          transitionDelay: isActive
                            ? `${i * 150 + 300}ms`
                            : "0ms",
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
