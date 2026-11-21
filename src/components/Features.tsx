const FEATURES = [
  {
    title: 'Instant Visual Updates',
    description:
      'Describe tweaks in plain language and preview them live before anything touches production.',
    badge: '01',
  },
  {
    title: 'Checkpoint Rollbacks',
    description:
      'Every change is saved as Edit 1, Edit 2, Edit 3 so you can experiment freely and rewind anytime.',
    badge: '02',
  },
  {
    title: 'Built for Speed',
    description:
      'Powered by modern Next.js and Tailwind CSS for crisp performance on mobile and desktop.',
    badge: '03',
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-stone-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Why teams love working with us
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Simple foundations, clear typography, and effortless post-launch edits.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.badge}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:border-amber-400"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-bold text-amber-700">
                {item.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          id="pricing"
          className="mt-16 rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white md:flex md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold">Ready to launch your next update?</h3>
            <p className="mt-2 text-sm text-stone-300">
              Start chatting with your portal assistant to customize this page in seconds.
            </p>
          </div>
          <a
            href="#showcase"
            className="mt-6 inline-block rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 md:mt-0"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
