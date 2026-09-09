'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarDays, Images, Instagram, Plus, LayoutDashboard, ListPlus, Clapperboard, History, Settings } from 'lucide-react';

const items=[
  ['/admin','Admin',LayoutDashboard],
  ['/profiles','Profiles',Instagram],
  ['/gallery','Gallery',Images],
  ['/create','Create',Plus],
  ['/schedule','Schedule',CalendarDays],
  ['/bulk-scheduling','Bulk',ListPlus],
  ['/reels','Reels',Clapperboard],
  ['/reels-history','History',History],
  ['/settings','Settings',Settings],
] as const;

export default function MobileNav(){
 const path=usePathname();
 return <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-[#eceef4] safe-bottom overflow-x-auto">
   <div className="min-w-max grid grid-flow-col auto-cols-[78px] gap-1 px-2 py-2">
    {items.map(([href,label,Icon])=>{
      const active=path===href||path.startsWith(href+'/');
      return <Link key={href} href={href} className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-semibold ${active?'text-[#f04444] bg-[#fff3f3]':'text-[#73788b]'}`}>
        <Icon size={18}/><span>{label}</span>
      </Link>
    })}
   </div>
 </nav>
}