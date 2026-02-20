import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold text-stone-800 tracking-tight">
              Analog Göz
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8">
            <Link href="/portfolio" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">
              Portfolyo
            </Link>
            <Link href="/blog" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">
              Hakkımda
            </Link>
          </div>
          {/* Mobile menu button could go here if needed */}
        </div>
      </div>
    </nav>
  );
}
