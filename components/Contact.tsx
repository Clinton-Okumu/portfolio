"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "okumuclint@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind, an opportunity, or just want to connect?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <a
                href={`mailto:${email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all block"
              >
                {email}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="w-full text-xs gap-1.5 h-8"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Email
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Linkedin className="w-5 h-5 text-primary" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <p className="text-sm text-muted-foreground">
                Let's connect professionally
              </p>
              <a
                href="https://www.linkedin.com/in/clinton-okumu-508052281/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="sm" className="w-full text-xs h-8">
                  View Profile
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Github className="w-5 h-5 text-primary" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <p className="text-sm text-muted-foreground">
                Explore open-source repositories
              </p>
              <a
                href="https://github.com/Clinton-Okumu"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="sm" className="w-full text-xs h-8">
                  Follow on GitHub
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
