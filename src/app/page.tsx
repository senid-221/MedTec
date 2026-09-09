'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  ['Instagram accounts', 'Keep the profiles you manage in one organized workspace.'],
  ['Gallery', 'Store and prepare your real photos and videos for publishing.'],
  ['Schedule', 'Plan content with a simple calendar and upcoming-post view.'],
  ['Bulk scheduling', 'Prepare multiple pieces of content in one workflow.'],
  ['Reels', 'Create and organize short-form video content quickly.'],
  ['Reels history', 'Keep a clear record of content you have prepared.'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#202643] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#202643]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg">
              <Image src="/logo.svg" alt="MediTec" width={38} height={38} priority />
            </span>
            <span className="text-xl font-black tracking-tight">MediTec</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#workflow" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Link href="/login" className="rounded-xl bg-white px-5 py-2.5 text-sm font-extrabold text-[#202643] shadow-lg transition hover:-translate-y-0.5">
            Login
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#5869ef]" /> Create • Manage • Grow
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl">
            Your content. Your accounts. One beautiful workspace.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            MediTec is a private content management workspace for organizing real media, Instagram profiles, posts, reels and schedules without the clutter.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-xl bg-[#5869ef] px-6 py-3.5 font-extrabold shadow-lg shadow-[#5869ef]/20 transition hover:-translate-y-0.5">Open workspace</Link>
            <a href="#features" className="rounded-xl border border-white/10 bg-white/10 px-6 py-3.5 font-extrabold transition hover:bg-white/15">Explore features</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold text-white/50">
            <span>Private workspace</span><span>Real media</span><span>Responsive</span><span>Supabase ready</span>
          </div>
        </div>

        <div className="rounded-[30px] bg-white p-3 shadow-2xl shadow-black/25">
          <div className="overflow-hidden rounded-[24px] bg-[#f6f7fa] text-[#202643]">
            <div className="flex items-center justify-between border-b border-[#e9ebf1] bg-white px-5 py-4">
              <div className="flex items-center gap-3"><Image src="/logo.svg" alt="" width={30} height={30}/><div><p className="text-[10px] text-[#9a9eae]">Private workspace</p><p className="text-sm font-black">MediTec Dashboard</p></div></div>
              <span className="rounded-lg bg-[#f04444] px-3 py-2 text-[10px] font-extrabold text-white">+ Create</span>
            </div>
            <div className="grid grid-cols-[105px_1fr] gap-3 p-3">
              <div className="rounded-xl bg-white p-3">
                <div className="mb-5 h-7 w-7 rounded-lg bg-[#202643]" />
                {['Accounts','Gallery','Schedule','Bulk','Reels','History'].map((x) => <div key={x} className="mb-2 rounded-lg px-2 py-2 text-[8px] font-bold text-[#74798d]">{x}</div>)}
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-white p-4"><p className="text-[9px] text-[#9297a8]">Select Account</p><div className="mt-3 h-9 rounded-lg bg-[#f5f6f9]"/><div className="mt-2 h-9 rounded-lg bg-[#f5f6f9]"/></div>
                <div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><p className="text-[9px] text-[#9297a8]">Media</p><p className="mt-2 text-2xl font-black">24</p></div><div className="rounded-xl bg-white p-4"><p className="text-[9px] text-[#9297a8]">Scheduled</p><p className="mt-2 text-2xl font-black">12</p></div></div>
                <div className="rounded-xl bg-white p-4"><p className="text-[9px] text-[#9297a8]">Upcoming content</p><div className="mt-3 h-16 rounded-lg bg-[#eef0f5]"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-20 text-[#202643]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[.2em] text-[#5869ef]">Workspace</p><h2 className="mt-3 text-4xl font-black tracking-tight">Everything arranged the way you need it.</h2><p className="mt-4 leading-7 text-[#70758a]">The public site introduces MediTec. The private workspace gives the owner the tools shown in the reference UI.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, body]) => <div key={title} className="rounded-2xl border border-[#eceef4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="mb-5 h-10 w-10 rounded-xl bg-[#f0f2ff]"/><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#777c90]">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#f6f7fa] py-20 text-[#202643]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {[['01', 'Add accounts', 'Pin the Instagram profiles you manage.'], ['02', 'Prepare media', 'Upload your real photos and videos into the gallery.'], ['03', 'Create & schedule', 'Choose a profile, create content and plan when it goes out.']].map(([num, title, body]) => <div key={num} className="rounded-2xl bg-white p-7 shadow-sm"><span className="text-sm font-black text-[#5869ef]">{num}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#777c90]">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-16 text-center text-[#202643]">
        <div className="mx-auto max-w-2xl"><h2 className="text-3xl font-black">Ready to manage your content?</h2><p className="mt-3 text-[#777c90]">Enter the private MediTec workspace to start organizing your accounts and content.</p><Link href="/login" className="mt-7 inline-flex rounded-xl bg-[#5869ef] px-6 py-3.5 font-extrabold text-white">Open MediTec</Link></div>
      </section>

      <footer className="border-t border-white/10 bg-[#202643] px-5 py-8 text-center text-sm text-white/45">© 2026 MediTec · Create • Manage • Grow</footer>
    </main>
  );
}
