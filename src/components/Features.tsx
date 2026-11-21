const FEATURES = [
  {
    title: 'Spacious Aviary Setup',
    description:
      'Toucans love to hop and glide. We help you plan a safe, roomy enclosure with natural perches and bright indirect light.',
    badge: '01',
  },
  {
    title: 'Fresh Fruit-First Diet',
    description:
      'Low-iron pellets paired daily with papaya, blueberries, melon, and mango keep their plumage glossy and energy high.',
    badge: '02',
  },
  {
    title: 'Lifelong Vet & Care Support',
    description:
      'Every adoption includes avian health records, enrichment tips, and ongoing guidance from our sanctuary specialists.',
    badge: '03',
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-stone-800 bg-stone-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-100">
            Everything you need to welcome a toucan
          </h2>
          <p className="mt-3 text-base text-stone-400">
            Responsible adoption starts with preparation, proper nutrition, and a joyful environment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.badge}
              className="rounded-2xl border border-stone-800 bg-stone-900 p-6 transition hover:border-amber-400"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-xs font-bold text-amber-400">
                {item.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          id="pricing"
          className="mt-16 rounded-3xl border border-stone-800 bg-stone-900 p-8 text-white md:flex md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold">Ready to adopt your feathered companion?</h3>
            <p className="mt-2 text-sm text-stone-300">
              Every adoption includes a complete avian wellness check, starter low-iron diet kit, and lifetime care support.
            </p>
          </div>
          <a
            href="#showcase"
            className="mt-6 inline-block rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400 md:mt-0"
          >
            Meet Pico
          </a>
        </div>
      </div>
    </section>
  );
}
