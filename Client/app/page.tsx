"use client";

import Link from "next/link";
import {
  ArrowRight,
  FolderGit2,
  MessageSquareCode,
  Sparkles,
} from "lucide-react";

import { GITChatIcon } from "@/components/icons/gitchat-icon";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { BrandMark } from "@/components/layout/app-shell";
import { buttonVariants } from "@/components/ui/button";
import {getGithubLoginUrl } from "@/lib/api";


export default function LandingPage() {
  const githubLoginUrl = getGithubLoginUrl();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <BrandMark className="h-8 w-8" />

            <span className="text-lg font-semibold tracking-tight">
              GITChat
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-foreground"
            >
              How it works
            </a>

            <a
              href="#technology"
              className="transition-colors hover:text-foreground"
            >
              Technology
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            <a
              href={githubLoginUrl}
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />

            AI-powered GitHub repository analysis
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Understand your
            <span className="block text-primary">
              codebase with AI.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Connect your GitHub repository and chat with your codebase.
            GITChat helps you understand, explore, and navigate complex
            projects using AI.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={githubLoginUrl}
              className={buttonVariants({
                size: "lg",
              })}
            >
              <GITChatIcon className="mr-2 h-4 w-4" />

              Connect GitHub

              <ArrowRight className="ml-1 h-4 w-4" />
            </a>

            <a
              href="#how-it-works"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Product Preview */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-primary/10 blur-3xl" />

          <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl">
            {/* Browser bar */}
            <div className="flex h-12 items-center gap-2 border-b px-4">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <div className="h-3 w-3 rounded-full bg-green-400/70" />

              <div className="ml-4 flex-1 rounded-md bg-muted px-4 py-1.5 text-xs text-muted-foreground">
                GITChat.local/dashboard
              </div>
            </div>

            {/* Dashboard */}
            <div className="grid min-h-[470px] md:grid-cols-[230px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r bg-muted/20 p-4 md:block">
                <div className="flex items-center gap-2">
                  <BrandMark className="h-7 w-7" />

                  <span className="text-sm font-semibold">
                    GITChat
                  </span>
                </div>

                <div className="mt-8 space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-sm">
                    <MessageSquareCode className="h-4 w-4" />
                    AI Chat
                  </div>

                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground">
                    <FolderGit2 className="h-4 w-4" />
                    Repositories
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Repository
                  </p>

                  <div className="rounded-lg border bg-background p-3">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="h-4 w-4" />

                      <span className="text-xs font-medium">
                        my-project
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-muted-foreground">
                      main branch
                    </p>
                  </div>
                </div>
              </aside>

              {/* Chat */}
              <div className="flex flex-col">
                {/* Header */}
                <div className="border-b px-5 py-4">
                  <p className="text-sm font-medium">
                    Repository Assistant
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Ask anything about your codebase
                  </p>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-6 p-6">
                  {/* User */}
                  <div className="ml-auto max-w-md rounded-2xl rounded-tr-md bg-primary/10 p-4">
                    <p className="text-sm leading-6">
                      How does authentication work in this project?
                    </p>
                  </div>

                  {/* AI */}
                  <div className="flex max-w-xl gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MessageSquareCode className="h-4 w-4 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        Authentication is handled through GitHub OAuth.
                        The application stores the authenticated user's
                        GitHub identity and uses Spring Security to
                        protect API routes.
                      </p>

                      <div className="mt-4 rounded-lg border bg-muted/40 p-4 font-mono text-xs leading-6 text-muted-foreground">
                        <span className="text-primary">
                          SecurityConfig
                        </span>
                        <br />
                        .oauth2Login()
                        <br />
                        .authorizeHttpRequests(...)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="border-t p-4">
                  <div className="flex items-center gap-3 rounded-xl border bg-muted/30 px-4 py-3">
                    <MessageSquareCode className="h-4 w-4 text-muted-foreground" />

                    <span className="flex-1 text-sm text-muted-foreground">
                      Ask about your repository...
                    </span>

                    <div className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                      Ask
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Features"
            title="Your repository, understood."
            description="Turn your GitHub repository into an interactive knowledge base."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Feature
              icon={MessageSquareCode}
              title="AI Repository Chat"
              description="Ask questions about your codebase and receive contextual answers."
            />

            <Feature
              icon={FolderGit2}
              title="GitHub Integration"
              description="Connect repositories directly through GitHub OAuth."
            />

            <Feature
              icon={Sparkles}
              title="Semantic Understanding"
              description="Use AI-powered retrieval to find relevant code and project context."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How it works"
            title="From repository to answers."
            description="A simple workflow for exploring unfamiliar codebases."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            <Step
              number="01"
              title="Connect GitHub"
              description="Authenticate using your GitHub account."
            />

            <Step
              number="02"
              title="Choose repository"
              description="Select the repository you want GITChat to understand."
            />

            <Step
              number="03"
              title="Index code"
              description="Repository content becomes searchable AI context."
            />

            <Step
              number="04"
              title="Start chatting"
              description="Ask questions about your code using natural language."
            />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        id="technology"
        className="border-t py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Technology"
            title="Built for modern development."
            description="GITChat combines your existing Java backend with AI-powered repository understanding."
          />

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              "Java 21+",
              "Spring Boot",
              "Spring AI",
              "PostgreSQL",
              "pgvector",
              "OpenAI",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "GitHub OAuth",
            ].map((item) => (
              <span
                key={item}
                className="rounded-xl border bg-muted/30 px-5 py-3 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-muted/20 px-6 py-20 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-primary" />

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore your codebase with GITChat.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Connect GitHub and start asking questions about your
            repository.
          </p>

          <a
            href={githubLoginUrl}
            className={buttonVariants({
              size: "lg",
              className: "mt-8",
            })}
          >
            <GITChatIcon className="mr-2 h-4 w-4" />
            Connect GitHub
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BrandMark className="h-6 w-6" />
            GITChat
          </div>

          <p className="text-xs text-muted-foreground">
            AI-powered repository understanding.
          </p>

          <ModeToggle />
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <span className="font-mono text-sm text-primary">
        {number}
      </span>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}






