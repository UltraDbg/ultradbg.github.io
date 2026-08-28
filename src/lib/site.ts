export const site = {
  name: "Ultra Dbg",
  handle: "@ultradbg",
  bio: "First-year Applied Mathematics & AI engineering student · Reverse engineer · Builder",
} as const;

export const featuredLinks = [
  {
    to: "/education",
    label: "Education",
    hint: "Where the work started",
    icon: "education",
  },
  {
    to: "/experience",
    label: "Experience",
    hint: "What I’ve shipped",
    icon: "experience",
  },
  {
    to: "/skills",
    label: "Skills",
    hint: "How I think",
    icon: "skills",
  },
  {
    to: "/projects",
    label: "Projects",
    hint: "Things I’m building",
    icon: "projects",
  },
  {
    to: "/blog",
    label: "Blog",
    hint: "Notes from the bench",
    icon: "blog",
  },
] as const;

export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/ultradbg",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/ultradbg",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ultradbg",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@ultradbg.dev",
  },
] as const;

export const education = [
  {
    period: "2026–",
    redacted: "Engineering School",
    description: "Applied Mathematics & AI. Expected graduation 2029.",
    icon: "engineering",
    current: true,
  },
  {
    period: "2024–2026",
    redacted: "University",
    description: "Undergraduate Mathematics & Physics.",
    icon: "university",
  },
  {
    period: "2021–2024",
    redacted: "High School",
    description: "Graduated with specialties in mathematics & physics.",
    icon: "high-school",
  },
] as const;

export const experience = [
  {
    period: "2025",
    title: "1-month internship",
    redacted: true,
    description:
      "Rewrote a manual spreadsheet pipeline into a graphical application using Microsoft Power Apps, implementing full CRUD operations while strictly following the company’s security practices.",
  },
] as const;

export const projects = [
  {
    slug: "nimkit",
    title: "nimkit",
    description:
      "A Cargo-like project lifecycle tool for Nim — init, build, test, and ship without the usual ceremony.",
    tags: ["Nim", "CLI", "Tooling"],
    href: "https://github.com/ultradbg/nimkit",
  },
  {
    slug: "nimvirt",
    title: "nimvirt",
    description:
      "An experiment in code virtualization written in Nim — protect, obfuscate, and study program semantics at the VM layer.",
    tags: ["Nim", "Virtualization", "Reverse engineering"],
    href: "https://github.com/ultradbg/nimvirt",
  },
] as const;
