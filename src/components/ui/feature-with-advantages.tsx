import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div id="why-research" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Why Research?</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Research changes everything.
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Students who conduct real academic research don&apos;t just build stronger college applications. They develop critical thinking, discipline, and a deeper understanding of the world.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Stand out in admissions</p>
                  <p className="text-muted-foreground text-sm">
                    Published research is one of the strongest extracurriculars a student can have on their application.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Work with real professors</p>
                  <p className="text-muted-foreground text-sm">
                    Gain mentorship and guidance from university faculty in your field of interest.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Build real-world skills</p>
                  <p className="text-muted-foreground text-sm">
                    Learn data analysis, academic writing, and problem-solving before college.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Discover your passion</p>
                  <p className="text-muted-foreground text-sm">
                    Explore subjects deeply and find what truly excites you academically.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Get published</p>
                  <p className="text-muted-foreground text-sm">
                    Many students go on to co-author papers in real academic journals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Earn strong recommendations</p>
                  <p className="text-muted-foreground text-sm">
                    A letter from a university professor carries serious weight in applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
