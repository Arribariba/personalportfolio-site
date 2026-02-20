import Link from 'next/link';

const POSTS = [
  {
    slug: 'analog-fotografciliga-baslangic',
    title: 'Analog Fotoğrafçılığa Başlarken Bilmeniz Gerekenler',
    date: '15 Mart 2024',
    excerpt: 'Dijital dünyadan kopup gümüş halojenürlerin büyülü dünyasına adım atmak isteyenler için küçük bir rehber.'
  },
  {
    slug: 'orta-formatin-buyusu',
    title: '120 Format: Neden Orta Format?',
    date: '2 Şubat 2024',
    excerpt: '6x6 kare formatın kompozisyona etkisi ve o muazzam detay seviyesi üzerine bir inceleme.'
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="font-serif text-4xl mb-12 text-center">Notlar ve Hikayeler</h1>
      <div className="space-y-16">
        {POSTS.map((post) => (
          <article key={post.slug} className="group cursor-pointer">
            <Link href={`/blog/${post.slug}`}>
              <span className="text-stone-400 text-sm font-medium uppercase tracking-widest">{post.date}</span>
              <h2 className="font-serif text-2xl mt-2 mb-4 group-hover:text-stone-600 transition-colors">{post.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-sm font-bold border-b-2 border-stone-200 group-hover:border-stone-800 transition-all">Devamını Oku</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
