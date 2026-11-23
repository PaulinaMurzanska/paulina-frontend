import data from "@/data/data.json";

const { profile } = data;

export function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-[var(--text-muted)] text-sm border-t border-[var(--border-soft)]">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.headline}
      </p>
      <p className="mt-1">Built with Next.js and TypeScript, using an AI-augmented workflow.</p>
    </footer>
  );
}
