import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-white/60 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Logo"
    width={100}
    height={100}
    className="h-10 w-auto"
    priority
  />
</Link>
          </div>
          <Link href="/portfolio">Projeler</Link>
          </div>
          {/* Mobile menu button could go here if needed */}
        </div>
      </div>
    </nav>
  );
}
