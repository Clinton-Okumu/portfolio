import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Smartphone } from "lucide-react";

const frontendSkills = [
  { name: "NextJS", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Experienced" },
];

const backendSkills = [
  { name: "Python", level: "Experienced" },
  { name: "Golang", level: "Experienced" },
  { name: "MySQL", level: "Experienced" },
  { name: "PostgreSQL", level: "Experienced" },
];

const mobileSkills = [
  { name: "React Native", level: "Intermediate" },
  { name: "Expo", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-4xl font-bold">Explore My</h2>
          <h3 className="text-3xl text-primary">Skills</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Code className="w-6 h-6 text-primary" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm ${skill.level === "Experienced" ? "text-primary" : "text-muted-foreground"}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Database className="w-6 h-6 text-primary" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm ${skill.level === "Experienced" ? "text-primary" : "text-muted-foreground"}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Smartphone className="w-6 h-6 text-primary" />
                Mobile Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mobileSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`text-sm ${skill.level === "Experienced" ? "text-primary" : "text-muted-foreground"}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
