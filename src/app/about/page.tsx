import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[3/4] border-[12px] border-white shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
            alt="Otoportre"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div>
          <h1 className="font-serif text-4xl mb-6">Merhaba, Ben Bir Fotoğraf Tutkunu.</h1>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Yıllardır ışığın peşinde koşan, bazen bir sokak köşesinde bazen de ıssız bir dağ başında o doğru anı bekleyen biriyim.
            </p>
            <p>
              Özellikle mekanik fotoğraf makinelerinin sesini, filmin kendine has dokusunu ve banyodan sonraki o ilk heyecanı seviyorum. Benim için fotoğraf, sadece bir görüntüyü kaydetmek değil, o andaki hissi dondurmaktır.
            </p>
            <p>
              Bu site, hem dijital hem de analog çalışmalarımı sergilediğim, ara sıra da fotoğraf üzerine düşüncelerimi paylaştığım dijital karanlık odam.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-stone-100 border border-stone-200">
            <h2 className="font-serif text-xl mb-4 text-stone-800">Üretimime Destek Olun</h2>
            <p className="text-sm text-stone-500 mb-6 italic">
              Yeni filmler almak ve banyo masraflarını karşılamak için küçük bir katkıda bulunabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://ko-fi.com" 
                target="_blank" 
                className="bg-stone-800 text-white px-6 py-2 text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                Ko-fi üzerinden destekle
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                className="bg-white border border-stone-300 text-stone-800 px-6 py-2 text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                Bültene Abone Ol
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
