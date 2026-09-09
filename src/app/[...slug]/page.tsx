import Link from 'next/link';
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = (slug?.join(' / ') || 'Dashboard').replace(/-/g,' ');
  return <main className="min-h-screen p-6 md:p-10"><div className="max-w-5xl mx-auto"><Link href="/" className="text-[#5869ef] font-semibold">← MediTec</Link><div className="card p-8 mt-6"><h1 className="text-3xl font-black capitalize">{title}</h1><p className="text-[#7b8094] mt-3">This MediTec workspace route is ready. Use the dashboard to manage profiles, media, creation and scheduling.</p><Link href="/" className="inline-block mt-6 rounded-xl bg-[#f04444] text-white px-5 py-3 font-bold">Back to dashboard</Link></div></div></main>;
}
