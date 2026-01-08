import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <Image
              src="/pic1.webp"
              alt="Clinton Okumu"
              fill
              priority
              className="rounded-full object-cover border-4 border-primary"
            />
          </div>

          <div className="text-center md:text-left max-w-xl space-y-4">
            <p className="text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold">Clinton Okumu</h1>
            <h2 className="text-xl md:text-2xl text-primary">
              Full Stack Developer
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-6">
              <a
                href="/clint-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/clinton-okumu-508052281/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border hover:bg-muted transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Clinton-Okumu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border hover:bg-muted transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-center">Get To Know More</h2>
          <h3 className="text-xl text-primary text-center">About Me</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Software Engineer with two years of combined experience as an IT
            Officer and Backend Developer. Skilled in troubleshooting, network
            maintenance, and strengthening cybersecurity, with expertise in
            backend development, building efficient APIs, database optimization,
            and server automation. Committed to delivering quality and
            innovation, I bring a versatile technical skill set to support
            impactful projects in organizations focused on continuous
            improvement and growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="flex-1">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <Briefcase className="w-12 h-12 text-primary" />
                <h4 className="text-xl font-semibold">Experience</h4>
                <p className="text-3xl font-bold text-primary">2+ years</p>
                <p className="text-muted-foreground text-center">
                  Fullstack Development
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <GraduationCap className="w-12 h-12 text-primary" />
                <h4 className="text-xl font-semibold">Education</h4>
                <p className="text-muted-foreground text-center font-medium">
                  B.Sc. Bachelors Degree in Business Information Technology
                </p>
                <p className="text-muted-foreground text-center">
                  ALX certified full stack developer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
