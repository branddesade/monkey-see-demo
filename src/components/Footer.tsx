export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-800 bg-stone-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-stone-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Monkey Monkey Toucan Sanctuary. All rights reserved.</p>
        <p>Ethical Avian Adoption & Care</p>
      </div>
    </footer>
  );
}
