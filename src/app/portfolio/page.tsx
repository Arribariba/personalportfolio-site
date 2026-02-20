'use client';

import { useState } from 'react';
import PhotoGallery from '@/components/PhotoGallery';

const ALL_PHOTOS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1552168324-d612d7794993?q=80&w=2000&auto=format&fit=crop', title: 'Kadıköy Sahil', category: '35mm' },
  { id: '2', url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=2000&auto=format&fit=crop', title: 'Penceredeki Kedi', category: '120mm' },
  { id: '3', url: 'https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?q=80&w=2000&auto=format&fit=crop', title: 'Şehir Işıkları', category: 'Digital' },
  { id: '4', url: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2000&auto=format&fit=crop', title: 'Sokak Lambası', category: '35mm' },
  { id: '5', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop', title: 'Paris Anıları', category: '120mm' },
  { id: '6', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop', title: 'Sisli Orman', category: 'Digital' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' 
    ? ALL_PHOTOS 
    : ALL_PHOTOS.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-4xl mb-4">Portfolyo</h1>
        <div className="flex justify-center space-x-4 text-sm font-medium uppercase tracking-widest text-stone-500">
          <button 
            onClick={() => setFilter('All')}
            className={`${filter === 'All' ? 'text-stone-900 border-b border-stone-900' : 'hover:text-stone-700'}`}
          >
            Hepsi
          </button>
          <button 
            onClick={() => setFilter('35mm')}
            className={`${filter === '35mm' ? 'text-stone-900 border-b border-stone-900' : 'hover:text-stone-700'}`}
          >
            35mm
          </button>
          <button 
            onClick={() => setFilter('120mm')}
            className={`${filter === '120mm' ? 'text-stone-900 border-b border-stone-900' : 'hover:text-stone-700'}`}
          >
            120 (6x6)
          </button>
          <button 
            onClick={() => setFilter('Digital')}
            className={`${filter === 'Digital' ? 'text-stone-900 border-b border-stone-900' : 'hover:text-stone-700'}`}
          >
            Dijital
          </button>
        </div>
      </header>

      <PhotoGallery photos={filteredPhotos} />
    </div>
  );
}
