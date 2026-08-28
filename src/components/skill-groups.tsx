import { Code1, Cpu, Hierarchy, LampOn, ProgrammingArrows } from "iconsax-reactjs";
import { Reveal, RevealOnScroll } from "@/components/reveal";

const mindset = [
  {
    title: "Curiosity",
    body: "I follow questions into the weeds until the mechanism is obvious.",
  },
  {
    title: "Decomposition",
    body: "Complex systems become small, honest pieces I can actually hold.",
  },
  {
    title: "Synthesis",
    body: "Those pieces get reconnected into something I can use or explain.",
  },
  {
    title: "Self-directed",
    body: "I learn without waiting for a syllabus — the map is mine to draw.",
  },
];

const lowLevel = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { name: "Nim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nim/nim-original.svg" },
];
const highLevel = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Lua", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
];
const reversingTools = [
  { name: "IDA Pro", icon: "/ida.png" },
  { name: "Ghidra", icon: "/ghidra.png" },
  { name: "x64dbg", icon: "/x64dbg.png" },
];
const reversingConcepts = [
  { name: "Assembly", icon: "/asm.png" },
  { name: "Binary analysis", icon: "/binary.png" },
];

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.72rem] tracking-wide text-fg">
      {children}
    </span>
  );
}

function IconChip({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.72rem] tracking-wide text-fg">
      <img
        src={src}
        alt={alt}
        className="h-4 w-4 object-contain"
      />
      {alt}
    </span>
  );
}

export function SkillGroups() {
  return (
    <div className="flex flex-col gap-4">
      <Reveal delay={0.16}>
        <section className="card-surface p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-fg">
            <LampOn variant="Linear" size={18} color="currentColor" aria-hidden="true" />
            <h2 className="text-[0.95rem] font-medium">Engineering mindset</h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-muted">
            Tools are downstream of temperament. The work I care about starts with
            wanting to understand a system from the metal up.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {mindset.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <RevealOnScroll>
        <section className="card-surface p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-fg">
            <Cpu variant="Linear" size={18} color="currentColor" aria-hidden="true" />
            <h2 className="text-[0.95rem] font-medium">Computer science</h2>
          </div>
          <div className="grid gap-5">
            <div>
              <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-subtle uppercase">
                <Hierarchy variant="Linear" size={14} color="currentColor" />
                Low-level
              </p>
              <div className="flex flex-wrap gap-1.5">
                {lowLevel.map((lang) => (
                  <IconChip key={lang.name} src={lang.icon} alt={lang.name} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-subtle uppercase">
                <Code1 variant="Linear" size={14} color="currentColor" />
                High-level
              </p>
              <div className="flex flex-wrap gap-1.5">
                {highLevel.map((lang) => (
                  <IconChip key={lang.name} src={lang.icon} alt={lang.name} />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Object Oriented Design, Data Structures and Algorithms are my daily bread.
          </p>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.06}>
        <section className="card-surface p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-fg">
            <ProgrammingArrows variant="Linear" size={18} color="currentColor" aria-hidden="true" />
            <h2 className="text-[0.95rem] font-medium">Reverse engineering</h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-muted">
            I reverse things because I want the ground truth — not the brochure.
            Binaries, calling conventions, and the quiet places documentation
            never mentions.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {reversingTools.map((tool) => (
              <IconChip key={tool.name} src={tool.icon} alt={tool.name} />
            ))}
            {reversingConcepts.map((item) => (
              <IconChip key={item.name} src={item.icon} alt={item.name} />
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
