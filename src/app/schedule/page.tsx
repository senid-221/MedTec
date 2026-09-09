'use client';
import AppShell from '@/components/AppShell';
import SectionHeader from '@/components/SectionHeader';
import { KEYS, LocalPost, readLocal } from '@/lib/local';
import { useEffect, useState } from 'react';

export default function Schedule() {
  const [posts, setPosts] = useState<LocalPost[]>([]);

  useEffect(() => {
    const saved = readLocal<LocalPost[]>(KEYS.posts, []);
    setPosts(saved.filter((post) => Boolean(post.scheduledAt)));
  }, []);

  return (
    <AppShell>
      <SectionHeader title="Schedule" description="Upcoming scheduled content." />
      <div className="space-y-3">
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id} className="card p-4 flex items-center justify-between">
              <div>
                <b>{post.type}</b>
                <p className="text-sm text-[#7b8094] mt-1">{post.caption || 'No caption'}</p>
              </div>
              <span className="text-sm font-semibold text-[#5869ef]">
                {post.scheduledAt ? new Date(post.scheduledAt).toLocaleString() : ''}
              </span>
            </div>
          ))
        ) : (
          <div className="card p-10 text-center text-[#7b8094]">No scheduled posts yet.</div>
        )}
      </div>
    </AppShell>
  );
}
