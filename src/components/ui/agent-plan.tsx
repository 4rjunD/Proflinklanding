"use client";

import { cn } from "@/lib/utils";
import { ClipboardList, Mail, FlaskConical } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Sign up",
    time: "5 minutes",
    description: "Fill out a quick form with your interests, skills, and Gmail address. We handle everything from here.",
    details: [
      "Tell us your academic interests and goals",
      "We build your outreach profile for you",
      "No essays, no applications, no interviews",
    ],
  },
  {
    icon: Mail,
    title: "We reach out for you",
    time: "Weeks 1-4",
    description: "We send 150-200 fully customized cold emails to professors from your own Gmail. Each email is unique, not a template.",
    details: [
      "We read each professor's recent papers and pull specific context into your email",
      "Every email references their actual research, methodology, and findings",
      "Your background and interests are woven in to show genuine fit",
      "Sent from your real Gmail so professors see a real student, not a platform",
      "Staggered sending across days to look natural, not automated",
    ],
  },
  {
    icon: FlaskConical,
    title: "Do real research",
    time: "Months 2-4",
    description: "Once a professor responds, you start working with them. Our AI assistant guides you through the entire process.",
    details: [
      "Find papers, structure your writing, cite sources properly",
      "Work toward a publishable paper with your professor",
      "Earn a genuine recommendation letter",
    ],
  },
];

export default function Plan() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={i} className="relative rounded-xl border bg-card p-6">
            {/* Step number */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {i + 1}
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{step.time}</span>
            </div>

            <Icon className="size-5 text-muted-foreground mb-3" />
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

            <ul className="space-y-2">
              {step.details.map((d, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary mt-0.5">+</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
