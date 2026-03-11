import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--neutral-background)] font-sans">
      <h1 className="text-3xl font-bold text-[var(--neutral-primary-text)]" style={{ fontFamily: "var(--font-display)" }}>
        Aquarium
      </h1>
      <p className="text-[var(--neutral-secondary-text)]">Interactive 3D fish tank — localhost benchmark</p>
      <Link
        href="/s1"
        className="rounded-full bg-[var(--primary-1)] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Open tank (S1)
      </Link>
    </div>
  );
}
