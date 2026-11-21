export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-stone-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Monkey See Studio. All rights reserved.</p>
        <p>Powered by Next.js + Vercel</p>
      </div>
    </footer>
  );
}
