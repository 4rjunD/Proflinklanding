"use client";

import { cn } from "@/lib/utils";
import { ClipboardList, Users, Mail, FlaskConical } from "lucide-react";

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
    icon: Users,
    title: "Meet with us",
    time: "10 minutes",
    description: "A quick call where we learn about you, review your resume, and customize your outreach strategy around your specific interests.",
    details: [
      "We tailor everything to your background, goals, and target fields",
      "Walk through your resume and highlight what professors care about",
      "Set up your outreach profile so every email feels personal and authentic",
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
    description: "Once a professor responds, you start working with them. We walk you through the entire research process and help you every step of the way.",
    details: [
      "We help you find relevant papers, understand methodology, and structure your writing",
      "Collaborate with other ProfLink students going through the same process",
      "Work toward a publishable paper with your professor",
      "Earn a genuine recommendation letter from faculty who know your work",
    ],
  },
];

export default function Plan() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
