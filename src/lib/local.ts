export type LocalProfile = {
  id: string; username: string; displayName: string; category: string; followers: string;
  imageUrl: string; instagramUrl: string; pinned: boolean; notes?: string;
};
export type LocalMedia = { id: string; url: string; name: string; type: 'photo'|'video'; source: 'local'|'imported'|'cloud'; status: 'Draft'|'Ready'|'Scheduled'|'Published'|'Imported'; profileId?: string; caption?: string; };
export type LocalPost = { id: string; profileId: string; type: 'Post'|'Reel'|'Story'; caption: string; mediaIds: string[]; scheduledAt?: string; status: 'Draft'|'Scheduled'|'Published'; createdAt: string; };
export const KEYS = { profiles:'meditec-profiles', media:'meditec-local-media', posts:'meditec-posts' } as const;
export function readLocal<T>(key: string, fallback: T): T { if (typeof window === 'undefined') return fallback; try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback; } catch { return fallback; } }
export function writeLocal<T>(key: string, value: T) { if (typeof window === 'undefined') return; localStorage.setItem(key, JSON.stringify(value)); }
export function uid() { return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }
export const configured = () => Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);