---
title: Reading binaries like proofs
date: 2026-03-18
excerpt: Reverse engineering is closer to mathematics than people admit — you start from axioms the machine actually obeys.
---

I came to reverse engineering from proofs, not from CTFs. That order still shapes how I look at a binary.

A proof asks: what must be true if these axioms hold? A disassembly asks the same question with worse handwriting. The axioms are the architecture, the calling convention, the ABI. Everything else is a claim the program is making, and you get to check it.

## Start from what cannot lie

Documentation lies. Comments lie. Marketing lies. The instruction stream is the only witness that has to show up in court.

When I open a sample in IDA, I am not looking for a narrative. I am looking for invariants:

- What does this function *always* return?
- Which registers are live across the call?
- Where does control have to go, no matter how the flags fall?

Those questions are closer to “prove this loop terminates” than to “guess the password.”

## Notation is a superpower

I keep a scratch buffer of renamed functions and recovered types the way I keep a scratch proof: name the objects, then see if the names still make sense three pages later. If a name starts to fight the code, the name is wrong.

Nim, C, and assembly all reward this habit. The language changes. The discipline does not.

## Why this belongs next to AI

Applied mathematics and AI are full of systems that are too large to hold in your head. Reverse engineering is practice at not panicking when that happens. You pick a boundary, you write down what crosses it, and you refuse to invent the rest.

That is the whole craft, whether the artifact is a neural net, a kernel driver, or a 40-line function that someone compiled with the wrong flags.
