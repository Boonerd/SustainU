import { LeafIcon } from "./icons/SustainIcons";

export default function Footer() {
  return (
    <footer className="bg-deepgreen dark:bg-midgreen/20 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <LeafIcon className="w-12 h-12 text-white" />
          <span className="text-4xl font-bold text-white">SustainU</span>
        </div>
        <p className="text-white/90 text-lg">
          Building a greener future, together. Made with hope in 2025.
        </p>
        <p className="text-white/70 mt-6">© 2025 SustainU — All rights reserved.</p>
      </div>
    </footer>
  );
}