import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const PROJECTS = [
  { id: "shorts", label: "Short-form series" },
  { id: "podcast", label: "Podcast clips" },
  { id: "influencer", label: "Influencer cuts" },
  { id: "brand", label: "Brand film" },
] as const;

const TIMELINES = [
  { id: "asap", label: "ASAP" },
  { id: "month", label: "This month" },
  { id: "quarter", label: "This quarter" },
  { id: "flex", label: "Flexible" },
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short"),
  email: z.string().trim().email("Need a real email"),
  company: z.string().trim().optional(),
  project: z.enum(["shorts", "podcast", "influencer", "brand"]),
  timeline: z.enum(["asap", "month", "quarter", "flex"]),
  message: z.string().trim().min(20, "Give me a little more to go on"),
});

type FormState = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  project: "shorts",
  timeline: "month",
  message: "",
};

function Chip({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-full px-4 text-sm transition-[background-color,color,border-color] duration-150",
        selected
          ? "bg-primary text-primary-fg"
          : "border border-line text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}

export function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof FormState]) {
          next[key as keyof FormState] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    try {
      const prev = JSON.parse(localStorage.getItem("bravado-inquiries") ?? "[]") as unknown[];
      prev.unshift({ ...parsed.data, at: new Date().toISOString() });
      localStorage.setItem("bravado-inquiries", JSON.stringify(prev.slice(0, 20)));
    } catch {
      /* ignore */
    }
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
            Send the brief
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
            If you are a Bitcoiner, a podcaster, or an influencer who needs
            shorts that hold. Send the brief. I read everything. If it is a
            fit, you hear back within two days.
          </p>
          <p className="mt-8 text-sm text-muted">
            Prefer a public ping?{" "}
            <a
              href="https://x.com/abwoonpodcast"
              target="_blank"
              rel="noreferrer"
              className="text-fg underline-offset-4 hover:underline"
              data-cursor="Open"
            >
              @abwoonpodcast
            </a>
          </p>
        </div>

        <div className="md:col-span-7">
          {status === "sent" ? (
            <div className="flex min-h-80 flex-col justify-center rounded-xl border border-line bg-surface p-8">
              <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                Transmission received
              </p>
              <p className="mt-4 font-display text-4xl italic">I’ll read it.</p>
              <p className="mt-3 max-w-sm text-sm text-muted">
                If the brief is a match, you get a note within two days. If it
                isn’t, you still get a clean no.
              </p>
              <Button
                className="mt-8 w-fit"
                variant="outline"
                onClick={() => {
                  setValues(EMPTY);
                  setStatus("idle");
                }}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <Input
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@studio.com"
                  />
                </Field>
              </div>
              <Field label="Company" error={errors.company}>
                <Input
                  name="company"
                  autoComplete="organization"
                  value={values.company ?? ""}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Optional"
                />
              </Field>
              <div>
                <Label>Project</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {PROJECTS.map((p) => (
                    <Chip
                      key={p.id}
                      selected={values.project === p.id}
                      onClick={() => set("project", p.id)}
                    >
                      {p.label}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <Label>Timeline</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {TIMELINES.map((p) => (
                    <Chip
                      key={p.id}
                      selected={values.timeline === p.id}
                      onClick={() => set("timeline", p.id)}
                    >
                      {p.label}
                    </Chip>
                  ))}
                </div>
              </div>
              <Field label="The brief" error={errors.message}>
                <Textarea
                  name="message"
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="What are we cutting, who is it for, and what should they feel at second two?"
                />
              </Field>
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send to Dallas"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-rec">{error}</p> : null}
    </div>
  );
}
