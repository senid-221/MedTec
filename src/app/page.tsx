'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(){
 return <main className="min-h-screen bg-[#202643] text-white">
  <header className="mx-auto max-w-7xl px-5 py-6 flex items-center justify-between">
   <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-2xl bg-white flex items-center justify-center p-2"><Image src="/logo.svg" alt="MediTec" width={36} height={36}/></div><span className="text-xl font-black">MediTec</span></div>
   <Link href="/login" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#202643]">Login</Link>
  </header>
  <section className="mx-auto max-w-7xl px-5 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
   <div><div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">Create • Manage • Grow</div><h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight">Your content workspace, beautifully organized.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/70">MediTec helps you organize real media, Instagram profiles, posts, reels and schedules from one clean workspace.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/login" className="rounded-xl bg-[#5869ef] px-6 py-3 font-bold">Open workspace</Link><a href="#features" className="rounded-xl bg-white/10 px-6 py-3 font-bold">Explore features</a></div></div>
   <div className="rounded-[28px] bg-white p-5 shadow-2xl"><div className="rounded-[22px] bg-[#f7f8fb] p-5"><div className="flex items-center justify-between"><div><p className="text-xs text-[#8a8fa1]">MediTec workspace</p><h2 className="text-xl font-black text-[#202643]">Content dashboard</h2></div><span className="rounded-lg bg-[#f04444] px-3 py-2 text-xs font-bold text-white">+ Create</span></div><div className="mt-5 grid grid-cols-3 gap-3">{['Profiles','Media','Scheduled'].map(x=><div key={x} className="rounded-xl bg-white p-4"><p className="text-xs text-[#8a8fa1]">{x}</p><p className="mt-2 text-2xl font-black text-[#202643]">0</p></div>)}</div><div className="mt-4 rounded-xl bg-white p-4"><div className="h-3 w-32 rounded bg-[#e9ebf2]"/><div className="mt-3 h-24 rounded-xl bg-[#eef0f6]"/></div></div></div>
  </section>
  <section id="features" className="bg-white text-[#202643] py-16"><div className="mx-auto max-w-7xl px-5"><h2 className="text-3xl font-black">Everything in one workspace</h2><div className="mt-8 grid md:grid-cols-3 gap-5">{[['Instagram accounts','Pin and organize the profiles you manage.'],['Gallery','Keep your real photos and videos ready to use.'],['Schedule','Plan posts, reels and stories with a clear calendar.']].map(([a,b])=><div key={a} className="rounded-2xl border border-[#eceef4] p-6"><h3 className="font-black">{a}</h3><p className="mt-2 text-sm leading-6 text-[#70758a]">{b}</p></div>)}</div></div></section>
  <footer className="bg-[#202643] px-5 py-8 text-center text-sm text-white/50">© 2026 MediTec · Create • Manage • Grow</footer>
 </main>
}
