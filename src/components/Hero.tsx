export function Hero() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center rounded-full bg-amber-950 px-3 py-1 text-xs font-semibold text-amber-200">
            Ethical, hand-raised avian companions
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-6xl">
            Bring home a vibrant pet toucan of your own.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-400">
            Intelligent, curious, and full of tropical personality. We match caring homes with
            healthy, socialized toucans and guide you through aviary setup, daily fruit nutrition,
            and lifelong care.
          </p>
          <div id="get-started" className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#features"
              className="rounded-xl bg-stone-50 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
            >
              Explore
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-stone-700 bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-200 transition hover:bg-stone-800"
            >
              Adoption Info
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-amber-900 bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 p-6 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-stone-800">
              <img
                src="/uploads/0r2jf-1-toucan.jpg"
                alt="Vibrant toucan perched on a branch"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-stone-800 bg-stone-900 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Available for Adoption
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <p className="mt-4 text-2xl font-bold text-stone-50">
                Meet Pico — Toco Toucan, 1 Year Old
              </p>
              <p className="mt-2 text-sm text-stone-400">
                Playful, hand-fed, and thriving on fresh papaya, blueberries, and enrichment
                perches. Ready for a spacious indoor aviary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
