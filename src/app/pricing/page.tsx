import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const TIERS = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Ideal for local businesses wanting quick copy and photo updates.',
    features: ['Up to 20 AI edits per month', 'Live Vercel preview branch', 'Instant checkpoint rollbacks'],
    featured: false,
  },
  {
    name: 'Growth Studio',
    price: '$199',
    period: '/month',
    description: 'Full conversational webmaster for growing brands and campaigns.',
    features: ['Up to 100 AI edits per month', 'Click-to-target visual picker', 'Priority support & custom domain'],
    featured: true,
  },
  {
    name: 'Agency Partner',
    price: '$399',
    period: '/month',
    description: 'Unlimited updates with developer Pull Request approval workflow.',
    features: ['Unlimited AI edits', 'PR review & approval workflow', 'Dedicated account manager'],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Simple, transparent plans
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Pick the right webmaster plan for your site
          </h1>
          <p className="mt-4 text-base text-stone-600">
            Every plan includes a safe preview branch, numbered edit checkpoints, and instant rollbacks.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-8 flex flex-col justify-between ${
                tier.featured
                  ? 'border-amber-500 bg-stone-900 text-white shadow-lg'
                  : 'border-stone-200 bg-white text-stone-900'
              }`}
            >
              <div>
                <h2 className="text-lg font-bold">{tier.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className={tier.featured ? 'text-stone-400 text-sm' : 'text-stone-500 text-sm'}>
                    {tier.period}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${tier.featured ? 'text-stone-300' : 'text-stone-600'}`}>
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#choose"
                className={`mt-8 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${
                  tier.featured
                    ? 'bg-amber-500 text-white hover:bg-amber-400'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
