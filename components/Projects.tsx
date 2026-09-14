import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Resumind",
    subtitle: "AI Resume Analyzer",
    description:
      "An AI-powered platform that analyzes resumes against industry standards, providing actionable insights to boost interview callbacks.",
    tags: ["React", "TypeScript", "AI", "Puter.js", "Tailwind CSS"],
    image: "/project-1.png",
    github: "https://github.com/Clinton-Okumu/ai-resume-analyzer.git",
    demoLink: "https://ai-resume-analyzer-five-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Carlhub ERP",
    subtitle: "Business Management Software",
    description:
      "Enterprise management platform helping companies manage operations, financial tracking, HR workflows, and inventory.",
    tags: ["Python", "Django", "Next.js", "PostgreSQL", "REST API"],
    image: "/carlhub.webp",
    github: "https://github.com/calvin-okumu/carlhub-erp",
  },
  {
    id: 3,
    title: "Hotel Booking System",
    subtitle: "Hospitality & Reservation Platform",
    description:
      "Room discovery and booking platform with secure JWT authentication, reservation tracking, and automated billing workflows.",
    tags: ["PHP", "MySQL", "JWT", "Bootstrap", "AJAX"],
    image: "/project-3.png",
    github: "https://github.com/Clinton-Okumu/baidahotel",
    demoLink: "https://youtu.be/TLh-DCbgc9c",
  },
  {
    id: 4,
    title: "Event-Finder",
    subtitle: "Event Management & Ticketing",
    description:
      "Scalable event discovery platform featuring attendee registration, automated ticketing, and Paystack payment processing.",
    tags: ["Golang", "Next.js", "PostgreSQL", "Paystack", "REST API"],
    image: "/project-4.png",
    github: "https://github.com/Clinton-Okumu/event-finder",
  },
  {
    id: 5,
    title: "Uburu Multimotive",
    subtitle: "NGO Community Platform",
    description:
      "Official website and donation portal for an NGO dedicated to supporting and rehabilitating vulnerable families.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/project-5.png",
    github: "https://github.com/Clinton-Okumu/uburumultimotive",
    demoLink: "https://uburumultimovehs.org/",
  },
  {
    id: 6,
    title: "Urithi Mental Wellness",
    subtitle: "Healthcare Services Platform",
    description:
      "Modern web presence for a mental wellness facility, providing appointment scheduling and mental health resources.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/urithimw.webp",
    github: "https://github.com/Clinton-Okumu/urithimentalwellness",
    demoLink: "https://urithimentalwellness.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of web applications, backend services, and platforms I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.subtitle && (
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 border-t">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg hover:bg-muted transition-colors font-medium"
                      >
                        {project.demoLink.includes("youtu") ? (
                          <>
                            <PlayCircle className="w-4 h-4" />
                            Video Demo
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Clinton-Okumu?tab=repositories&type=source"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
