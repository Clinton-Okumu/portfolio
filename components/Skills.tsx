import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Database,
    description: "Building APIs, services, and data-driven systems.",
    skills: ["Go", "Python", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Creating responsive, modern web applications.",
    skills: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React"],
  },
  {
    title: "AI-Assisted Development",
    icon: Sparkles,
    description: "Using AI tools to accelerate development, debugging, and system design.",
    skills: ["OpenCode", "T3 Code", "Supermaven"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Development tooling, automation, and engineering workflow.",
    skills: ["Git", "GitHub", "Linux", "Postman", "n8n"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Tech Stack</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Technologies and tools I use to design, build, and ship reliable software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card key={group.title} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Icon className="h-5 w-5 text-primary" />
                    {group.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
