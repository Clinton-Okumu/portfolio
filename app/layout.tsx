import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinton Okumu | Full Stack & Backend Software Engineer",
  description:
    "Portfolio of Clinton Okumu — Backend-focused Software Engineer specializing in Go, PostgreSQL, Python, and Next.js.",
  keywords: [
    "Clinton Okumu",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Go",
    "Golang",
    "PostgreSQL",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Clinton Okumu" }],
  openGraph: {
    title: "Clinton Okumu | Full Stack & Backend Software Engineer",
    description:
      "Backend-focused Software Engineer building APIs, scalable systems, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
