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

const lowLevel = ["C", "C++", "Rust", "Nim"];
const highLevel = ["JavaScript", "Python", "Lua", "C#", "Java"];
const reversing = ["IDA Pro", "Assembly", "Debugging", "Binary analysis"];

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-sm bg-fg/5 px-2 py-1 font-mono text-[0.72rem] tracking-wide text-fg">
      {children}
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
                  <Chip key={lang}>{lang}</Chip>
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
                  <Chip key={lang}>{lang}</Chip>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Strong command of object-oriented design, data structures, and the
            logic that holds them together.
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
            {reversing.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
