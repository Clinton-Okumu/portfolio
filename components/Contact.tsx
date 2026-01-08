import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-2 mb-16">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <h3 className="text-3xl text-primary">Contact Me</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Mail className="w-6 h-6 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:okumuclint@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                okumuclint@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Linkedin className="w-6 h-6 text-primary" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn Profile
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

