import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight2, Sms, MessageText1, TickCircle } from "iconsax-reactjs";

const EMAIL = "hello@ultradbg.com";
type View = "choice" | "form" | "success";

export function EmailContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [view, setView] = useState<View>("choice");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successName, setSuccessName] = useState("");
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  function reset() {
    setView("choice");
    setErrors({});
    setSuccessName("");
  }

  function close() {
    onOpenChange(false);
    setTimeout(() => reset(), 200);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const err: Record<string, string> = {};
    if (name.length < 2) err.name = "Add your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Valid email required";
    if (message.length < 10) err.message = "A bit more detail helps";
    setErrors(err);
    if (Object.keys(err).length > 0) return;
    setSuccessName(name.split(" ")[0] ?? "");
    setView("success");
  }

  function openMailApp() {
    window.location.href = `mailto:${EMAIL}`;
    close();
  }

  if (!open || !mounted) return null;

  const overlay = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={close}
        className="absolute inset-0 bg-[#161618]/30 backdrop-blur-[2px]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-dialog-title"
        className="relative max-h-[92dvh] w-full max-w-[420px] overflow-hidden rounded-[24px] bg-elevated shadow-[0_0_0_1px_rgba(22,22,24,0.07),0_20px_48px_-16px_rgba(22,22,24,0.18),0_8px_16px_-8px_rgba(22,22,24,0.06)] dark:shadow-[0_0_0_1px_rgba(243,241,235,0.08),0_20px_48px_-16px_rgba(0,0,0,0.5)]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-surface text-subtle ring-1 ring-border transition hover:text-fg hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span aria-hidden className="text-[14px] leading-none">×</span>
        </button>

        <div className="max-h-[92dvh] overflow-y-auto">
          {view === "choice" && (
            <div className="px-6 pb-6 pt-7 sm:px-7 sm:pt-7">
              <div className="pr-8">
                <h2 id="email-dialog-title" className="font-display text-[1.35rem] font-[500] leading-none tracking-tight text-fg">
                  Get in touch
                </h2>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                  How do you want to send it?
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={openMailApp}
                  className="featured-link t-press group w-full !rounded-2xl !px-3 !py-3 text-left"
                >
                  <span className="icon-box" aria-hidden="true">
                    <Sms variant="Linear" size={19} color="currentColor" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[0.95rem] font-medium leading-tight">Open mail app</span>
                    <span className="mt-0.5 block text-sm text-muted">Outlook, Gmail, Apple Mail</span>
                  </span>
                  <ArrowRight2 className="arrow shrink-0" variant="Linear" size={18} color="currentColor" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setView("form")}
                  className="featured-link t-press group w-full !rounded-2xl !px-3 !py-3 text-left"
                >
                  <span className="icon-box" aria-hidden="true">
                    <MessageText1 variant="Linear" size={19} color="currentColor" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[0.95rem] font-medium leading-tight">Contact form</span>
                    <span className="mt-0.5 block text-sm text-muted">Write here — stays on site</span>
                  </span>
                  <ArrowRight2 className="arrow shrink-0" variant="Linear" size={18} color="currentColor" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {view === "form" && (
            <div className="px-6 pb-6 pt-6 sm:px-7">
              <button
                type="button"
                onClick={() => setView("choice")}
                className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-subtle transition hover:text-fg"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-surface ring-1 ring-border">
                  <ArrowRight2 variant="Linear" size={12} color="currentColor" className="rotate-180" aria-hidden="true" />
                </span>
                Back
              </button>

              <h2 id="email-dialog-title" className="pr-8 font-display text-[1.22rem] font-[500] leading-tight tracking-tight text-fg">
                Send a message
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">I&apos;ll reply as soon as I can.</p>

              <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3.5">
                <div className="space-y-1.5">
                  <label htmlFor="cf-name" className="text-xs font-medium tracking-wide text-fg">
                    Name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    defaultValue=""
                    className={`w-full rounded-xl border bg-surface px-3.5 py-2.5 text-[0.92rem] text-fg placeholder:text-subtle/60 outline-none transition focus:border-fg/15 focus:bg-elevated focus:ring-2 focus:ring-fg/[0.06] ${errors.name ? "border-red-400/50" : "border-border"}`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-email" className="text-xs font-medium tracking-wide text-fg">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    defaultValue=""
                    className={`w-full rounded-xl border bg-surface px-3.5 py-2.5 text-[0.92rem] text-fg placeholder:text-subtle/60 outline-none transition focus:border-fg/15 focus:bg-elevated focus:ring-2 focus:ring-fg/[0.06] ${errors.email ? "border-red-400/50" : "border-border"}`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-message" className="text-xs font-medium tracking-wide text-fg">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    placeholder="Hi, I wanted to ask about…"
                    rows={4}
                    defaultValue=""
                    className={`min-h-[108px] w-full resize-none rounded-xl border bg-surface px-3.5 py-3 text-[0.92rem] leading-relaxed text-fg placeholder:text-subtle/60 outline-none transition focus:border-fg/15 focus:bg-elevated focus:ring-2 focus:ring-fg/[0.06] ${errors.message ? "border-red-400/50" : "border-border"}`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setView("choice")}
                    className="flex-1 rounded-full bg-surface py-2.5 text-sm font-medium text-fg ring-1 ring-border transition hover:bg-bg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-fg py-2.5 text-sm font-medium text-bg transition hover:bg-fg/90 active:scale-[0.98]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}

          {view === "success" && (
            <div className="px-6 pb-7 pt-10 text-center sm:px-8">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-fg text-bg">
                <TickCircle size={22} variant="Bold" color="currentColor" />
              </div>
              <h2 id="email-dialog-title" className="mt-4 font-display text-[1.3rem] font-[500] leading-tight text-fg">
                Sent
              </h2>
              <p className="mx-auto mt-2 max-w-[28ch] text-sm leading-relaxed text-muted">
                Thanks{successName ? `, ${successName}` : ""} — I&apos;ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-6 w-full rounded-full bg-fg py-2.5 text-sm font-medium text-bg transition hover:bg-fg/90 active:scale-[0.98]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
