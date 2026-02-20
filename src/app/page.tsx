import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="pt-20 relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
          alt="Featured Analog Photo"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">
            Işığı Yakalamak
          </h1>
          <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            35mm&apos;den orta formata, analogun ruhunu ve dijitalin netliğini birleştiren bir görsel yolculuk.
          </p>
          <div className="mt-10">
            <Link 
              href="/portfolio" 
              className="bg-white text-stone-900 px-8 py-3 rounded-none font-medium hover:bg-stone-200 transition-colors inline-block"
            >
              Portfolyoyu Gez
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="font-serif text-3xl mb-8">Neden Analog?</h2>
        <p className="text-stone-600 leading-relaxed text-lg mb-12">
          Beklemek, düşünmek ve her kareye hak ettiği değeri vermek. Analog fotoğrafçılık benim için sadece bir teknik değil, dünyayı görme biçimi. 120 formatın derinliği ve 35mm&apos;nin hikaye anlatıcılığı arasında gidip gelen bir serüven.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm uppercase tracking-widest text-stone-500">
          <div>
            <span className="block text-3xl font-serif text-stone-800 mb-2">35mm</span>
            Gündelik Anlar
          </div>
          <div>
            <span className="block text-3xl font-serif text-stone-800 mb-2">120</span>
            Orta Format Derinliği
          </div>
          <div>
            <span className="block text-3xl font-serif text-stone-800 mb-2">Digital</span>
            Modern Vizyon
          </div>
        </div>
      </section>
    </div>
  );
}
