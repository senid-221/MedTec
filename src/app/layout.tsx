import type { Metadata } from 'next'; import './globals.css';
export const metadata: Metadata={title:'MediTec — Private Content Workspace',description:'Private social content management workspace for real photos and videos.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}