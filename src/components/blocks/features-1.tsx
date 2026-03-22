import { GraduationCap, FlaskConical, FileText, Award, Users, BookOpen } from 'lucide-react'

export function Features() {
    return (
        <section id="why-research" className="bg-zinc-50 py-16 md:py-24 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-semibold lg:text-4xl">Why research matters</h2>
                    <p className="mt-3 text-muted-foreground">Real academic research sets students apart in ways no other extracurricular can.</p>
                </div>
                <div className="mx-auto mt-10 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="flex items-start gap-3">
                        <GraduationCap className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Stand out in admissions</h3>
                            <p className="text-muted-foreground text-xs mt-1">Published research is one of the strongest signals on a college application.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Users className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Work with real professors</h3>
                            <p className="text-muted-foreground text-xs mt-1">Gain mentorship from university faculty doing cutting-edge work.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FlaskConical className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Build real-world skills</h3>
                            <p className="text-muted-foreground text-xs mt-1">Learn data analysis, academic writing, and critical thinking early.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BookOpen className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Discover your passion</h3>
                            <p className="text-muted-foreground text-xs mt-1">Explore subjects at a depth no classroom can offer.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FileText className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Get published</h3>
                            <p className="text-muted-foreground text-xs mt-1">Co-author papers in real academic journals and conferences.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Award className="size-5 mt-0.5 shrink-0 text-foreground" />
                        <div>
                            <h3 className="font-medium text-sm">Earn strong recommendations</h3>
                            <p className="text-muted-foreground text-xs mt-1">A professor&apos;s letter carries serious weight in applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
