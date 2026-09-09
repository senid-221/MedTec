'use client';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  ['Kwamamariza website zindi', 'Dufasha website n’imishinga yo kuri internet kugera ku bantu benshi binyuze mu content na social media.'],
  ['Promotions z’Abahanzi', 'Kwamamaza indirimbo, releases, videos, events n’izindi promotions z’abahanzi ku mbuga nkoranyambaga.'],
  ['Promotions z’Aba Producers', 'Kwamamaza producers, studios, productions n’imishinga yabo kugira ngo ibashe kugera ku bakiriya n’abakunzi benshi.'],
  ['Promotions z’Amaduka', 'Kwamamaza amaduka, products, offers na promotions kugira ngo bigere ku bakiriya benshi kandi byongere visibility.'],
];

export default function Home(){
 return <main className="min-h-screen bg-[#202643] text-white">
  <header className="mx-auto max-w-7xl px-5 py-6 flex items-center justify-between">
   <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-2xl bg-white flex items-center justify-center p-2"><Image src="/logo.svg" alt="MediTec" width={36} height={36}/></div><span className="text-xl font-black">MediTec</span></div>
   <nav className="hidden md:flex items-center gap-7 text-sm text-white/70"><a href="#services" className="hover:text-white">Services</a><a href="#about" className="hover:text-white">About</a><a href="#contact" className="hover:text-white">Contact</a></nav>
   <Link href="/login" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#202643]">Login</Link>
  </header>
  <section className="mx-auto max-w-7xl px-5 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
   <div><div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">Create • Promote • Grow</div><h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight">Kwamamaza no guteza imbere ibikorwa byawe kuri internet.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/70">MediTec ifasha abahanzi, producers, amaduka n’abafite websites kwamamaza ibikorwa byabo no kugera ku bantu benshi.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#services" className="rounded-xl bg-[#5869ef] px-6 py-3 font-bold">Reba Services</a><a href="#contact" className="rounded-xl bg-white/10 px-6 py-3 font-bold">Twandikire</a></div></div>
   <div className="rounded-[28px] bg-white p-5 shadow-2xl"><div className="rounded-[22px] bg-[#f7f8fb] p-5"><div className="flex items-center justify-between"><div><p className="text-xs text-[#8a8fa1]">MediTec</p><h2 className="text-xl font-black text-[#202643]">Promotion workspace</h2></div><span className="rounded-lg bg-[#f04444] px-3 py-2 text-xs font-bold text-white">+ Create</span></div><div className="mt-5 grid grid-cols-2 gap-3">{['Websites','Artists','Producers','Shops'].map(x=><div key={x} className="rounded-xl bg-white p-4"><p className="text-xs text-[#8a8fa1]">{x}</p><p className="mt-2 text-lg font-black text-[#202643]">Promotion</p></div>)}</div><div className="mt-4 rounded-xl bg-white p-4"><div className="h-3 w-32 rounded bg-[#e9ebf2]"/><div className="mt-3 h-24 rounded-xl bg-[#eef0f6]"/></div></div></div>
  </section>
  <section id="services" className="bg-white text-[#202643] py-16"><div className="mx-auto max-w-7xl px-5"><div className="max-w-2xl"><p className="text-sm font-bold text-[#5869ef]">SERVICES</p><h2 className="mt-2 text-3xl md:text-4xl font-black">Kwamamaza ibikorwa byawe, bigere ku bantu benshi.</h2><p className="mt-4 text-[#70758a]">Dukora promotions zijyanye n’icyo ukora n’abantu ushaka kugeraho.</p></div><div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">{services.map(([title,desc])=><div key={title} className="rounded-2xl border border-[#eceef4] p-6 shadow-sm"><div className="h-10 w-10 rounded-xl bg-[#eef0ff] flex items-center justify-center text-[#5869ef] font-black">M</div><h3 className="mt-5 font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#70758a]">{desc}</p></div>)}</div></div></section>
  <section id="about" className="bg-[#f7f8fb] text-[#202643] py-16"><div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-10 items-center"><div><p className="text-sm font-bold text-[#5869ef]">ABOUT MEDitec</p><h2 className="mt-2 text-3xl font-black">Aho gucunga no kwamamaza content bihurira hamwe.</h2></div><p className="text-[#70758a] leading-7">MediTec yubakiye ku buryo bwo gutegura, gucunga no kwamamaza content mu buryo busukuye kandi bworoshye, hagamijwe gufasha businesses n’abakora content gukura.</p></div></section>
  <section id="contact" className="bg-white text-[#202643] py-14"><div className="mx-auto max-w-7xl px-5 rounded-3xl bg-[#202643] text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"><div><h2 className="text-3xl font-black">Ufite icyo ushaka kwamamaza?</h2><p className="mt-2 text-white/60">Tuganire ku promotion ikubereye.</p></div><a href="https://wa.me/250726969060" className="rounded-xl bg-[#5869ef] px-6 py-3 font-bold text-center">Twandikire kuri WhatsApp</a></div></section>
  <footer className="bg-[#202643] px-5 py-8 text-center text-sm text-white/50">© 2026 MediTec · Create • Promote • Grow</footer>
 </main>
}
