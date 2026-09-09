'use client';

import { useState } from 'react';

const nav = ['Dashboard','Profiles','Gallery','Create','Schedule','Bulk Scheduling','Reels','Reels History','Settings'];

export default function Home() {
  const [active,setActive]=useState('Dashboard');
  return <main className="min-h-screen flex">
    <aside className="hidden lg:block w-64 bg-white border-r border-[#eceef4] p-5">
      <div className="text-2xl font-black mb-8">Medi<span className="text-[#f04444]">Tec</span></div>
      <div className="space-y-1">{nav.map(n=><button key={n} onClick={()=>setActive(n)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold ${active===n?'bg-[#f1f3ff] text-[#5869ef]':'text-[#70758a] hover:bg-[#f8f9fc]'}`}>{n}</button>)}</div>
    </aside>
    <section className="flex-1 p-5 md:p-8">
      <div className="flex items-center justify-between mb-8"><div><p className="text-sm text-[#8a8fa1]">Private workspace</p><h1 className="text-3xl font-black">{active}</h1></div><button className="rounded-xl bg-[#f04444] text-white px-5 py-3 font-bold">+ Create</button></div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">{[['Instagram Profiles','0'],['Media Assets','0'],['Scheduled','0'],['Published','0']].map(([a,b])=><div className="card p-5" key={a}><p className="text-sm text-[#8a8fa1]">{a}</p><div className="text-3xl font-black mt-2">{b}</div><p className="text-xs text-[#8a8fa1] mt-2">Ready to manage</p></div>)}</div>
      <div className="grid xl:grid-cols-[1.4fr_1fr] gap-5"><div className="card p-6"><h2 className="text-lg font-bold">Content workspace</h2><p className="text-sm text-[#7b8094] mt-2">Upload real photos and videos, attach them to your Instagram profiles, then draft or schedule content.</p><div className="grid sm:grid-cols-3 gap-3 mt-6">{['Upload media','Add profile','Schedule content'].map(x=><button key={x} className="rounded-xl border border-[#eceef4] p-4 text-left font-semibold hover:bg-[#fafafa]">{x}<span className="block text-xs text-[#8a8fa1] font-normal mt-1">Open workflow →</span></button>)}</div></div><div className="card p-6"><h2 className="text-lg font-bold">Quick status</h2><div className="space-y-4 mt-5">{['Profiles pinned','Media ready','Upcoming posts'].map((x,i)=><div className="flex justify-between text-sm" key={x}><span>{x}</span><span className="font-bold">{i===0?'0':'0'}</span></div>)}</div></div></div>
      <div className="mt-5 text-xs text-[#9a9eae]">MediTec is a private owner workspace. Instagram publishing requires an official Meta/Instagram API integration; no fake publishing is used.</div>
    </section>
  </main>;
}
