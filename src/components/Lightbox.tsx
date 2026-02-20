'use client';

import Image from 'next/image';
import Watermark from './Watermark';

interface Photo {
  url: string;
  title: string;
}

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-3xl hover:text-stone-300 transition-colors"
        onClick={onClose}
      >
        ×
      </button>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-full max-h-[80vh] max-w-[90vw]">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
          <Watermark />
        </div>
        <p className="mt-4 text-stone-300 font-serif text-lg">{photo.title}</p>
      </div>
    </div>
  );
}
