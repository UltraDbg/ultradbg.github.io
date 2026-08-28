---
title: Notes from a code virtualization experiment
date: 2026-08-18
excerpt: nimvirt is a Nim VM for studying program semantics by running them somewhere slightly sideways.
---

**nimvirt** started as a question I could not shake: what does a program *mean* once you take away the ISA it was written for?

Code virtualization — compiling a routine into a custom bytecode and interpreting it — is usually sold as protection. I am more interested in it as an instrument. If I can lift a function into a VM I control, I can watch it. I can mutate the opcode map. I can ask what still has to be true for the program to be itself.

## A small VM is a honest teacher

The first version was deliberately tiny: a handful of arithmetic ops, a stack, a few jumps. That was enough to feel the classic tensions:

- **Dispatch cost.** A tight loop in native code becomes a story you tell one opcode at a time.
- **Opacity vs. debuggability.** The more you scramble the bytecode, the less you can learn from it — including you.
- **Semantics drift.** An off-by-one in the interpreter is a new program, not a slower copy of the old one.

Writing the interpreter in Nim kept the experiment close to the metal without drowning in boilerplate.

## Reversing your own VM

The useful part was reversing nimvirt with the same habits I use on foreign binaries. If I cannot reconstruct the opcode map from the dispatcher, the design is not just “protected” — it is unteachable. I want the opposite of magic. I want a system I can explain on a whiteboard, then hide later if I have a reason.

## What I am taking into school

Applied mathematics & AI will give me better language for invariants and approximation. Virtualization gave me a sandbox where those words have teeth. A VM is a model. The bytecode is data. The handler is a function. If the model is wrong, the program is wrong — no matter how confident the comments were.
