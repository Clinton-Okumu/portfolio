import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, PlayCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Resumind",
    subtitle: "AI Resume Analyzer",
    description: "A platform that utilizes AI to analyze resumes and provide actionable insights on how to improve your resume. Utilizes puterjs for authentication, react and typescript.",
    image: "/project-1.png",
    github: "https://github.com",
    demoLink: null,
  },
  {
    id: 2,
    title: "Carlhub",
    subtitle: "Business Management Software",
    description: "A platform that enables companies to manage their business operations, including financial, human resources, and marketing. Built with a Python(Django) backend, nextjs frontend and postgresql for the database.",
    image: "/project-2.png",
    github: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    id: 3,
    title: "Hotel Booking System",
    subtitle: "",
    description: "A system enabling users to browse available rooms, explore facilities and amenities at Baida Hotel, and process payments. Built with a PHP backend using MySQL and JWT authentication, and an HTML/CSS/Bootstrap frontend with AJAX API integration.",
    image: "/project-3.png",
    github: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    subtitle: "Full Stack Application",
    description: "A comprehensive e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
    image: "/project-1.png",
    github: "https://github.com",
    demoLink: null,
  },
  {
    id: 5,
    title: "Task Management App",
    subtitle: "Productivity Tool",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with React, Firebase, and Tailwind CSS.",
    image: "/project-2.png",
    github: "https://github.com",
    demoLink: null,
  },
  {
    id: 6,
    title: "Weather Dashboard",
    subtitle: "Data Visualization",
    description: "An interactive weather dashboard displaying forecasts, historical data, and weather alerts. Built with Next.js, OpenWeather API, and Chart.js for data visualization.",
    image: "/project-3.png",
    github: "https://github.com",
    demoLink: null,
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
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
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
                      Video Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium">
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
