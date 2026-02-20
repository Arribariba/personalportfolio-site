export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-stone-800">Analog Göz</h3>
            <p className="text-stone-600 text-sm">
              Analog ve dijital fotoğrafçılık yolculuğumu paylaştığım kişisel alanım.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Destekle</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  Ko-fi
                </a>
              </li>
              <li>
                <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  Substack
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  Iyzico / Iyrs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 mb-4">Telif Hakkı</h3>
            <p className="text-xs text-stone-500 italic">
              © {currentYear} Tüm hakları saklıdır. Fotoğrafların izinsiz kullanımı yasaktır. 
              Tüm görseller filigranlıdır ve telif hakkı koruması altındadır.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-200 text-center text-xs text-stone-400">
          Built with passion for film photography.
        </div>
      </div>
    </footer>
  );
}
