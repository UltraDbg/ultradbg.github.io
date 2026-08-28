---
title: Why Nim needed a Cargo
date: 2026-06-02
excerpt: nimkit is a project lifecycle tool for Nim. The point was not another wrapper — it was a calmer default path from init to ship.
---

Nim is a language I keep coming back to: compiles to C, reads like Python, and does not insult you when you want control. What it did not have, for me, was a boring way to start a project.

Cargo is boring in the best sense. `cargo new`, `cargo build`, `cargo test`. You stop thinking about the ritual and start thinking about the program. I wanted that feeling in Nim, so I started **nimkit**.

## The lifecycle, not the language

nimkit is not a compiler. It is the missing hallway between “I have an idea” and “this builds on someone else’s machine.”

- **init** — a project skeleton with opinions I actually use
- **build** — one command, one output, no scavenger hunt
- **test** — the same path, with a way to fail loudly
- **ship** — version, tag, and hand the artifact over

The interesting work was the boring work: consistent directories, predictable config, and error messages that point at the file you meant.

## What I refused to do

I refused to hide the compiler. If `nim c` is failing, wrapping it in poetry does not help. nimkit should make the happy path short and the unhappy path *legible*.

That is also how I think about reverse engineering tools. A good tool does not invent a universe. It makes the existing one easier to walk.

## Still a workshop piece

nimkit is the project I reach for when I start something new in Nim. It will grow the way a workbench grows: another drawer when I keep looking for a tool that is not there yet.
