import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-800 bg-stone-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white shadow-sm">
            M
          </span>
          <span className="text-xl font-extrabold tracking-tight text-stone-50">
            Monkey Monkey
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
          <a href="#features" className="transition hover:text-stone-200">
            Features
          </a>
          <a href="#showcase" className="transition hover:text-stone-200">
            Showcase
          </a>
          <a href="#pricing" className="transition hover:text-stone-200">
            Pricing
          </a>
        </nav>

        <a
          href="#get-started"
          className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
