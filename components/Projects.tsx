import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, PlayCircle } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Resumind",
    subtitle: "AI Resume Analyzer",
    description:
      "A platform that utilizes AI to analyze resumes and provide actionable insights on how to improve your resume. Utilizes puterjs for authentication, react and typescript.",
    image: "/project-1.png",
    github: "https://github.com/Clinton-Okumu/ai-resume-analyzer.git",
    demoLink: "https://ai-resume-analyzer-five-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Carlhub",
    subtitle: "Business Management Software",
    description:
      "A platform that enables companies to manage their business operations, including financial, human resources, and marketing. Built with a Python(Django) backend, nextjs frontend and postgresql for the database.",
    image: "/project-2.png",
    github: "https://github.com/calvin-okumu/carlhub-erp",
    demoLink: "https://demo.com",
  },
  {
    id: 3,
    title: "Hotel Booking System",
    subtitle: "A hotel management system",
    description:
      "A system enabling users to browse available rooms, explore facilities and amenities at Baida Hotel, and process payments. Built with a PHP backend using MySQL and JWT authentication, and an HTML/CSS/Bootstrap frontend with AJAX API integration.",
    image: "/project-3.png",
    github: "https://github.com/Clinton-Okumu/baidahotel",
    demoLink: "https://youtu.be/TLh-DCbgc9c",
  },
  {
    id: 4,
    title: "Event-Finder",
    subtitle: "An event management platform",
    description:
      "A comprehensive event management platform with event registration, ticketing, and management tools. Built with Golang, Next.js, PostgreSQL, and Paystack for payment integration.",
    image: "/project-4.png",
    github: "https://github.com/Clinton-Okumu/event-finder",
    demoLink: "https://demo.com",
  },
  {
    id: 5,
    title: "UburuMultimotive website",
    subtitle: "An NGO website",
    description:
      "An NGO that provides safe shelter, warm meals, and the compassionate support needed to help individuals and families move from the streets toward lasting independence. Built with nextjs and tailwind css",
    image: "/project-5.png",
    github: "https://github.com/Clinton-Okumu/uburumultimotive",
    demoLink: "https://uburumultimovehs.org/",
  },
  {
    id: 6,
    title: "Samaki express system",
    subtitle: "A fish business website",
    description:
      "Samaki Express EA Ltd delivers end-to-end aquaculture solutions, from certified inputs to advisory and logistics. We help farmers grow healthy stock, improve yields, and build sustainable businesses. Built with shadcn, tailwind and nextjs",
    image: "/project-6.png",
    github: "https://github.com/Clinton-Okumu/samaki-express",
    demoLink: "https://samaki-express.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-4xl font-bold">Browse My Recent</h2>
          <h3 className="text-3xl text-primary">Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.subtitle && (
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-muted transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      View
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="https://github.com/Clinton-Okumu?tab=repositories&type=source">
            <Button variant={"link"}>More Projects</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
