'use client';

import { useState } from 'react';
import Image from 'next/image';
import Watermark from './Watermark';
import Lightbox from './Lightbox';

interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {photos.map((photo) => (
        <div 
          key={photo.id} 
          className="relative aspect-square overflow-hidden bg-stone-200 group cursor-pointer border-8 border-white photo-album-card"
          onClick={() => setSelectedPhoto(photo)}
        >
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <Watermark />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-serif text-sm">{photo.title}</span>
          </div>
        </div>
      ))}

      {selectedPhoto && (
        <Lightbox 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
}
